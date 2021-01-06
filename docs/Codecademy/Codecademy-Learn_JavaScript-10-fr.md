---
id: Codecademy-Learn_JavaScript-10-fr
title: Compatibilité du navigateur et transpilation
---

Dans cette leçon, vous apprendrez à transpiler du code JavaScript ES6 vers ES5.

## 01. Introduction

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/browser-compatibility-and-transpilation/exercises/browser-compatibility-introduction)

Vous êtes probablement invité à mettre à jour votre navigateur Web tous  les quelques mois. Est-ce que vous savez pourquoi ? Quelques raisons  incluent la résolution des vulnérabilités de sécurité, l'ajout de  fonctionnalités et la prise en charge de la nouvelle syntaxe HTML, CSS  et JavaScript.

Les raisons ci-dessus impliquent qu'il y a un délai avant la publication  d'une mise à jour logicielle en cas de vulnérabilités de sécurité et de  syntaxe de langage non prise en charge.

Cette leçon se concentre  sur ce dernier. Plus précisément, comment les développeurs comblent  l'écart entre la nouvelle syntaxe JavaScript qu'ils utilisent et la  syntaxe JavaScript que les navigateurs Web reconnaissent.

 Cela est devenu une préoccupation répandue pour les développeurs Web depuis  qu'Ecma International, l'organisation responsable de la normalisation de JavaScript, en a publié une nouvelle version en 2015, appelée  ECMAScript2015, communément appelée ES6. Notez que le 6 fait référence à la version de JavaScript et n'est pas lié à l'année de sa sortie (la  version précédente était ES5).

Lors de sa sortie, les  développeurs Web ont rapidement adopté la nouvelle syntaxe ES6, car elle améliorait la lisibilité et l'efficacité. Cependant, ES6 n'était pas  pris en charge par la plupart des navigateurs Web, de sorte que les  développeurs ont rencontré des problèmes de compatibilité de navigateur.

Dans cette leçon, vous découvrirez deux outils importants pour résoudre les problèmes de compatibilité des navigateurs.

- caniuse.com - Un site Web qui fournit des données sur la  compatibilité des navigateurs Web pour les fonctionnalités HTML, CSS et  JavaScript. Vous apprendrez à l'utiliser pour rechercher la prise en  charge des fonctionnalités ES6.
- Babel - Une bibliothèque  Javascript que vous pouvez utiliser pour convertir un nouveau JavaScript non pris en charge (ES6) en une version plus ancienne (ES5) reconnue  par la plupart des navigateurs modernes.

Commençons par exécuter ES6 JavaScript sur une fausse ancienne version de navigateur Web.

**Instructions**

**1.** Copiez le code suivant dans **main.js**. Le code comprend trois fonctionnalités de la syntaxe ES6 : `const`, `let` et l'interpolation de chaîne ES6.

```js
var pate = 'Spaghetti'; // Syntaxe ES5

const viande = 'Pancetta'; // Syntaxe ES6

let sauce = 'Oeufs et fromage'; // Syntaxe ES6

// Les littéraux de modèle, comme celui ci-dessous, ont été introduits dans ES6
const carbonara = `Vous pouvez faire de la carbonara avec ${pate}, ${viande} et une sauce faite avec ${sauce}.`;
```

Exécutez le code lorsque vous êtes prêt. Regardez les erreurs affichées dans notre LetScape

```shell
ERROR
-> SyntaxError: Block-scoped declaration const not supported in this web browser

ERROR
-> SyntaxError: Block-scoped declaration let not supported in this web browser

ERROR
-> SyntaxError: Template literals not supported in this web browser
```

-----



## 02. caniuse.com I

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/browser-compatibility-and-transpilation/exercises/can-i-use-i)

Depuis la sortie d'ECMAScript2015 (ES6) par Ecma,  les éditeurs de logiciels ont progressivement ajouté la prise en charge  des fonctionnalités et de la syntaxe ES6. Bien que la plupart des  nouvelles versions de navigateur prennent en charge la majorité de la  bibliothèque ES6, il existe encore quelques sources de problèmes de  compatibilité :

- Certains utilisateurs n'ont pas mis à jour la dernière version du navigateur Web prise en charge par ES6.
- Quelques fonctionnalités ES6, comme les modules, ne sont toujours pas prises en charge par la plupart des navigateurs Web.

