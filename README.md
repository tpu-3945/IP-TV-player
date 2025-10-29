# Lecteur IPTV Statique (GitHub Pages)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

Un lecteur IPTV léger et moderne, hébergé sur GitHub Pages, conçu pour lire des flux TV, films et séries à partir de sources M3U ou JSON.

## Contexte

Ce projet a pour but de fournir un lecteur IPTV strictement front-end, hébergé sur un site statique (GitHub Pages). Il offre une interface de type catalogue (grille) pour une navigation intuitive et une expérience utilisateur moderne. Toute communication réseau est gérée côté client, en tenant compte des contraintes CORS.

## ✨ Objectifs principaux

*   **Interface claire** : Une UI réactive et accessible sur desktop et mobile.
*   **Navigation simple** : Sections dédiées (Direct, Films, Séries, Favoris).
*   **Recherche puissante** : Filtres par langue, type, qualité et recherche instantanée.
*   **Lecture fiable** : Support des flux HLS via un player vidéo intégré.
*   **Gestion locale** : Import de sources M3U/JSON et gestion des préférences et favoris dans le navigateur.
*   **Déploiement facile** : Conçu pour un déploiement simple et rapide sur GitHub Pages.

## 🚀 Stack technique

*   **Framework** : React (via Vite)
*   **Styling** : Tailwind CSS
*   **Player Vidéo** : `hls.js`
*   **Routage** : `react-router-dom`
*   **Gestion d'état locale** : React Context + `localStorage`
*   **Déploiement CI/CD** : GitHub Actions vers GitHub Pages

## 🛠️ Installation et développement local

1.  **Clôner le dépôt :**
    ```bash
    git clone [URL_DU_REPO]
    cd [NOM_DU_REPO]
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    ```
    L'application sera disponible sur `http://localhost:5173`.

## 📦 Build et déploiement

Pour créer une version statique de l'application, prête pour le déploiement :

```bash
npm run build
