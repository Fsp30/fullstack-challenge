import { TypeProfessionalService } from "../services/TypeProfessionalService";

type Params = {
        page: number,
        limit: number
}

export const fetchTypeProfessionals = async({page, limit}: Params) => {
        return await TypeProfessionalService.findAll(page, limit)
}