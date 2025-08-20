import { Login } from "@/utils/magicValues";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
    const userSecurity = localStorage.getItem('securityPublic');
    // const isAuthenticated = userData && userData.token;

    if (!userSecurity) {
        return <Navigate to={`/${Login}`} replace />;
    }

    return <Outlet />;
}