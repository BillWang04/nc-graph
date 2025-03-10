import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Overview', href: './#overview' },
    { name: 'Methods', href: './#methods' },
    { name: 'Results', href: './#results' },
    { name: 'Team', href: './#team' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-10">
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            className="nav-link"
          >
            {item.name}
          </a>
        ))}
      </nav>
      
      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none text-white"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-dark-deep bg-opacity-95 backdrop-blur-md md:hidden">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://github.com/spiegel21/graph_transformer_collapse/tree/calebs_transformer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block text-center py-2"
              onClick={() => setIsOpen(false)}
            >
              GitHub Repo
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;