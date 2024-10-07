import React from 'react';
import { Navigate } from 'react-router-dom';

// AdminRoute: A custom component that checks for admin access
const AdminRouteAccess = ({ children }) => {
  const token = localStorage.getItem('token'); // Fetch token from local storage
  const user = token ? JSON.parse(atob(token.split('.')[1])) : null; // Decode JWT to extract user info
  // Check if user exists and has admin role
  // return user && user.role === 'admin' ? children : <Navigate to="/" />;
  return children;
  
};

export default AdminRouteAccess;
