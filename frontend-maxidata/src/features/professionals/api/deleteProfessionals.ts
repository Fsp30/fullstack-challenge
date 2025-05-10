import { ProfessionalService } from "../services/ProfessionalService";

type Params = {
        id:string
}

export const deleteProfessionals = async({id}: Params) =>{
        return await ProfessionalService.remove(id)
}