import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProfessionalsPage } from '../pages/ProfessionalsPages'
import { ProfessionalList } from '../pages/ProfessionalsPages/ProfessionalList'

export function ProfessionalsRoutes(){
        return( <>
                <Route path="/professionals" element={<ProfessionalsPage/>}/>
                <Route path="/professionals/findAll" element={<ProfessionalList/>}/>
                </>
        )
}