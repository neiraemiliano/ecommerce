import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { IconButton } from '@material-tailwind/react';
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Configurator from './components/configurator';
import DashboardNavbar from './components/dashboard-navbar';
import Sidenav from './components/Sidenav';
import routes from '@/utils/routes';
import { useMaterialTailwindController, setOpenConfigurator } from '@/context';

const PrivateDrawer = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;

  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  return (
    <div className="bg-blue-gray-50/50 min-h-screen">
      <Sidenav
        routes={routes}
        brandImg={sidenavType === 'dark' ? '/img/logo-ct.png' : '/img/logo-ct-dark.png'}
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="shadow-blue-gray-900/10 fixed bottom-8 right-8 z-40 rounded-full"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <Outlet />
        <div className="text-blue-gray-600">{/* <Footer /> */}</div>
      </div>
    </div>
  );
};

export default PrivateDrawer;
