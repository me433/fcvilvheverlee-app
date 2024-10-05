import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

interface RequireAuthProps {
    allowedRoles: string[];
}

const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRoles }) =>{
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find((role: string) => allowedRoles?.includes(role)) ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
    )
}

export default RequireAuth;