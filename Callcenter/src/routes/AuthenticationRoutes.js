import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
// import MainRoutes from './MainRoutes';
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/register',
            element: <AuthRegister3 />
        },
        {
            path: '/login',
            element: <AuthLogin3 />
        }
        
    ]
};

export default AuthenticationRoutes;