Étant donné que les entreprises ajoutent progressivement la prise en charge  des fonctionnalités ES6, il est important que vous sachiez comment  rechercher la prise en charge des navigateurs fonction par fonction. Le site Web [caniuse.com](http://caniuse.com/) est la meilleure ressource pour  trouver des informations sur la compatibilité des navigateurs.

Dans caniuse, vous pouvez entrer une fonctionnalité ES6, comme `let`, et voir  le pourcentage de navigateurs qui la reconnaissent. Vous pouvez  également voir quand chaque navigateur Web principal (Chrome, Safari,  Edge, etc.) a ajouté la prise en charge du mot-clé.

La vidéo à droite vous montre comment démarrer avec caniuse.com.

**Instructions**

Dans la vidéo, nous utiliserons caniuse.com pour trouver le pourcentage de  navigateurs prenant en charge l'ensemble de la bibliothèque ES5, puis  nous examinerons le pourcentage de navigateurs prenant en charge les  modules, une fonctionnalité introduite dans ES6.

https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-transpilation/videos/caniuse.mov

-----



## 03. caniuse.com II

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/browser-compatibility-and-transpilation/exercises/can-i-use-ii)

Maintenant, c'est à votre tour de vous entraîner  avec caniuse.com. Dans un nouvel onglet, ouvrez caniuse.com et effectuez les tâches ci-dessous.

**Instructions**

**1.** Recherchez le  pourcentage de navigateurs prenant en charge JavaScript ES5. Enregistrez la valeur, sous forme de nombre, dans la variable  `esFivePercentageSupport`.

**2.** Recherchez le pourcentage de  navigateurs prenant en charge «Template Literals», une fonctionnalité  qui a été introduite dans ES6.
Enregistrez la valeur, sous forme de nombre, dans la variable `esSixTemplateLiterals`.

```js
// Définit la variable ci-dessous avec un nombre
let esFivePercentageSupport = 99.27;

// Définit la variable ci-dessous avec un nombre
let esSixTemplateLiterals = 90.11;
```

-----



## 04. Pourquoi ES6 ?

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/browser-compatibility-and-transpilation/exercises/why-update)

Avant d'apprendre à configurer un projet JavaScript qui convertit ES6 en une version plus ancienne, il est utile de  comprendre quelques-unes des raisons pour lesquelles Ecma a effectué des mises à jour aussi importantes.

La version de JavaScript qui a  précédé ES6 est appelée JavaScript ES5. Trois raisons expliquant les  mises à jour ES5 vers ES6 sont répertoriées ci-dessous :

- Lisibilité et économie de code - La nouvelle syntaxe est souvent plus  facile à comprendre (plus lisible) et nécessite moins de caractères pour créer la même fonctionnalité (économie de code).
- Résout les  sources de bugs ES5 - Certaines syntaxes ES5 ont conduit à des bogues  courants. Avec ES6, Ecma a introduit une syntaxe qui atténue certains  des pièges les plus courants.
- Une similitude avec d'autres  langages de programmation - JavaScript ES6 est syntaxiquement plus  similaire aux autres langages de programmation orientés objet. Cela  conduit à moins de friction lorsque les développeurs non-JavaScript  expérimentés veulent apprendre JavaScript.

Parce que ES6 a résolu les problèmes ci-dessus, Ecma savait que l'adoption par les  développeurs Web se produirait rapidement, tandis que la prise en charge des navigateurs Web serait à la traîne.

Pour limiter l'impact  des problèmes de compatibilité du navigateur ES6, Ecma a rendu la  nouvelle syntaxe rétrocompatible, ce qui signifie que vous pouvez mapper le code JavaScript ES6 à ES5.

**Instructions**

```js
var pates = 'Spaghetti'; // Syntaxe ES5

const viande = 'Pancetta'; // Syntaxe ES6

let sauce = 'Oeufs et fromage'; // Syntaxe ES6

// Les littéraux de modèle, comme celui ci-dessous, ont été introduits dans ES6
const carbonara = `Vous pouvez faire de la carbonara avec des ${pates}, de la ${viande} et une sauce faite avec ${sauce}.`;
```

