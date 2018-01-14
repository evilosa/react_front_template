// @flow
import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import './styles.css';

type Props = {
  route?: Object,
  children?: any,
};

const ContentLayout = ({ route }: Props) => (
  <div styleName="content">{route && renderRoutes(route.routes)}</div>
);

export default ContentLayout;
