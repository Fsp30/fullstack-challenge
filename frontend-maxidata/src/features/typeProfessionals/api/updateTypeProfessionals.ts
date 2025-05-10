import { TypeProfessionalService } from "../services/TypeProfessionalService";
import { UpdateTypeProfessionalDto } from "../types";

export const updateTypeProfessionals = async (data: UpdateTypeProfessionalDto, id: number) => {
        return await TypeProfessionalService.update(data, id)
}