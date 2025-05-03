import { api } from "../../../services/api";
import { CreateProfessionalDto } from "../types";
import { UpdateProfessionalDto } from "../types";
import { ProfessionalResponse } from "../types";
import { ProfessionalListResponse } from "../types";

export const ProfessionalService = {
        findAll: async(): Promise<ProfessionalListResponse[]> => {
                const response = await api.get("/professional")
                return response.data
        },

        findOne: async(id: string): Promise<ProfessionalResponse> => {
                const response = await api.get(`/professional/${id}`)
                return response.data
        },

        create: async(data: CreateProfessionalDto): Promise<void> => {
                await api.post("/professional", data)
        },

        update: async(data: UpdateProfessionalDto, id:string):Promise<ProfessionalResponse> =>{
                const response = await api.put(`/professional/${id}`, data)
                return response.data
        },

        remove: async(id:string): Promise<void> =>{
                await api.delete(`/professional/${id}`)
        }
        
}