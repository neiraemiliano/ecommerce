import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateDrawer from './layout/private/PrivateDrawer';
import PublicDrawer from './layout/public/Drawer';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import Products from './pages/products/Products';

const App = () => {
  return (
    <Routes>
      <Route element={<PublicDrawer />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/dashboard" element={<PrivateDrawer />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
