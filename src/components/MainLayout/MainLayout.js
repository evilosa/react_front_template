// @flow
import * as React from 'react';
// import { renderRoutes } from 'react-router-config';
import Navigation from 'components/NavBar';
import ContentLayout from 'components/ContentLayout';
import './styles.css';

type Props = {
  route?: Object,
  children?: any,
};

const MainLayout = ({ route }: Props) => (
  <div styleName="root">
    <Navigation />
    <ContentLayout route={route} />
  </div>
);

export default MainLayout;
