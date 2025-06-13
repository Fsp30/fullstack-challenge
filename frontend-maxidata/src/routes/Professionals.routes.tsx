import { Route } from 'react-router-dom'
import { ProfessionalsPage } from '../pages/ProfessionalsPages'
import { ProfessionalList } from '../pages/ProfessionalsPages/ProfessionalList'
import { UpdateSelectorProfessionals } from '../pages/ProfessionalsPages/UpdateSelector'
import { ProfessionalFormUpdate } from '../pages/ProfessionalsPages/UpdateProfessionalsForm'

export function ProfessionalsRoutes(){
        return( <>
                <Route path="/professionals" element={<ProfessionalsPage/>}/>
                <Route path="/professionals/findAll" element={<ProfessionalList/>}/>
                <Route path="/professionals/update" element={<UpdateSelectorProfessionals/>}/>
                <Route path="/professionals/update/:id" element={<ProfessionalFormUpdate/>}/>
                </>
        )
}