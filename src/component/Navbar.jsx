import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/20 backdrop-blur-xl backdrop-saturate-150 rounded-full px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/30 dark:bg-gray-900/20 dark:border-white/10 hover:bg-white/30 transition-all duration-300">
          <div className="flex items-center space-x-2">
            <HashLink
              smooth
              to="/#home"
              scroll={scrollWithOffset}
              onClick={closeMobileMenu}
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-full hover:bg-white/50 transition-colors dark:text-gray-200 dark:hover:text-indigo-400"
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/#services"
              scroll={scrollWithOffset}
              onClick={closeMobileMenu}
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-full hover:bg-white/50 transition-colors dark:text-gray-200 dark:hover:text-indigo-400"
            >
              Services
            </HashLink>
            <HashLink
              smooth
              to="/#vehicle"
              scroll={scrollWithOffset}
              onClick={closeMobileMenu}
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-full hover:bg-white/50 transition-colors dark:text-gray-200 dark:hover:text-indigo-400"
            >
              Vehicle
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
              onClick={closeMobileMenu}
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-full hover:bg-white/50 transition-colors dark:text-gray-200 dark:hover:text-indigo-400"
            >
              Contact us
            </HashLink>
           
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-6 right-6 z-50">
        <div className="bg-white/20 backdrop-blur-xl backdrop-saturate-150 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/30 dark:bg-gray-900/20 dark:border-white/10">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 rounded-full hover:bg-white/50 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
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
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full mt-2 right-0 w-56">
            <div className="bg-white/25 backdrop-blur-xl backdrop-saturate-150 rounded-2xl p-3 shadow-[0_10px_40px_rgba(0,0,0,0.16)] border border-white/30 dark:bg-gray-900/25 dark:border-white/10">
              <div className="flex flex-col space-y-1">
                <HashLink
                  smooth
                  to="/#home"
                  scroll={scrollWithOffset}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-gray-700 hover:text-indigo-600 font-medium rounded-lg hover:bg-white/50 transition-colors dark:text-gray-200 dark:hover:text-indigo-400"
                >
                  Home
                </HashLink>
                <HashLink
                  smooth
                  to="/#services"
                  scroll={scrollWithOffset}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-gray-700 hover:text-indigo-600 font-medium rounded-lg hover:bg-white/50 transition-colors dark:text-gray-200 dark:hover:text-indigo-400"
                >
                  Services
                </HashLink>
                <HashLink
                  smooth
                  to="/#vehicle"
                  scroll={scrollWithOffset}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-gray-700 hover:text-indigo-600 font-medium rounded-lg hover:bg-white/50 transition-colors dark:text-gray-200 dark:hover:text-indigo-400"
                >
                  Vehicle
                </HashLink>
              
               
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}