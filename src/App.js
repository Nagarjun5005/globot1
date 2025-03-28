import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Learnings from './Pages/Learnings'
import Dashboard from './Pages/Dashboard'
import ProfilePage from './Pages/ProfilePage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ReferralPortal from './Pages/ReferralPortal';
import Layout from './Components/Layout';
import InternalJob from './Pages/InternalJob';



const AppRoutes = () => {
  const location = useLocation();
  
  // Routes where Layout should not be displayed
  const hideLayout = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {hideLayout ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/referral" element={<ReferralPortal />} />
            <Route path="/careers" element={<Learnings/>} />
            <Route path="/internaljobportal" element={<InternalJob/>} />
          </Routes>
        </Layout>
      )}
     
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
