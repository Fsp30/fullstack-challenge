import { api } from "../../../services/api";
import { CreateTypeProfessionalDto } from "../types";
import { UpdateTypeProfessionalDto } from "../types";
import { ResponseTypeProfessional } from "../types";
import { ResponseTypeProfessionalList } from "../types";

export const TypeProfessionalService = {
        findAll: async (page:number = 1, limit:number = 10): Promise<{data: ResponseTypeProfessionalList[], total: number}> => {
                const response = await api.get(`/type-professional?page=${page}&limit=${limit}`)
                return response.data
        },

        findOne: async (id: string): Promise<ResponseTypeProfessional> => {
                const response = await api.get(`/type-professional/${id}`)
                return response.data
        },

        create: async (data: CreateTypeProfessionalDto): Promise<void> => {
                await api.post("/type-professional", data)
        },

        update: async(data: UpdateTypeProfessionalDto, id:string): Promise<ResponseTypeProfessional> =>{
                const response = await api.put(`/type-professional/${id}`, data)
                return response.data
        },
        
        remove: async(id:string): Promise<void> =>{
                await api.delete(`/type-professional/${id}`)
        }



}