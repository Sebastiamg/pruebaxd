import { createBrowserRouter } from 'react-router';
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
