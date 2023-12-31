import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import logo from '../../src/codeFunding.png';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3">
  <div className="header-logo container header-container">
    <div className="logo-section">
      <Link className="text-light" to="/">
        <img src={logo} alt="codeFunding logo" className="logo-image" />
      </Link>
      {/* <p className="m-0">Donate to help fund your favorite applications!</p> */}
    </div>
    <div className="buttons-section">
      {Auth.loggedIn() ? (
        <>
          <Link className="btn btn-lg btn-info m-2" to="/me">
            {Auth.getProfile().data.username}'s profile
          </Link>
          <button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="btn btn-lg btn-info m-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-lg btn-light m-2" to="/signup">
            Signup
          </Link>
        </>
      )}
    </div>
  </div>
</header>

  );
};

export default Header;
