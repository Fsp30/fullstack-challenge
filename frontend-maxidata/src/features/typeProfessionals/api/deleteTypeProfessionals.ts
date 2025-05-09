import { TypeProfessionalService } from "../services/TypeProfessionalService";

type Params = {
        id: string
}

export const deleteTypeProfessionals = async({id}: Params) => {
        return await TypeProfessionalService.remove(id)
}