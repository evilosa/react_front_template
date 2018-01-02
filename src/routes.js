// @flow
import Home from 'components/Home';
import Test from 'components/Test';
import TestChild from 'components/TestChild';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/test',
    component: Test,
    routes: [
      {
        path: '/test/child',
        component: TestChild,
      }
    ]
  }
];

export default routes;