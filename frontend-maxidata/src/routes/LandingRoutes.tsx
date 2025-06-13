import { Route } from "react-router-dom";
import { LandingPage } from "../pages";
import { Home } from "../pages/home/Home";
import { LoginPage } from "../pages/Login";

export function MainRoutes(){
        return(
                <>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/Home" element={<Home/>}/>
                        <Route path="/Login" element={<LoginPage/>}/>
                </>
        )
}