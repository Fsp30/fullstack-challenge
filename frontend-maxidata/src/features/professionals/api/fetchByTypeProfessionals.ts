import { ProfessionalService } from "../services/ProfessionalService";

type Params = {
        typeId: number,
        page: number,
        limit: number
}

export const fetchByTypeProfessionals = async({typeId, page, limit}: Params) =>{
        return await ProfessionalService.findByType(typeId, page, limit)
}