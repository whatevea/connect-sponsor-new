import { createBrowserRouter } from 'react-router-dom';
import ProtectedLayout from '../components/layouts/ProtectedLayout';
import DashboardPage from '../pages/DashboardPage';
import SettingsPage from '../pages/SettingsPage';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/auth/LoginPage';
import { ROUTE_PATHS } from './paths';

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    { path: ROUTE_PATHS.LOGIN, element: <LoginPage /> },
    {
      path: '/',
      element: <ProtectedLayout />,
      children: [
        { path: ROUTE_PATHS.DASHBOARD, element: <DashboardPage /> },
        { path: ROUTE_PATHS.SETTINGS, element: <SettingsPage /> },
        { path: ROUTE_PATHS.PROFILE, element: <ProfilePage /> },
      ],
    },
  ]);
