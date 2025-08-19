import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
    const user = localStorage.getItem('userData');
    // const isAuthenticated = userData && userData.token;

    if (!user) {
        return <Navigate to="/auth/login" replace />;
    }

    return <Outlet />;
}