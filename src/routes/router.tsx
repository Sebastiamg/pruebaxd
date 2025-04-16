import { createBrowserRouter, Navigate } from 'react-router';

import "primereact/resources/themes/viva-light/theme.css"

import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AuthLayout from '../pages/Layouts/AuthLayout';
import Layout from '../pages/Layouts/Layout';
import HomePage from '../pages/HomePage';


export const ruter = createBrowserRouter([
  {
    path: '',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />
      },
      {
        path: 'login',
        Component: LoginPage,
      },
      {
        path: 'register',
        Component: RegisterPage,
      },
    ],
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);
