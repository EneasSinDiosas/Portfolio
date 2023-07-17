import { Routes, Route } from "react-router-dom";
import App from '../App';
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Contactme } from "../pages/Contactme";
import { PageNotFound } from "../pages/PageNotFound";


//<Route path="*" element={<NotFound/>}/>
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/contactme" element={<Contactme/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}