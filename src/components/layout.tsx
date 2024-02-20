import {Header} from './header.tsx';
import {Outlet} from 'react-router-dom';
import {Fragment} from 'react';

export const Layout = (): JSX.Element => (
  <Fragment>
    <Header/>
    <Outlet/>
  </Fragment>
);
