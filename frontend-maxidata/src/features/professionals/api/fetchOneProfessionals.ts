import { ProfessionalService } from "../services/ProfessionalService";

type Params = {
        id:string
}

export const fetchOneProfessionals = async({id}: Params) => {
        return await ProfessionalService.findOne(id)
}