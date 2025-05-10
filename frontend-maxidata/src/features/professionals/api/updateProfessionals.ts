import { ProfessionalService } from "../services/ProfessionalService";
import { UpdateProfessionalDto } from "../types";

export const updateProfessionals = async(data: UpdateProfessionalDto, id:string) => {
        return await ProfessionalService.update(data, id)
}