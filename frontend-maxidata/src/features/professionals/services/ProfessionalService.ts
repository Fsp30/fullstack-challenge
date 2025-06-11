import { api } from "../../../services/api";
import { CreateProfessionalDto } from "../types";
import { UpdateProfessionalDto } from "../types";
import { ProfessionalResponse } from "../types";
import { ProfessionalListResponse } from "../types";
import { fakeProfessionals } from "../../../test/mocks/fakeProfessionals";

export const ProfessionalService = {
  findAll: async (
    page: number = 1,
    limit: number = 10
  ): Promise<{ data: ProfessionalListResponse; total: number }> => {
    if (import.meta.env.DEV) {
      const start = (page - 1) * limit;
      const end = start + limit;
      const data = fakeProfessionals.slice(start, end);

      return {
        data,
        total: fakeProfessionals.length,
      }
    }

    const response = await api.get(`/professional?page=${page}&limit=${limit}`);
    return response.data;
  },

  findOne: async (id: number): Promise<ProfessionalResponse> => {
    if (import.meta.env.DEV) {
      const professional = fakeProfessionals.find((p) => p.id === id)
      if (!professional) {
        throw new Error("Profissional não encontrado")
      }
      return professional
    }
    const response = await api.get(`/professional/${id}`)
    return response.data
  },

  findByType: async (
    typeId: number,
    page: number = 1,
    limit: number = 10
  ): Promise<{ data: ProfessionalListResponse; total: number }> => {
    if (import.meta.env.DEV) {
      const filtered = fakeProfessionals.filter(
        (p) => p.typeOfProfessionalId === typeId
      )
      const start = (page - 1) * limit;
      const end = start + limit;
      const data = filtered.slice(start, end);
      return {
        data,
        total: filtered.length,
      }
    }

    const response = await api.get(
      `/profeessional/filter/by-type/${typeId}&page=${page}&limit=${limit}`
    )
    return response.data
  },

  create: async (data: CreateProfessionalDto): Promise<void> => {
    if (import.meta.env.DEV) {
      const now = new Date().toISOString()

      const newProfessional: ProfessionalResponse = {
        id: fakeProfessionals.length + 1,
        createdAt: now,
        updatedAt: now,
        situation: true,
        name: data.name,
        email: data.email,
        telephone: data.telephone,
        typeOfProfessionalId: data.typeOfProfessionalId,

        typeProfessional: {
          id: data.typeOfProfessionalId,
          describe: "Mock Tipo Profissional",
          createdAt: new Date(),
          updatedAt: new Date(),
          situation: true,
        },
      }

      fakeProfessionals.push(newProfessional);
      return
    }

    await api.post("/professional", data);
  },

  update: async (
    data: UpdateProfessionalDto,
    id: number
  ): Promise<ProfessionalResponse> => {
    if (import.meta.env.DEV) {
      const index = fakeProfessionals.findIndex((p) => p.id === id);
      if (index === -1) {
        throw new Error("Profissional não encontrado")
      }
      const updatedProfessional = {
        ...fakeProfessionals[index],
        ...data,
      }
      fakeProfessionals[index] = updatedProfessional
      return updatedProfessional
    }

    const response = await api.put(`/professional/${id}`, data);
    return response.data;
  },

  remove: async (id: number): Promise<void> => {
    if (import.meta.env.DEV) {
      const index = fakeProfessionals.findIndex((p) => p.id === id)
      if (index !== -1) {
        fakeProfessionals.splice(index, 1)
      }
      return
    }

    await api.delete(`/professional/${id}`)
  },
}
