import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-main-text bg-main-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-main-bg/90 backdrop-blur-md border-b border-main-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold text-main-text tracking-tight">자비심선원</span>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors duration-200 py-2 border-b-2 ${
                      isActive
                        ? 'text-main-text border-main-button'
                        : 'text-main-textLight border-transparent hover:text-main-buttonHover hover:border-main-button/30'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-main-text hover:bg-main-section transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 열기"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-main-bg border-b border-main-border">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-main-section text-main-text'
                        : 'text-main-textLight hover:bg-main-bgAlt'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-main-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
          <a 
            href="https://cafe.naver.com/chungseock53"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-sm font-medium text-main-textLight hover:text-main-pointDeep transition-colors"
          >
            <span>자비심선원 공식 네이버 카페</span>
            <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
          <div className="text-center text-xs text-main-textLight/60">
            &copy; {new Date().getFullYear()} 자비심선원. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;