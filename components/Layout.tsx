import React from 'react'
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
        <header>
            <Header />
        </header>

        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout;