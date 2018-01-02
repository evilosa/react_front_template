// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

type Props = {
  route?: Object,
};

class Test extends React.Component<Props> {
  // props: Props;

  render() {
    const { route } = this.props;

    return (
      <div>
        Test component
        <Link to="/test/child">Child</Link>
        {route && renderRoutes(route.routes)}
      </div>
    );
  }
}

export default Test;
