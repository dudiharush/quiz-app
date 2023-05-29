import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../store/selectors';

type PrivateRouteProps = {
    children: JSX.Element;
};

export const PrivateRoute = ({ children }: PrivateRouteProps):JSX.Element  => {
    const user = useUser();
    const location = useLocation();
    
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children;
}