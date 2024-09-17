import React from 'react';  

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,

} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import Allusers from 'views/admin/allusers';
import Alljobs from 'views/admin/alljobs';
import Allevents from 'views/admin/allevents';
import Allgroups from 'views/admin/allgroups';
import Allblogs from 'views/admin/allblogs';
import Featuredalumni from 'views/admin/featuredalumni';
import Feedbacks from 'views/admin/allfeedback';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';


const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },

  {
    name: 'All Users',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/all-users',
    component: <Allusers />,
  },
  {
    name: 'All Jobs',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/jobs',
    component: <Alljobs />,
  },{
    name: 'All Events',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/events',
    component: <Allevents />,
  },
  {
    name: 'All Groups',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/groups',
    component: <Allgroups />,
  },
  {
    name: 'All Blogs',
    layout: '/admin',
    path: '/blogs',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: <Allblogs/>,
  },
  
  {
    name: 'Featured Alumni',
    layout: '/admin',
    path: '/featured-alumni',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: <Featuredalumni />,
  },
  {
    name: 'Alumni Feedback',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/feedbacks',
    component: <Feedbacks />,
  },
  // {
  //   name: 'Data Tables',
  //   layout: '/admin',
  //   icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
  //   path: '/data-tables',
  //   component: <DataTables />,
  // },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  // {
  //   name: 'Sign In',
  //   layout: '/auth',
  //   path: '/sign-in',
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  //   component: <SignInCentered />,
  // },
  // {
  //   name: 'Sign UP',
  //   layout: '/auth',
  //   path: '/sign-up',
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  //   component: <SignInup />,
  // },
  // {
  
];

export default routes;
