# Lecteur IPTV Statique (GitHub Pages).

Un lecteur IPTV léger et moderne, hébergé sur GitHub Pages, conçu pour se connecter à un portail Stalker et lire des flux TV, films et séries.

## ✨ Fonctionnalité Clé : Gestion de Proxy CORS

Cette application intègre une **gestion de proxy CORS directement dans l'interface**.

**Pourquoi est-ce nécessaire ?**
Les navigateurs web bloquent les requêtes vers des serveurs (comme les portails IPTV) qui ne sont pas sur le même domaine que le site web, pour des raisons de sécurité (politique CORS). Pour contourner cela, l'application fait passer ses requêtes à travers un "proxy CORS".

**Comment ça marche ?**
1.  Cliquez sur l'icône engrenage (⚙️) dans l'en-tête pour aller sur la page **Paramètres**.
2.  Entrez l'URL de votre propre service de proxy.
3.  Sauvegardez. L'application utilisera désormais ce proxy pour toutes les communications avec le portail.

**Où trouver un proxy ?**
Pour des raisons de sécurité et de performance, il est fortement recommandé d'héberger votre propre instance. Le projet open-source suivant est la référence :
*   **[cors-anywhere](https://github.com/Rob--W/cors-anywhere)** : Suivez leurs instructions pour le déployer facilement sur des services comme Heroku ou Render.

## 🛠️ Installation et Développement Local

1.  **Clôner le dépôt :**
    ```bash
    git clone https://github.com/tpu-3945/IP-TV-player.git
    cd IP-TV-player
    ```
2.  **Installer les dépendances et lancer :**
    ```bash
    npm install && npm run dev
    ```

## 📦 Déploiement

Le déploiement sur GitHub Pages est automatisé via GitHub Actions à chaque `push` sur la branche `main`.
