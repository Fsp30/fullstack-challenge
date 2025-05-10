import { ProfessionalService } from "../services/ProfessionalService";

type Params = {
        page: number,
        limit: number
}

export const fetchProfessionals = async({page, limit}: Params) => {
        return await ProfessionalService.findAll(page, limit)
}