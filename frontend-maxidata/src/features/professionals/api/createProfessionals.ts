import { ProfessionalService } from "../services/ProfessionalService";
import { CreateProfessionalDto } from "../types";

export const createTypeProfessionals = async(data: CreateProfessionalDto) =>{
        return await ProfessionalService.create(data)
}