// @flow
import * as React from 'react';
import { renderRoutes } from 'react-router-config';

import Button from 'rambler-ui/Button';

type Props = {
  route?: Object,
};

const Home = ({ route }: Props) => (
  <div>
    Home component
    <a href="#" onClick={onClick}>
      Click me
    </a>
    <Button>Click</Button>
    {route && renderRoutes(route.routes)}
  </div>
);

const onClick = () => {
  console.log('Clicked');
};

export default Home;
