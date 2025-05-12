import { ProfessionalService } from "../services/ProfessionalService";
import { CreateProfessionalDto } from "../types";

export const createProfessionals = async(data: CreateProfessionalDto) =>{
        return await ProfessionalService.create(data)
}