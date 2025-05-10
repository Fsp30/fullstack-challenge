import { TypeProfessionalService } from "../services/TypeProfessionalService";

type Params = {
        id: number
}

export const fetchOneTypeProfessionals = async ({id} : Params) => {
        return await TypeProfessionalService.findOne(id)
}