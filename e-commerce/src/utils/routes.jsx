import { HomeIcon, UserCircleIcon, TableCellsIcon, BellIcon } from '@heroicons/react/24/solid';

import React from 'react';
import Dashboard from '../pages/dashboard/Dashboard';
import DashboardProducts from '../pages/dashboard/Products';

const icon = {
  className: 'w-5 h-5 text-inherit',
};

export const routes = [
  {
    layout: 'dashboard',
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: 'dashboard',
        path: '#',
        element: <Dashboard />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: 'profile',
      //   path: '/profile',
      //   element: <Profile />,
      // },
      {
        icon: <TableCellsIcon {...icon} />,
        name: 'productos',
        path: '/products',
        element: <DashboardProducts />,
      },
      // {
      //   icon: <BellIcon {...icon} />,
      //   name: 'notifactions',
      //   path: '/notifactions',
      //   element: <Notifications />,
      // },
    ],
  },
];

export default routes;
