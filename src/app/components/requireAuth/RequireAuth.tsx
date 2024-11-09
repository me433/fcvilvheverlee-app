import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

interface RequireAuthProps {
    allowedRoles: string[];
    loading: boolean;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRoles, loading }) =>{
    const { auth } = useAuth();
    const location = useLocation();

    if (loading) return <div>Loading</div>

    return (
        auth?.roles?.find((role: string) => allowedRoles?.includes(role)) ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
    )
}

export default RequireAuth;