import React from 'react';

// Components
import LogoSearchBox from './LogoSearchBox';
import Navbar from './Navbar';
import ProfileAccount from './ProfileAccount';

// Style
import './index.scss';

const Header = () => {
  return (
    <header className="main__header">
      <LogoSearchBox />
      <Navbar />
      <ProfileAccount />
    </header>
  );
};

export default Header;
