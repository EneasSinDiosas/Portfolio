import { Routes, Route } from "react-router-dom";
import App from '../App';
import { Login } from "../pages/Login.page";
import { Register } from "../pages/Register.page";
import { Contactme } from "../pages/Contactme.page";
import { PageNotFound } from "../pages/PageNotFound.page";
import { Weather5days } from "../pages/Wheather5days.page";
import { ProtectedRoutes } from './Protected.routes';
import { TikTakToe } from '../pages/TikTakToe.page'
 
//<Route path="*" element={<NotFound/>}/>
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/contactme" element={<Contactme/>}/>
            <Route path="/tiktaktoe" element={<TikTakToe/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            <Route element={<ProtectedRoutes/>}>
                <Route path="/weather5days" element={<Weather5days/>}/>
            </Route>
        </Routes>
    )
}