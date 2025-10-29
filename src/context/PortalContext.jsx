import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const PortalContext = createContext();

export function PortalProvider({ children }) {
  const [portalInfo, setPortalInfo] = useLocalStorage('portalInfo', { url: null, mac: null });

  const savePortalInfo = (url, mac) => {
    const cleanedUrl = url.trim().replace(/\/c\/?$/, '') + '/c/';
    const cleanedMac = mac.trim().toUpperCase();
    setPortalInfo({ url: cleanedUrl, mac: cleanedMac });
  };

  const clearPortalInfo = () => {
    setPortalInfo({ url: null, mac: null });
    // Optionnel : effacer aussi les favoris et autres données liées au portail
    localStorage.removeItem('favorites'); 
  };

  const isLoggedIn = !!(portalInfo.url && portalInfo.mac);

  const value = { portalInfo, savePortalInfo, clearPortalInfo, isLoggedIn };

  return <PortalContext.Provider value={value}>{children}</PortalContext.Provider>;
}

export const usePortal = () => useContext(PortalContext);
