import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const PortalContext = createContext();

export function PortalProvider({ children }) {
  const [portalInfo, setPortalInfo] = useLocalStorage('portalInfo', {
    url: null,
    mac: null,
    proxyUrl: '',
  });

  const savePortalInfo = (url, mac) => {
    const cleanedUrl = url.trim().replace(/\/c\/?$/, '') + '/c/';
    const cleanedMac = mac.trim().toUpperCase();
    setPortalInfo(prevInfo => ({ ...prevInfo, url: cleanedUrl, mac: cleanedMac }));
  };
  
  const saveProxy = (proxy) => {
    const cleanedProxy = proxy.trim() ? (proxy.trim().endsWith('/') ? proxy.trim() : `${proxy.trim()}/`) : '';
    setPortalInfo(prevInfo => ({ ...prevInfo, proxyUrl: cleanedProxy }));
  };

  const clearPortalInfo = () => {
    setPortalInfo(prevInfo => ({ url: null, mac: null, proxyUrl: prevInfo.proxyUrl }));
    localStorage.removeItem('favorites');
  };

  const isLoggedIn = !!(portalInfo.url && portalInfo.mac);

  const value = { portalInfo, savePortalInfo, clearPortalInfo, isLoggedIn, saveProxy };

  return <PortalContext.Provider value={value}>{children}</PortalContext.Provider>;
}

export const usePortal = () => useContext(PortalContext);
