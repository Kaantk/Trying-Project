import React from 'react';
import { useSelector, Navigate } from '../NamedExports';

export const PrivateRoute = ({ element, redirectTo }) => {
  const user = useSelector((state) => state.auth.user);

  return user ? element : <Navigate to={redirectTo} />;
};
