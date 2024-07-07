import React from 'react';

function Header() {
  return (
    <header className="bg-blue-100 p-4">
      <div className="container mx-auto flex justify-center items-center">
        <nav className="text-center">
          <span className="block md:inline">Navigate your ideal career path with tailored expert advice</span>
          <a href="#" className="text-blue-700 text-lg ml-4">Contact Expert</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
