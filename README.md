# Lecteur IPTV Statique (GitHub Pages)

Un lecteur IPTV léger et moderne, hébergé sur GitHub Pages, conçu pour se connecter à un portail Stalker et lire des flux TV, films et séries.

## ✨ Stack Technique

-   **Framework** : React (via Vite)
-   **Styling** : Tailwind CSS
-   **Player Vidéo** : `hls.js`
-   **Routage** : `react-router-dom`
-   **Gestion d'état** : React Context + `localStorage` pour la persistance
-   **Déploiement CI/CD** : GitHub Actions

## ⚠️ Important : Contraintes CORS

Les portails IPTV n'autorisent **jamais** les requêtes directes depuis un site web hébergé sur un autre domaine. Pour que l'application fonctionne, il est **indispensable** d'utiliser un **proxy CORS**. Vous devrez préfixer l'URL du portail par l'URL de votre propre proxy. Le service de l'application (`src/services/portalService.js`) est conçu pour intégrer facilement cette URL de proxy.

## 🛠️ Installation et Développement Local

1.  **Clôner le dépôt :**
    ```bash
    git clone https://github.com/tpu-3945/IP-TV-player.git
    cd IP-TV-player
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    ```

## 📦 Build et Déploiement

Le déploiement sur GitHub Pages est automatisé via GitHub Actions à chaque `push` sur la branche `main`.
