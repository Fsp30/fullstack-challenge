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
    const response = await api.get(
      `/profeessional/filter/by-type/${typeId}&page=${page}&limit=${limit}`
    );
    return response.data;
  },

  create: async (data: CreateProfessionalDto): Promise<void> => {
    await api.post("/professional", data);
  },

  update: async (
    data: UpdateProfessionalDto,
    id: number
  ): Promise<ProfessionalResponse> => {
    const response = await api.put(`/professional/${id}`, data);
    return response.data;
  },

  remove: async (id: number): Promise<void> => {
    await api.delete(`/professional/${id}`);
  },
};
