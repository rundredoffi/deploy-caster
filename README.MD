# DeployCaster

🚀 **DeployCaster** est une application web simple qui te permet de **déclarer manuellement tes déploiements GitHub** via une interface intuitive.
Elle communique avec l’API GitHub pour créer des déploiements et enregistrer leurs statuts, tout en offrant la possibilité de personnaliser branche, environnement, description, état et URL du site déployé.

---

## Fonctionnalités

* Formulaire pour déclarer un déploiement GitHub (repo, ref, environnement, description…)
* Envoi automatique vers l’API GitHub pour créer le déploiement et son statut
* Gestion des statuts `success`, `failure`, `in_progress`
* Ajout d’un lien vers l’URL du site déployé
* Interface moderne et accessible avec Vuetify 3 (Vue.js 3)
* Backend en Node.js / Express sécurisé via token GitHub

---

## Architecture

```
deploycaster/
├── backend/       # Serveur Express gérant les appels à l’API GitHub
├── frontend/      # Application Vue 3 + Vuetify 3 pour l’interface utilisateur
└── README.md      # Documentation
```

---

## Prérequis

* Node.js v16+ installé
* Un **Personal Access Token (PAT)** GitHub avec les scopes :

  * `repo`
  * `workflow`
* Accès internet pour appeler l’API GitHub

---

## Générer un Personal Access Token (PAT) GitHub

1. Connecte-toi à ton compte GitHub.

2. Va sur la page des tokens personnels :
   [https://github.com/settings/tokens](https://github.com/settings/tokens)

3. Clique sur **"Generate new token (classic)"**.

4. Remplis les champs :

   * **Note** : `DeployCaster Token`
   * **Expiration** : choisis la durée souhaitée (exemple : 90 jours)
   * **Scopes** (autorisations) : coche uniquement

     * `repo` (accès complet aux dépôts)
     * `workflow` (accès aux workflows GitHub Actions)

5. Clique sur **"Generate token"** en bas de la page.

6. Copie immédiatement le token affiché (tu ne pourras plus le voir).

7. Colle ce token dans le fichier `.env` du backend, à la variable `GITHUB_TOKEN` :

   ```env
   GITHUB_TOKEN=ghp_tonTokenIci
   ```

---

## Installation

### 1. Cloner le repo

```bash
git clone https://github.com/ton-username/deploycaster.git
cd deploycaster
```

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env
# Édite .env et ajoute ton token GitHub dans GITHUB_TOKEN
npm run dev
```

Le backend écoute par défaut sur : `http://localhost:3000`

---

### 3. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Le frontend sera accessible sur : `http://localhost:5173`

---

## Utilisation

* Ouvre le frontend dans ton navigateur
* Remplis le formulaire avec les infos du déploiement
* Clique sur **Envoyer le déploiement**
* Le backend crée un déploiement GitHub et affiche un message de succès ou d’erreur

---

## Variables d’environnement (backend)

Crée un fichier `.env` dans `backend/` avec la clé :

```env
GITHUB_TOKEN=ghp_tonTokenIci
```

**Important :** ne partage jamais ce token publiquement.

---

## Personnalisation

* Modifier les règles de validation dans le frontend si besoin
* Étendre le backend pour gérer plus de paramètres GitHub API
* Ajouter une interface d’historique des déploiements

---

## Technologies utilisées

* Backend : Node.js, Express, Axios, dotenv, CORS
* Frontend : Vue 3, Vuetify 3, Axios, Vite
* Authentification GitHub : Personal Access Token (PAT)

---

## Contributions

Les contributions sont les bienvenues !
N’hésite pas à ouvrir une issue ou une pull request.

---

## Licence

MIT © Rundredoffi
