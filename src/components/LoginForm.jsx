import { useState } from 'react';
import { usePortal } from '../context/PortalContext';

const LoginForm = () => {
  const [url, setUrl] = useState('');
  const [mac, setMac] = useState('');
  const [error, setError] = useState('');
  const { savePortalInfo } = usePortal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim() || !mac.trim()) {
      setError('Les deux champs sont requis.');
      return;
    }
    if (!/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(mac)) {
      setError("Le format de l'adresse MAC est invalide (ex: 00:1A:79:XX:XX:XX).");
      return;
    }
    setError('');
    savePortalInfo(url, mac);
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center">Connexion au Portail</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="portal-url" className="block text-sm font-medium">URL du Portail</label>
            <input
              id="portal-url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="http://exemple.com:80"
            />
          </div>
          <div>
            <label htmlFor="mac-address" className="block text-sm font-medium">Adresse MAC</label>
            <input
              id="mac-address"
              type="text"
              value={mac}
              onChange={(e) => setMac(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="00:1A:79:XX:XX:XX"
            />
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
