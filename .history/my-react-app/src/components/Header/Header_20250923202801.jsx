import React from 'react';
import Logo from '../UI/Logo';
import SearchBar from '../Search/SearchBar';
import UserActions from '../User/UserActions';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="header-logo">
          <Logo />
        </div>

        {/* Search Section */}
        <div className="header-search">
          <SearchBar />
        </div>

        {/* User Actions Section */}
        <div className="header-actions">
          <UserActions />
        </div>
      </div>
    </header>
  );
};

export default Header;