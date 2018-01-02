// @flow
import * as React from 'react';
import { renderRoutes } from "react-router-config";

type Props = {
  route?: Object,
};

const Home = ({ route }: Props) => (
  <div>Home component
    <a href="#" onClick={onClick}>Click me</a>
    {route && renderRoutes(route.routes)}
  </div>
);

const onClick = () => {
  console.log('Clicked');
};

export default Home;