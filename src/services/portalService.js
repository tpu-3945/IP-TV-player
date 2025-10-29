async function stalkerFetch(portalUrl, mac, action, proxyUrl) {
  if (!portalUrl || !mac) {
    throw new Error("Les informations du portail (URL, MAC) sont manquantes.");
  }

  const apiUrl = `${portalUrl}?type=itv&action=${action}&mac=${mac}`;
  const requestUrl = proxyUrl ? `${proxyUrl}${apiUrl}` : apiUrl;

  try {
    const response = await fetch(requestUrl, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });

    if (!response.ok) {
      throw new Error(`Erreur du serveur: ${response.statusText} (${response.status})`);
    }

    const data = await response.json();

    if (data && typeof data.js !== 'undefined') {
      return data.js;
    }

    throw new Error("Format de réponse inattendu. La réponse du portail ne contient pas de clé 'js'.");

  } catch (error) {
    if (error instanceof TypeError && !proxyUrl) {
      const corsError = new Error("La requête a échoué. Cela est probablement dû à une erreur CORS. Veuillez configurer une URL de proxy valide dans les paramètres.");
      console.error(corsError.message);
      throw corsError;
    }
    console.error(`Erreur de l'API Stalker pour l'action "${action}":`, error);
    throw error;
  }
}

export const getLiveStreams = (url, mac, proxy) => stalkerFetch(url, mac, 'get_all_channels', proxy);
export const getMovies = (url, mac, proxy) => stalkerFetch(url, mac, 'get_vods', proxy);
export const getSeries = (url, mac, proxy) => stalkerFetch(url, mac, 'get_series', proxy);
