import { useState, useEffect, useCallback } from 'react';
import { usePortal } from '../context/PortalContext';

export function usePortalData(fetchFunction) {
  const { portalInfo, isLoggedIn } = usePortal();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const memoizedFetch = useCallback(fetchFunction, []);

  useEffect(() => {
    if (!isLoggedIn) {
      setData([]);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await memoizedFetch(portalInfo.url, portalInfo.mac, portalInfo.proxyUrl);
        setData(Array.isArray(result?.data) ? result.data : []);
      } catch (err) {
        setError(err.message || 'Une erreur est survenue.');
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn, portalInfo, memoizedFetch]);

  return { data, isLoading, error };
}
