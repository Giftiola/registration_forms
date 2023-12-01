import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import SignIn from './components/Forms/SignIn.jsx';
import AllowedAccess from './components/AllowedAccess.jsx';
import RouterError from './components/RouterError.jsx';
import SignUp from './components/Forms/SignUp.jsx';
import Registered from './components/Registered.jsx';
import ForgotPassword from './components/Forms/ForgotPassword.jsx';
import ChangePassword from './components/Forms/ChangePassword.jsx';
import ChangePasswordReady from './components/ChangePasswordReady.jsx';

// Define router
const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
    errorElement: <RouterError />
  },
  {
    path: '/u',
    element: <AllowedAccess />,
    errorElement: <RouterError />
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <RouterError />
  },
  {
    path: '/registered',
    element: <Registered />,
    errorElement: <RouterError />
  },
  {
    path: '/forgotpassword',
    element: <ForgotPassword />,
    errorElement: <RouterError />
  },
  {
    path: '/changepassword',
    element: <ChangePassword />,
    errorElement: <RouterError />
  },
  {
    path: '/changepasswordready',
    element: <ChangePasswordReady />,
    errorElement: <RouterError />
  },
]);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;