**1.** Dans ces tâches, vous modifierez manuellement le code dans **main.js** en syntaxe ES5.
Les mots-clés `let` et `const` ont été introduits dans ES6. Avant cela, nous déclarions toutes les variables avec le mot clé `var`.
Remplacez les mots clés `let` et `const` dans **main.js** par `var`.

**2.** La ligne de code suivante est écrite avec une interpolation de chaîne ES6 :

```js
`Vous pouvez faire de la carbonara avec des ${pates}, de la ${viande} et une sauce à base de ${sauce}.
```

Dans ES5, nous avons utilisé des signes plus (+) pour interpoler les variables en chaînes.
Dans **main.js**, utilisez l'interpolation de chaîne ES5 pour définir carbonara sur la même chaîne que ci-dessus.

```js
var pates = "Spaghetti";
var viande = "Pancetta";
var sauce = "Oeufs et fromage";
var carbonara = `Vous pouvez faire de la carbonara avec des + pates +, de la + viande et une sauce à base de + sauce + .;
```

-----



## 05. Transpilation avec Babel

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/browser-compatibility-and-transpilation/exercises/transpilation-with-babel)

Dans le dernier exercice, vous avez  converti manuellement le code ES6 en ES5. Bien que la conversion  manuelle ne vous prenne que quelques minutes, elle n'est pas viable car  la taille du fichier JavaScript augmente.

Comme ES6 est  rétrocompatible de manière prévisible, une collection de programmeurs  JavaScript a développé une bibliothèque JavaScript appelée Babel qui  transpile ES6 JavaScript en ES5.

La transpilation est le processus de conversion d'un langage de programmation en un autre.

Dans les autres exercices de cette leçon, vous apprendrez à utiliser Babel  pour transpiler la nouvelle version facile à écrire de JavaScript (ES6)  vers l'ancienne version de JavaScript (ES5) compatible avec les  navigateurs.

Dans les instructions ci-dessous, vous passerez le  code JavaScript ES6 à Babel, qui le transpilera dans ES5 et l'écrira  dans un fichier du répertoire **lib**.

**Instructions**

**1.** Dans la fenêtre de terminal, tapez :

```bash
npm install babel-cli
```

Cela installe l'un des deux packages Babel requis.

**2.** Dans la fenêtre de terminal, tapez :

```bash
npm install babel-preset-env
```

Cela installe le deuxième des deux packages Babel requis.

**3.** Dans le terminal, tapez `npm run build` et appuyez sur Entrée.
Vous pouvez afficher le code ES5 dans **./lib/main.js**.
Vous devrez peut-être actualiser pour voir le répertoire **lib** nouvellement créé.

```js
// ./lib/main.js

"use strict";
var pates = "Spaghetti";
var viande = "Pancetta";
var sauce = "Oeufs et fromage";

var carbonara = "Vous pouvez faire de la carbonara avec " + pates + ", " + viande + ", et une sauce à base de " + sauce + ".";
```

-----



## 06. npm init

Dans le dernier exercice, vous avez écrit une commande  dans votre terminal pour transpiler le code ES6 vers ES5. Dans les cinq  exercices suivants, vous apprendrez à configurer un projet JavaScript  qui transpile le code lorsque vous exécutez `npm run build` à partir du  répertoire racine d'un projet JavaScript.

La première étape  consiste à placer votre fichier JavaScript ES6 dans un répertoire appelé **src**. Depuis votre répertoire racine, le chemin d'accès au fichier ES6  est **./src/main.js**.

La structure initiale du fichier de projet JavaScript est :

```bash
project
|_ src
|___ main.js
```

Avant d'installer Babel, nous devons configurer notre projet pour utiliser [node package manager (npm)](https://docs.npmjs.com/getting-started/what-is-npm). Les développeurs utilisent *npm* pour accéder et gérer les paquets Node. Les paquets de Node sont des répertoires contenant du code JavaScript écrit par d'autres  développeurs. Vous pouvez utiliser ces paquets pour réduire la  duplication du travail et éviter les bugs.

Avant de pouvoir  ajouter Babel à notre répertoire de projet, nous devons exécuter `npm init`. La commande `npm init` crée un fichier **package.json** dans le  répertoire racine.

