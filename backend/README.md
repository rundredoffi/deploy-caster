# DeployCaster - Backend

Backend Node.js / Express pour gérer les interactions avec l’API GitHub et créer les déploiements à partir des données reçues du frontend.

---

## Fonctionnalités

* API REST exposant une route `POST /deploy` pour créer un déploiement GitHub et son statut associé.
* Utilisation du token personnel GitHub pour authentifier les requêtes API.
* Support des paramètres :

  * `repo` (owner/repo)
  * `ref` (branche ou commit SHA)
  * `environment` (environnement cible)
  * `description` (texte descriptif)
  * `log_url` (URL optionnelle des logs)
  * `state` (état du déploiement : `success`, `failure`, `in_progress`)
  * `deployed_url` (URL du site déployé, utilisée dans le statut GitHub)

---

## Prérequis

* Node.js v16+ installé
* Personal Access Token (PAT) GitHub avec les scopes :

  * `repo`
  * `workflow`

---

## Installation et lancement

### 1. Installer les dépendances

```bash
cd backend
npm install
```

### 2. Configurer le token GitHub

Copie le fichier `.env.example` en `.env` :

```bash
cp .env.example .env
```

Édite `.env` et ajoute ton token GitHub personnel :

```
GITHUB_TOKEN=ghp_tonTokenIci
```

### 3. Lancer le serveur

```bash
npm run dev
```

Le serveur écoute par défaut sur :
`http://localhost:3000`

---

## API

### POST `/deploy`

Crée un déploiement et son statut sur un dépôt GitHub.

**Payload JSON attendu :**

```json
{
  "repo": "owner/repo",
  "ref": "main",
  "environment": "production",
  "description": "Déploiement manuel depuis DeployCaster",
  "log_url": "https://example.com/logs",
  "state": "success",
  "deployed_url": "https://mon-site-deploye.com"
}
```

**Réponse :**

Objet JSON contenant les données du déploiement GitHub et du statut.

---

## Sécurité

* Ne jamais versionner ou partager publiquement le token dans `.env`.
* Le token est utilisé uniquement côté backend.

---

## Structure du projet

```
backend/
├── index.js        # Point d'entrée du serveur Express
├── github.js       # Module de gestion des appels API GitHub
├── .env.example    # Exemple de fichier d'environnement
├── package.json
└── README.md
```

---

## Contributions

Les suggestions et contributions sont les bienvenues via issues ou pull requests.

---

## Licence

MIT © Rundredoffi