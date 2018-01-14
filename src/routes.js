// @flow
import MainLayout from 'components/MainLayout';
import Home from 'components/Home';
import Test from 'components/Test';
import TestChild from 'components/TestChild';

const routes = [
  {
    path: '/',
    // exact: true,
    component: MainLayout,
    routes: [
      {
        path: '/products',
        component: Home,
      },
      {
        path: '/manufacturers',
        component: Test,
        routes: [
          {
            path: '/manufacturers/child',
            component: TestChild,
          },
        ],
      },
    ],
  },
];

export default routes;