Un fichier **package.json** contient des informations sur le projet JavaScript actuel. Certaines de ces informations comprennent :

- Métadonnées (Metadata) - Cela comprend un titre de projet, une description, des auteurs, etc.
- Une liste des packages de Node requis pour le projet - Si un autre  développeur souhaite exécuter votre projet, npm regarde dans  **package.json** et télécharge les packages dans cette liste.
- Les paires clé-valeur (Key-value) pour les scripts de ligne de commande - Vous pouvez utiliser  npm pour exécuter ces scripts abrégés afin d'effectuer certains  processus. Dans un exercice ultérieur, nous ajouterons un script qui  exécute Babel et transpile ES6 en ES5.

Si Node est installé sur votre ordinateur, vous pouvez créer un fichier **package.json** en tapant `npm init` dans le terminal.

Le terminal vous invite à remplir les champs des métadonnées du projet (nom, description, etc.)

Vous n'êtes pas obligé de répondre aux invites, bien que nous vous  recommandons au minimum d'ajouter votre propre titre et description. Si  vous ne souhaitez pas remplir un champ, vous pouvez appuyer sur Entrée.  Npm laissera remplir ces champs avec les valeurs par défaut ou les  laissera vides lors de la création du fichier **package.json**.

Après avoir exécuté `npm init`, votre structure de répertoires contiendra les fichiers et dossiers suivants :

```
project
|_ src
|___ main.js
|_ package.json
```

Npm ajoute le fichier **package.json** au même niveau que le répertoire **src**.

**Instructions**

**1.** Exécutez `ls` dans le terminal pour voir la structure des fichiers de votre répertoire actuel.

```bash
$ ls
src
```

**2.** Utilisez npm pour créer un nouveau fichier **package.json**. Nous vous recommandons  de définir les propriétés de nom et de description sur les valeurs  suivantes :

- name - `learning-babel`
- description - `Use Babel to transpile JavaScript ES6 to ES5`

Entrez `ls` dans le terminal pour voir la structure des fichiers de votre répertoire actuel. Notez l'ajout de **package.json**.

```bash
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (learn-javascript-transpilation-bct-npm-init) learning-babel
version: (1.0.0) 
description: Use Babel to transpile JavaScript ES6 to ES5
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /home/ccuser/workspace/learn-javascript-transpilation-bct-npm-init/package.json:

{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) 
$ ls
package.json  src
$ 
```

-----



## 07. Installer les paquets de Node

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/browser-compatibility-and-transpilation/exercises/npm-install)

Nous utilisons la commande `npm  install` pour installer de nouveaux paquets Node localement. La commande `install` crée un dossier appelé **node_modules** et y copie les fichiers du paquet. La commande `install` installe également toutes les dépendances  pour le paquet donné.

Pour installer Babel, nous devons `npm install` deux paquets, `babel-cli` et `babel-preset-env`.  Cependant, npm installe plus d'une centaine d'autres paquets qui sont  des dépendances pour que Babel fonctionne correctement.

Nous installons Babel avec les deux commandes suivantes :

```bash
$ npm install babel-cli -D
$ npm install babel-preset-env -D
```

Le paquet `babel-cli` comprend des outils de ligne de commande Babel, et le paquet `babel-preset-env` a le code qui mappe toute fonctionnalité  JavaScript, ES6 et supérieur (ES6 +), à ES5.

L'indicateur `-D`  demande à npm d'ajouter chaque paquet à une propriété appelée  `devDependencies` dans **package.json**. Une fois que les dépendances du  projet sont répertoriées dans `devDependencies`, d'autres développeurs  peuvent exécuter votre projet sans installer chaque paquet séparément.  Au lieu de cela, ils peuvent simplement exécuter `npm install` - il  demande à npm de regarder à l'intérieur de **package.json** et de  télécharger tous les paquets répertoriés dans `devDependencies`.

Une fois que vous avez `npm install` les paquets, vous pouvez trouver les  paquets Babel et toutes leurs dépendances dans le dossier **node_modules**. La nouvelle structure de répertoires contient les éléments suivants :

```bash
project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ package.json
```

Le ... dans la structure de fichier ci-dessus est un espace réservé pour plus de 100 paquets installés par npm.

**Instructions**

