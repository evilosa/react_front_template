// @flow
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { SideNav, SideNavItem } from 'rambler-ui/SideNav';
import { BookIcon, EmailIcon, PhoneIcon } from 'rambler-ui/icons/forms';

import styles from './styles.css';

type State = {
  currentPage: string,
};

class NavBar extends React.Component<{}, State> {
  state: State;

  constructor() {
    super();

    this.state = {
      currentPage: '/',
    };
  }

  _onPageChange = (event: Object, newPage: string) => {
    this.setState(prev => ({
      ...prev,
      currentPage: newPage,
    }));
  };

  _renderItem = (title: string, value: string, icon: any) => {
    const { currentPage } = this.state;
    const isActive = currentPage === value;
    const color = isActive ? '#8d96b2' : '#fff';

    return (
      <SideNavItem
        container={<NavLink to={value} />}
        value={value}
        icon={React.cloneElement(icon, { color: color })}
        className={styles['nav-bar-item']}
        style={{ color: color, padding: '5px' }}
      >
        {title}
      </SideNavItem>
    );
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div styleName="nav-bar">
        <SideNav value={currentPage} onChange={this._onPageChange} style={{ padding: '20px' }}>
          {this._renderItem('Главная', '/', <BookIcon />)}

          {this._renderItem('Продукты', '/products', <EmailIcon />)}

          {this._renderItem('Производители', '/manufacturers', <PhoneIcon />)}
        </SideNav>
      </div>
    );
  }
}

export default NavBar;
