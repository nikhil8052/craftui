import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes,  Switch, Redirect } from "react-router-dom";
// Admin Pages
import AdminLoginPage  from "./pages/admin/Login";
import AdminDashboard  from "./pages/admin/AdminDashboard";
import AdminRouteAccess from './components/admin/AdminRouteAccess';
import AdminLayout from './components/admin/AdminLayout'; // Import the Admin Layout

import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar, ProSidebarProvider } from 'react-pro-sidebar';

// Users Pages 
import UserHomePage  from "./pages/users/UserHomePage";



function App() {
  return (
    <ProSidebarProvider>
    <Routes>
    {/* Define routes here */}
    <Route path="/" element={<UserHomePage />} />
    <Route path="/admin-login" element={<AdminLoginPage />} />


    {/* Admin dashboard protected Routes  */}
    <Route
          path="/admin/dashboard"
          element={
            <AdminRouteAccess>
              <AdminLayout> {/* Wrap AdminDashboard in AdminLayout */}
                <AdminDashboard />
              </AdminLayout>
            </AdminRouteAccess>
          }
        />

    </Routes>
    </ProSidebarProvider>

  );
}

export default App;
