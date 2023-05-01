// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children, pageTitle }) {
  return (
    <div className='pinpo-blog'>
      <header className='list-header'>
        <h1 className='main-title'>{pageTitle}</h1>
        <Link to={`/`}>
          <img className='logo' src='../../../logo.png' alt='Logo Pinpo' />
        </Link>
      </header>
      {children}
    </div>
  );
}

export default Layout;
