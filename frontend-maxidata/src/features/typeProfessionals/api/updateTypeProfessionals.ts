import { TypeProfessionalService } from "../services/TypeProfessionalService";
import { UpdateTypeProfessionalDto } from "../types";

export const updateTypeProfessionals = async (data: UpdateTypeProfessionalDto, id: string) => {
        return await TypeProfessionalService.update(data, id)
}