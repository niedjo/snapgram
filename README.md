# 📸 Snapgram

Bienvenue sur **Snapgram**, une application de réseau social inspirée par Instagram. Snapgram permet aux utilisateurs de partager des photos, de suivre d'autres utilisateurs, d'interagir avec des publications et bien plus encore. Ce projet a été conçu pour fournir une expérience utilisateur fluide et moderne, en tirant parti des technologies de pointe du développement web.

lien du site : [Snapgram](https://snapgram-beta.vercel.app/)

## 🚀 Fonctionnalités

- **Création de compte et connexion sécurisée**
- **Partage de photos** : Publiez des photos et partagez-les avec vos amis et abonnés.
- **Interaction avec les publications** : Aimez et likez vos photos préférées.
- **Navigation intuitive** : Parcourez les publications grâce à une interface simple et réactive.
- **Système de validation des formulaires** : Géré avec `react-hook-form` et `zod`.

## 🛠️ Technologies utilisées

Snapgram est construit avec une stack moderne, incluant :

### **Frontend**
- **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur dynamiques.
- **React Router Dom** : Pour la navigation et la gestion des routes dans l'application.
- **React Hook Form** : Gestion des formulaires et validation des données utilisateur.
- **Tailwind CSS** : Framework CSS utilitaire pour un stylisme rapide et moderne.
- **Lucide React** : Icônes modernes et personnalisables.
- **Radix UI** : Composants UI accessibles et stylés.
- **React Dropzone** : Gestion des uploads de fichiers par glisser-déposer.
- **Zod** : Validation des schémas de données côté client.
- **React Query** : Gestion des états de serveur et des requêtes API.

### **Backend**
- **Appwrite** : Plateforme backend open-source pour gérer l'authentification, les bases de données et le stockage des fichiers.

### **Outils de développement**
- **TypeScript** : Langage typé pour une meilleure fiabilité et lisibilité du code.
- **Vite** : Build tool rapide pour le développement et la production.
- **ESLint** : Analyse du code pour détecter et corriger les erreurs.
- **PostCSS** : Outil de transformation CSS avec `autoprefixer`.

## 📦 Dépendances principales

Voici les principales dépendances utilisées dans ce projet :

| Nom                        | Version   | Description                                 |
|----------------------------|-----------|---------------------------------------------|
| `react`                    | ^18.3.1   | Bibliothèque pour créer des interfaces UI   |
| `react-router-dom`         | ^6.28.0   | Gestion des routes dans l'application       |
| `react-hook-form`          | ^7.53.2   | Gestion et validation des formulaires       |
| `zod`                      | ^3.23.8   | Validation des schémas de données           |
| `tailwindcss`              | ^3.4.14   | Framework CSS utilitaire                    |
| `appwrite`                 | ^16.0.2   | Backend open-source pour le stockage et l'authentification |

## 🛠️ Scripts disponibles

Voici les scripts disponibles pour gérer le projet :

| Script        | Description                                       |
|---------------|---------------------------------------------------|
| `dev`         | Démarre l'application en mode développement       |
| `build`       | Génère une version optimisée pour la production   |
| `lint`        | Analyse le code pour détecter les erreurs         |
| `preview`     | Affiche un aperçu de la version buildée           |

## 🚀 Installation et démarrage

Suivez ces étapes pour cloner et démarrer le projet sur votre machine locale.

### Prérequis
- **Node.js** (version 18 ou plus récente)
- **npm** ou **yarn**

### Étapes d'installation

1. Clonez le dépôt sur votre machine :

   ```bash
   git clone https://github.com/niedjo/snapgram.git
   cd snapgram
   ```

2. Installez les dépendances :

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Démarrez l'application en mode développement :

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Ouvrez votre navigateur et accédez à l'application à l'adresse suivante :

   ```
   http://localhost:5173
   ```

## 🌐 Déploiement

Pour déployer le projet, utilisez la commande suivante pour générer une version de production :

```bash
npm run build
```

Ensuite, utilisez un service comme **Vercel**, **Netlify** ou **Firebase Hosting** pour déployer votre application.

<!-- ## 🤝 Contribution

Les contributions sont les bienvenues ! Si vous souhaitez ajouter de nouvelles fonctionnalités ou corriger des bugs, n'hésitez pas à ouvrir une **issue** ou à soumettre une **pull request**.

### Guide de contribution

1. Forkez le dépôt
2. Créez une branche (`git checkout -b feature/ma-nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajoute une nouvelle fonctionnalité'`)
4. Poussez sur la branche (`git push origin feature/ma-nouvelle-fonctionnalite`)
5. Ouvrez une pull request -->

## 📄 Licence

Ce projet est sous licence MIT. 

## ❤️ Remerciements

Un grand merci à toutes les personnes et communautés qui ont contribué aux bibliothèques et outils utilisés dans ce projet.

---

**Profitez de Snapgram et n'hésitez pas à partager vos retours et suggestions !** 🎉📸