**1.** Entrez `ls` dans le terminal pour afficher la structure de fichiers du répertoire actuel.

**2.** Utilisez npm avec l'indicateur -D pour installer le paquet de ligne de commande Babel et l'ajouter à la propriété `devDependencies` dans **package.json**.

**3.** Utilisez npm avec l'indicateur -D pour installer le paquet d'environnement  prédéfini Babel et ajoutez-le à la propriété `devDependencies` dans  **package.json**.
Entrez `ls` dans le terminal pour voir la structure des fichiers de votre répertoire actuel. Notez l'ajout de **node_modules**.
Vous pouvez également voir le nouveau dossier en cliquant sur le bouton de  navigation des fichiers au-dessus de l'éditeur de texte.

```bash
$ ls
node_modules  package.json  src
```

-----



## 08. .babelrc

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/browser-compatibility-and-transpilation/exercises/babelrc)

Maintenant que vous avez téléchargé les paquets Babel, vous devez spécifier la version du code source JavaScript.
Vous pouvez spécifier la version initiale de JavaScript dans un fichier  nommé **.babelrc**. Dans votre répertoire racine, vous pouvez exécuter `touch .babelrc` pour créer ce fichier.
Le répertoire de votre projet contient les dossiers et fichiers suivants :

```bash
project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json
```

Dans **.babelrc**, vous devez définir le *préréglage* de votre fichier source JavaScript. Le préréglage spécifie la version de votre fichier JavaScript  initial.
Habituellement, vous souhaitez transpiler le code JavaScript des versions ES6 et ultérieures (ES6 +) vers ES5. À partir de là, nous appellerons notre code source ES6 +, car Ecma introduit une  nouvelle syntaxe à chaque nouvelle version de JavaScript.
Pour  spécifier que nous transpilons du code à partir d'une source ES6 +, nous devons ajouter l'objet JavaScript suivant dans **.babelrc** :

```bash
{
  "presets": ["env"]
}
```

Lorsque vous exécutez Babel, il recherche dans **.babelrc** pour déterminer la  version du fichier JavaScript initial. Dans ce cas, `['env']` demande à  Babel de transpiler tout code des versions ES6 et ultérieures.

**Instructions**
**1.** Dans le répertoire racine, utilisez `touch` pour créer un nouveau fichier **.babelrc**.

**2.** Ouvrez le fichier **.babelrc** et ajoutez un objet qui spécifie le préréglage sur `"env"`.
Exécutez le code une fois que vous avez ajouté l'objet.

-----



## 09. Babel Source Lib

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/browser-compatibility-and-transpilation/exercises/babel-source-lib)

Il reste une dernière étape avant de pouvoir  transpiler notre code. Nous devons spécifier un script dans **package.json** qui lance la transpilation ES6 + vers ES5.

Dans le fichier  **package.json**, il y a une propriété nommée `"scripts"` qui contient un  objet pour spécifier les raccourcis de ligne de commande. Cela ressemble à ceci :

```json
...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}, ...
```

Dans le code ci-dessus, la propriété `"scripts"` contient un objet avec une  propriété appelée `"test"`. Sous la propriété `"test"`, nous allons ajouter  un script qui exécute Babel comme ceci :

```json
...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}
```

Dans l'objet `"scripts"` ci-dessus, nous ajoutons une propriété appelée  `"build"`. La valeur de la propriété, `"babel src -d lib"`, est une méthode  de ligne de commande qui transpile le code ES6 + vers ES5. Examinons  chaque argument de l'appel de méthode :

- `babel` - L'appel de commande Babel responsable de la transpilation du code.
- `src` - Demande à Babel de transpiler tout le code JavaScript dans le répertoire **src**.
- `-d` - Demande à Babel d'écrire le code transpilé dans un répertoire.
- `lib` - Babel écrit le code transpilé dans un répertoire appelé `lib`.

Dans l'exercice suivant, nous exécuterons la méthode `babel src -d lib` pour transpiler notre code ES6 +.

**Instructions**

**1.** Dans **package.json**, ajoutez un script appelé `"build"`.
Lorsqu'il est exécuté, le script `"build"` doit utiliser Babel pour transpiler le  code JavaScript à l'intérieur du dossier **src** et l'écrire dans un dossier appelé **lib**.
N'oubliez pas d'ajouter une virgule après le script `“test”`.

