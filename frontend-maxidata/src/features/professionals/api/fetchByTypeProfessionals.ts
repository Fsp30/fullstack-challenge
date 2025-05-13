import { ProfessionalService } from "../services/ProfessionalService";

type Params = {
        typeId: number,
}

export const fetchByTypeProfessionals = async({typeId}: Params) =>{
        return await ProfessionalService.findByType(typeId)
}