import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header>
        {/* Header content */}
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default MainLayout;
