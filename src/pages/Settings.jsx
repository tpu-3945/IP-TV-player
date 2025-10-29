import { useState } from 'react';
import { usePortal } from '../context/PortalContext';

const Settings = () => {
  const { portalInfo, saveProxy } = usePortal();
  const [proxyInput, setProxyInput] = useState(portalInfo.proxyUrl || '');
  const [saveMessage, setSaveMessage] = useState('');

  const handleSave = () => {
    saveProxy(proxyInput);
    setSaveMessage('Proxy enregistré avec succès !');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Paramètres</h1>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Configuration du Proxy CORS</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Pour que l'application puisse communiquer avec votre portail IPTV, un proxy CORS est nécessaire.
          Veuillez entrer l'URL complète de votre service de proxy.
        </p>
        
        <div className="space-y-2">
          <label htmlFor="proxy-url" className="block text-sm font-medium">
            URL du Proxy CORS
          </label>
          <input
            id="proxy-url"
            type="url"
            value={proxyInput}
            onChange={(e) => setProxyInput(e.target.value)}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="https://mon-proxy.herokuapp.com/"
          />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={handleSave}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          >
            Enregistrer
          </button>
          {saveMessage && <p className="text-sm text-green-500">{saveMessage}</p>}
        </div>
        
        <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 rounded-md">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>Important :</strong> Pour des raisons de sécurité, n'utilisez pas de proxy public ou non sécurisé. Il est fortement recommandé d'héberger votre propre instance de <a href="https://github.com/Rob--W/cors-anywhere" target="_blank" rel="noopener noreferrer" className="font-bold underline">cors-anywhere</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
