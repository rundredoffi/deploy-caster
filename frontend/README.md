# DeployCaster - Frontend

Cette partie frontend est une application **Vue 3** avec **Vuetify 3** qui fournit une interface utilisateur pour déclarer manuellement des déploiements GitHub via une API backend.

---

## Fonctionnalités

* Formulaire moderne et responsive pour saisir les détails du déploiement :

  * dépôt GitHub (`owner/repo`)
  * branche / commit (`ref`)
  * environnement (production, staging, etc.)
  * description
  * URL des logs
  * URL du site déployé
  * état du déploiement (`success`, `failure`, `in_progress`)
* Validation des champs requis
* Messages de succès ou d’erreur affichés à l’utilisateur
* Utilisation de Vuetify pour une interface claire, agréable et accessible

---

## Prérequis

* Node.js v16+ installé
* Backend DeployCaster en fonctionnement (par défaut sur `http://localhost:3000`)

---

## Installation et lancement

### 1. Installer les dépendances

Dans le dossier `frontend` :

```bash
npm install
npm install vuetify@^3.0.0
npm install @mdi/font
npm install sass sass-loader@^12.0.0 --save-dev
npm install axios
```

*(Les dépendances peuvent être installées automatiquement avec `npm install` si elles sont listées dans `package.json`)*

### 2. Lancer le serveur de développement

```bash
npm run dev
```

### 3. Ouvrir l’application dans le navigateur

Par défaut, l’application sera disponible sur :
[http://localhost:5173](http://localhost:5173)

---

## Configuration

Le frontend appelle l’API backend sur l’URL `http://localhost:3000/deploy` (configuré en dur dans `DeployForm.vue`).

Si le backend est hébergé ailleurs, modifie l’URL dans `src/components/DeployForm.vue` à la ligne où axios fait la requête POST.

---

## Structure du projet

```
frontend/
├── public/               # Fichiers statiques
├── src/
│   ├── components/
│   │   └── DeployForm.vue # Formulaire principal
│   ├── App.vue           # Composant racine
│   └── main.js           # Point d’entrée avec Vuetify
├── package.json
├── vite.config.js
└── .gitignore
```

---

## Personnalisation

* Modifier les règles de validation dans `DeployForm.vue`
* Ajouter des fonctionnalités supplémentaires comme l’historique des déploiements
* Adapter le style Vuetify (thème, couleurs…)

---

## Dépendances clés

* **Vue 3** : framework JavaScript moderne pour SPA
* **Vuetify 3** : bibliothèque de composants UI Material Design
* **Axios** : client HTTP pour communiquer avec le backend
* **Vite** : bundler rapide et léger

---

## Support & contributions

N’hésite pas à ouvrir une issue ou PR si tu souhaites contribuer ou signaler un bug.

---

## Licence

MIT © Rundredoffi