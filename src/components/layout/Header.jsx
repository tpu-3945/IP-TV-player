import { NavLink, useNavigate } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';
import { usePortal } from '../../context/PortalContext';

const Header = () => {
  const { theme, toggleTheme } = useSettings();
  const { isLoggedIn, clearPortalInfo } = usePortal();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearPortalInfo();
    navigate('/');
  };
  
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white'
    }`;
    
  const iconLinkClass = ({ isActive }) =>
    `p-2 rounded-full ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`;

  return (
    <header className="bg-gray-800 text-gray-300 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">IPTV Player</span>
            {isLoggedIn && (
              <nav className="hidden md:flex ml-10 space-x-4">
                <NavLink to="/live" className={navLinkClass}>Direct</NavLink>
                <NavLink to="/movies" className={navLinkClass}>Films</NavLink>
                <NavLink to="/series" className={navLinkClass}>Séries</NavLink>
                <NavLink to="/favorites" className={navLinkClass}>Favoris</NavLink>
              </nav>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-700"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <NavLink to="/settings" className={iconLinkClass} aria-label="Settings">
              ⚙️
            </NavLink>
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700"
              >
                Déconnexion
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
