import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header, NaviLink, Div } from './AppBar.styled';
import { logoutThunk } from 'redux/Auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { OvalLoader } from 'components/Loader/OvalLoader';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <MainNav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>

      <Suspense fallback={<OvalLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

const MainNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NaviLink to="/">Home</NaviLink>
      {isLoggedIn && <NaviLink to="/contacts">Contacts</NaviLink>}
    </nav>
  );
};

const AuthNav = () => (
  <nav>
    <NaviLink to="/register">Register</NaviLink>
    <NaviLink to="/login">Login</NaviLink>
  </nav>
);

const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  return (
    <Div>
      <p>{userName}</p>
      <button onClick={() => dispatch(logoutThunk())}>Logout</button>
    </Div>
  );
};
