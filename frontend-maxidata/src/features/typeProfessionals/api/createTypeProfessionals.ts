import { TypeProfessionalService } from "../services/TypeProfessionalService";

import { CreateTypeProfessionalDto } from "../types";
export const createTypeProfessionals = async(data: CreateTypeProfessionalDto) =>{
        return await TypeProfessionalService.create(data)
}