```json
// package.json
{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d lib"
  },
  "author": "",
  "license": "ISC"
}
```

-----



## 10. Construire (build)

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/browser-compatibility-and-transpilation/exercises/npm-run-build)

Nous sommes prêts à transpiler notre code ! Dans le dernier exercice, nous avons écrit le script suivant dans **package.json** :

```json
"build": "babel src -d lib"
```

Maintenant, nous devons appeler `"build"` depuis la ligne de commande pour transpiler et écrire du code ES5 dans un répertoire appelé **lib**.
Depuis la ligne de commande, nous tapons :

```bash
npm run build
```

La commande ci-dessus exécute le script `build` dans **package.json**.
Babel écrit le code ES5 dans un fichier nommé **main.js** (il a toujours le même  nom que le fichier d'origine), à l'intérieur d'un dossier appelé **lib**.  La structure de répertoires résultante est :

```bash
project
|_ lib
|___ main.js
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json
```

Remarquez que le répertoire contient un nouveau dossier nommé **lib**, avec un fichier, appelé **main.js**.
La commande `npm run build` transpile tous les fichiers JavaScript à  l'intérieur du dossier **src**. Cela est utile lorsque vous créez des  projets JavaScript plus volumineux -- quel que soit le nombre de fichiers JavaScript, vous n'avez besoin d'exécuter qu'une seule commande (`npm run build`) pour transpiler tout votre code.

**Instructions**

**1.** Transpilez le code ES6 + dans `lib` à l'aide de la commande `build`.
Une fois que vous avez fait cela, accédez au nouveau dossier **lib** et ouvrez **main.js**.

-----



## 11. Revue

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/browser-compatibility-and-transpilation/exercises/review)

Dans cette leçon, vous avez découvert la compatibilité et la transpilation des navigateurs. Passons en revue les concepts clés :

- ES5 - Ancienne version JavaScript prise en charge par tous les navigateurs Web modernes.
- ES6 - La nouvelle version JavaScript qui n'est pas prise en  charge par tous les navigateurs Web modernes. La syntaxe est plus  lisible, similaire à d'autres langages de programmation, et résout la  source des bogues courants dans ES5.
- caniuse.com - un site Web  que vous pouvez utiliser pour rechercher des informations sur la  compatibilité des navigateurs HTML, CSS et JavaScript.
- Babel - Un paquet JavaScript qui transpile le code JavaScript ES6 + vers ES5.
- `npm init` - Une commande de terminal qui crée un fichier **package.json**.
- **package.json** - Un fichier qui contient des informations sur un projet JavaScript.
- `npm install` - Une commande qui installe les paquets Node.
- `babel-cli` - Un paquet Node qui contient des outils de ligne de commande pour Babel.
- `babel-preset-env` - Un paquet Node qui contient des informations de mappage de syntaxe ES6 + vers ES5.
- **.babelrc** - Un fichier qui spécifie la version du code source JavaScript.
- Script `"build"` - Un script **package.json** que vous utilisez pour transférer le code ES6 + vers ES5.
- `npm run build` - Une commande qui exécute le script de construction et transpile le code ES6 + vers ES5.

Pour une future référence, voici une liste des étapes nécessaires à la mise en place d'un projet de transpilation :

1. Initialisez votre projet en utilisant `npm init` et créez un répertoire appelé **src**

2. Installez les dépendances babel en exécutant

   ```bash
   npm install babel-cli -D
   npm install babel-preset-env -D
   ```

3. Créez un fichier **.babelrc** dans votre projet et ajoutez-y le code suivant :

   ```json
   {
     "presets": ["env"]
   }
   ```

4. Ajoutez le script suivant à votre objet scripts dans **package.json** :

   ```json
   "build": "babel src -d lib"
   ```

5. Exécutez `npm run build` chaque fois que vous voulez transpiler votre code de votre **src** vers les répertoires **lib**.

**Instructions**

Si vous voulez un peu plus de pratique, prenez un moment pour ajouter des  fichiers JavaScript et la syntaxe ES6 au dossier **src** et essayez de les  transpiler.
Une fois que vous vous sentez à l'aise avec ce processus, essayez de configurer Babel sur votre propre ordinateur.

