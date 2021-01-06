---
id: freeCodeCamp-Applied_Accessibility-fr
title: Applied Accessibility
---





## Introduction aux défis d'accessibilité appliqués

[Applied Accessibility | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/)

« Accessibilité »  signifie généralement avoir un contenu Web et une interface utilisateur  qui peuvent être compris, parcourus et interagis avec un large public.  Cela inclut les personnes souffrant de troubles visuels, auditifs, de  mobilité ou cognitifs.

Les sites Web doivent être ouverts et  accessibles à tous, quelles que soient les capacités ou les ressources  de l'utilisateur. Certains utilisateurs s'appuient sur des technologies  d'assistance telles qu'un lecteur d'écran ou un logiciel de  reconnaissance vocale. D'autres utilisateurs peuvent être en mesure de  naviguer sur un site uniquement à l'aide d'un clavier. Garder à l'esprit les besoins des différents utilisateurs lors du développement de votre  projet peut grandement contribuer à la création d'un site Web ouvert.

Voici trois concepts généraux que cette section explorera à travers les défis suivants :

1. avoir un code bien organisé qui utilise un balisage approprié
2. s'assurer que des alternatives textuelles existent pour le contenu non textuel et visuel
3. créer une page facile à naviguer et compatible avec le clavier

Avoir un contenu Web accessible est un défi permanent. Les directives pour l'accessibilité du contenu Web (the W3 Consortium's Web Content Accessibility Guidelines) (WCAG) du consortium W3 constituent une  excellente ressource pour vos projets à venir. Ils définissent la norme  internationale d'accessibilité et fournissent un certain nombre de  critères que vous pouvez utiliser pour vérifier votre travail.

------



## 1. Ajouter une alternative textuelle aux images pour une accessibilité aux malvoyants

[Learn Applied Accessibility: Add a Text Alternative to Images for Visually Impaired Accessibility | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/add-a-text-alternative-to-images-for-visually-impaired-accessibility)

Il est probable que vous ayez vu un attribut `alt` sur une balise `img` dans d'autres défis. Le texte `alt` décrit le contenu de l'image et lui fournit une alternative textuelle. Cela aide dans les cas où l'image ne se charge pas ou ne peut pas être vue par un utilisateur. Il est  également utilisé par les moteurs de recherche pour comprendre ce que  contient une image afin de l'inclure dans les résultats de recherche.  Voici un exemple :

```html
<img src="importantLogo.jpeg" alt="Company logo">
```

Les personnes malvoyantes utilisent des lecteurs d'écran pour convertir le  contenu Web en une interface audio. Ils n'obtiendront pas d'informations si elles ne sont présentées que visuellement. Pour les images, les  lecteurs d'écran peuvent accéder à l'attribut `alt` et lire son contenu  pour fournir des informations clés.
Un bon texte `alt`  fournit au lecteur une brève description de l'image. Vous devez toujours inclure un attribut `alt` sur votre image. Selon la spécification HTML5,  cela est désormais considéré comme obligatoire.

-----

Camper Cat est à  la fois un ninja de codage et un véritable ninja, qui construit un site  Web pour partager ses connaissances. La photo de profil qu'il souhaite  utiliser montre ses compétences et doit être appréciée par tous les  visiteurs du site. Ajoutez un attribut `alt` dans la balise `img`, qui  explique que Camper Cat fait du karaté. (L'image `src` n'est pas liée à un fichier réel, vous devriez donc voir le texte `alt` à l'écran.)

> Votre balise `img` doit avoir un attribut `alt` et il ne doit pas être vide.

```html
<img src="doingKarateWow.jpeg">
```

```html
<img src="doingKarateWow.jpeg" alt="Camper Cat do karate">
```

------



## 2. Savoir quand le texte alternatif doit être laissé vide

[Learn Applied Accessibility: Know When Alt Text Should be Left Blank | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/know-when-alt-text-should-be-left-blank)

Dans le dernier défi, vous avez appris que l'inclusion d'un attribut `alt` lors de l'utilisation de balises `img` est obligatoire. Cependant,  parfois, les images sont regroupées avec une légende les décrivant déjà, ou ne sont utilisées qu'à des fins de décoration. Dans ces cas, le  texte `alt` peut sembler redondant ou inutile.
Dans les  situations où une image est déjà expliquée avec un contenu textuel ou  n'ajoute pas de signification à une page, l'`img` a toujours besoin d'un  attribut `alt`, mais il peut être défini sur une chaîne vide. Voici un  exemple :

```html
<img src="visualDecoration.jpeg" alt="">
```

Les  images d'arrière-plan relèvent également généralement de l'étiquette  « décorative ». Cependant, ils sont généralement appliqués avec des règles CSS et ne font donc pas partie du processus des lecteurs d'écran de  balisage.
**Remarque :** pour les images avec une légende, vous pouvez toujours inclure du texte `alt`, car il aide les moteurs de  recherche à cataloguer le contenu de l'image.

------

Camper Cat a codé  une page squelette pour la partie blog de son site Web. Il prévoit  d'ajouter une pause visuelle entre ses deux articles avec une image  décorative d'une épée de samouraï. Ajoutez un attribut `alt` à la balise  `img` et définissez-le sur une chaîne vide. (Notez que l'image `src` n'est  pas liée à un fichier réel - ne vous inquiétez pas du fait qu'aucune  épée ne s'affiche à l'écran.)

> Votre balise `img` doit avoir un attribut `alt`.
> L'attribut `alt` doit être défini sur une chaîne vide.

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>
<img src="samuraiSwords.jpeg">
<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>
<img src="samuraiSwords.jpeg" alt="">
<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

------



## 3. Utiliser des en-têtes pour afficher les relations hiérarchiques du contenu

[Learn Applied Accessibility: Use Headings to Show Hierarchical Relationships of Content | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/use-headings-to-show-hierarchical-relationships-of-content)

Les en-têtes (éléments `h1` à `h6`) sont des balises de cheval de bataille qui aident à structurer et à étiqueter votre contenu. Les lecteurs d'écran  peuvent être configurés pour lire uniquement les titres d'une page afin  que l'utilisateur obtienne un résumé. Cela signifie qu'il est important  que les balises d'en-tête de votre balisage aient une signification  sémantique et soient liées les unes aux autres, et ne soient pas  sélectionnées uniquement pour leurs valeurs de taille.
*La  signification sémantique* signifie que la balise que vous utilisez autour du contenu indique le type d'informations qu'il contient.
Si  vous écriviez un article avec une introduction, un corps et une  conclusion, il n'aurait pas beaucoup de sens de mettre la conclusion  comme une sous-section du corps dans votre plan. Ce devrait être sa  propre section. De même, les balises d'en-tête d'une page Web doivent  aller dans l'ordre et indiquer les relations hiérarchiques de votre  contenu.
Les en-têtes de rang égal (ou supérieur) commencent de  nouvelles sections implicites, les en-têtes de rang inférieur commencent les sous-sections de la précédente.
Par exemple, une page avec  un élément `h2` suivi de plusieurs sous-sections étiquetées avec des  balises `h4` dérouterait un utilisateur de lecteur d'écran. Avec six  choix, il est tentant d'utiliser une balise car elle est meilleure dans  un navigateur, mais vous pouvez utiliser CSS pour modifier la taille  relative.
Un dernier point, chaque page doit toujours avoir un  (et un seul) élément `h1`, qui est le sujet principal de votre contenu.  Ceci et les autres en-têtes sont utilisés en partie par les moteurs de  recherche pour comprendre le sujet de la page.

------

Camper Cat veut  une page sur son site dédiée à devenir un ninja. Aidez-le à corriger les en-têtes afin que son balisage donne une signification sémantique au  contenu et montre les relations parent-enfant appropriées de ses  sections. Modifiez toutes les balises `h5` au niveau de titre approprié  pour indiquer qu'elles sont des sous-sections des balises `h2`. Utilisez  des balises `h3` à cet effet.

> Votre code doit avoir 6 balises `h3`.
> Votre code doit avoir 6 balises de fermeture `h3`.
> Votre code ne doit pas avoir de balises `h5`.
> Votre code ne doit avoir aucune balise de fermeture `h5`.

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>
```

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h3>How to Hide in Plain Sight</h3>
  <h3>How to Climb a Wall</h3>

  <h2>Learn the Art of Battle</h2>
  <h3>How to Strengthen your Body</h3>
  <h3>How to Fight like a Ninja</h3>

  <h2>Learn the Art of Living with Honor</h2>
  <h3>How to Breathe Properly</h3>
  <h3>How to Simplify your Life</h3>
</main>
```

-----



## 4. Aller directement au contenu à l'aide de l'élément `main`

[Learn Applied Accessibility: Jump Straight to the Content Using the main Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/jump-straight-to-the-content-using-the-main-element)

HTML5 a introduit un certain nombre de nouveaux éléments qui offrent aux développeurs plus d'options tout en intégrant des fonctionnalités  d'accessibilité. Ces balises incluent, entre autres, `main`, `header`, `footer`, `nav`, `article`, et `section`.
Par défaut, un navigateur rend  ces éléments de la même manière que l'humble `div`. Cependant, les  utiliser le cas échéant donne une signification supplémentaire à votre  balisage. Le nom de la balise à lui seul peut indiquer le type  d'informations qu'il contient, ce qui ajoute une signification  sémantique à ce contenu. Les technologies d'assistance peuvent accéder à ces informations pour fournir un meilleur résumé de page ou des options de navigation à leurs utilisateurs.
L'élément `main` (principal) est  utilisé pour envelopper (vous l'avez deviné) le contenu principal, et il ne devrait y en avoir qu'un par page. Il est destiné à entourer les  informations liées au sujet central de votre page. Il n'est pas destiné à inclure des éléments qui se répètent sur les pages, comme des liens de  navigation ou des bannières.
La balise `main` comporte  également une fonction de repère intégrée que la technologie  d'assistance peut utiliser pour accéder rapidement au contenu principal. Si vous avez déjà vu un lien "Accéder au contenu principal" en haut  d'une page, l'utilisation d'une balise principale donne automatiquement  cette fonctionnalité aux appareils d'assistance.

-----

Camper Cat a de  grandes idées pour sa page d'armes ninja. Aidez-le à configurer son  balisage en ajoutant des balises `main` d'ouverture et de fermeture entre `header` et `footer` (abordées dans d'autres défis).  Gardez les balises `main` vides pour le moment.

> Votre code doit avoir une balise `main`.
> Les balises `main` doivent se trouver entre la balise de fermeture `header` et la balise d'ouverture `footer`.

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<footer></footer>
```

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<main></main>
<footer></footer>
```

-----



## 5. Envelopper le contenu dans l'élément `article`

[Learn Applied Accessibility: Wrap Content in the article Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/wrap-content-in-the-article-element)

`article` est un autre des nouveaux éléments HTML5 qui ajoute une  signification sémantique à votre balisage. `article` est un élément de  section et est utilisé pour envelopper un contenu indépendant et  autonome. La balise fonctionne bien avec les entrées de blog, les  messages de forum ou les articles de presse.
Déterminer si le  contenu peut être autonome est généralement une question de jugement,  mais vous pouvez utiliser quelques tests simples. Demandez-vous si vous  avez supprimé tout le contexte environnant, ce contenu aurait-il encore  du sens ? De même pour le texte, le contenu tiendrait-il s'il était dans  un flux RSS ?
N'oubliez pas que les personnes qui utilisent des  technologies d'assistance s'appuient sur un balisage organisé et  sémantiquement significatif pour mieux comprendre votre travail.

**Remarque sur la `section` et `div`**
L'élément `section` est également nouveau avec HTML5 et a une signification  sémantique légèrement différente de celle de `article`. Un `article`  concerne le contenu autonome et une `section` permet de regrouper le  contenu thématiquement lié. Ils peuvent être utilisés les uns dans les  autres, selon les besoins. Par exemple, si un livre est l'`article`, alors chaque chapitre est une `section`. Lorsqu'il n'y a pas de relation entre  les groupes de contenu, utilisez un `div`.

```html
<div> - contenu des groupes
<section> - contenu lié aux groupes
<article> - regroupe un contenu indépendant et autonome
```

------

Camper Cat a utilisé des balises `article` pour envelopper les articles sur sa page de blog, mais il a oublié de les utiliser autour de celle du haut. Modifiez la balise `div` pour utiliser une balise `article` à la place.

> Votre code doit avoir trois balises `article`.
> Votre code ne doit pas contenir de balises `div`.

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <div>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </div>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```

------



## 6. Facilitez la navigation dans le lecteur d'écran avec le balisage `header`

[Learn Applied Accessibility: Make Screen Reader Navigation Easier with the header Landmark | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-header-landmark)

Le prochain élément HTML5 qui ajoute une signification sémantique et  améliore l'accessibilité est la balise `header`. Il est utilisé pour  envelopper des informations d'introduction ou des liens de navigation  pour sa balise parent et fonctionne bien autour du contenu qui se répète en haut sur plusieurs pages.
`header` partage la fonction de  repère intégrée que vous avez vue avec `main`, permettant aux technologies d'assistance de naviguer rapidement vers ce contenu.
**Remarque :**  le `header` est destiné à être utilisé dans la balise `body` de votre  document HTML. Ceci est différent de l'élément `head`, qui contient le  titre de la page, les méta-informations, etc.

-----

Camper Cat est en  train d'écrire d'excellents articles sur la formation des ninjas et  souhaite ajouter une page pour eux sur son site. Remplacez le `div` supérieur qui contient actuellement `h1` par une balise `header`.

> Votre code doit avoir une balise `header`.
> Vos balises `header` doivent entourer le `h1`.
> Votre code ne doit pas contenir de balises `div`.
> Votre élément `header` doit avoir une balise de fermeture.

```html
<body>
  <div>
    <h1>Training with Camper Cat</h1>
  </div>
  <main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
</body>
```

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>
  </header>
  <main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
</body>
```

-----



## 7. Facilitez la navigation dans le lecteur d'écran avec le balisage `nav`

[Learn Applied Accessibility: Make Screen Reader Navigation Easier with the nav Landmark | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-nav-landmark)

L'élément `nav` est un autre élément HTML5 avec la fonction de repère  intégrée pour une navigation facile dans le lecteur d'écran. Cette  balise est destinée à entourer les principaux liens de navigation de  votre page.
S'il y a des liens de site répétés au bas de la page, il n'est pas nécessaire de les baliser également avec une balise `nav`. L'utilisation de `footer` (abordé dans le prochain  défi) est suffisante.

------

Camper Cat a inclus des liens de navigation en haut de sa page d'entraînement, mais les a enveloppés dans un `div`.  Remplacez le `div` par une balise `nav` pour améliorer  l'accessibilité de sa page.

> Votre code doit avoir une balise `nav`.
> Vos balises `nav` doivent entourer l'`ul` et ses éléments de liste.
> Votre code ne doit pas contenir de balises `div`.
> Votre élément `nav` doit avoir une balise de fermeture.

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>
    <div>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </div>
  </header>
  <main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
</body>
```

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
</body>
```

------



## 8. Facilitez la navigation dans le lecteur d'écran avec le balisage `footer`

[Learn Applied Accessibility: Make Screen Reader Navigation Easier with the footer Landmark | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-footer-landmark)

Semblable à `header` et `nav`, l'élément `footer` dispose d'une fonction de repère intégrée qui permet aux appareils  d'assistance d'y accéder rapidement. Il est principalement utilisé pour  contenir des informations sur les droits d'auteur ou des liens vers des  documents connexes qui se trouvent généralement au bas d'une page.

-----

La page d'entraînement de Camper Cat progresse bien. Changez le `div` qu'il a utilisé pour envelopper ses informations de copyright au bas de la page en un élément `footer`.

> Votre code doit avoir une balise `footer`.
> Votre code ne doit pas contenir de balises `div`.
> Votre code doit avoir une balise `footer` d'ouverture et de fermeture.

```html
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
  <div>&copy; 2018 Camper Cat</div>
</body>
```

```html
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

------



## 9. Améliorez l'accessibilité du contenu audio avec l'élément `audio`

[Learn Applied Accessibility: Improve Accessibility of Audio Content with the audio Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-accessibility-of-audio-content-with-the-audio-element)

L'élément `audio` de HTML5 donne une signification sémantique lorsqu'il  enveloppe le contenu du son ou du flux audio dans votre balisage. Le  contenu audio a également besoin d'une alternative textuelle pour être  accessible aux personnes sourdes ou malentendantes. Cela peut être fait  avec du texte à proximité sur la page ou un lien vers une transcription.
La balise `audio` prend en charge l'attribut `controls`. Cela montre la  lecture par défaut du navigateur, la pause et d'autres commandes, et  prend en charge la fonctionnalité du clavier. Il s'agit d'un attribut  booléen, ce qui signifie qu'il n'a pas besoin de valeur, sa présence sur la balise active le paramètre.
Voici un exemple :

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg" />
  <source src="audio/meow.ogg" type="audio/ogg" />
</audio>
```

**Remarque :** le contenu multimédia comporte généralement des éléments visuels et  auditifs. Il a besoin de sous-titres synchronisés et d'une transcription pour que les utilisateurs souffrant de déficiences visuelles et/ou  auditives puissent y accéder. En général, un développeur Web n'est pas  responsable de la création des légendes ou de la transcription, mais  doit savoir pour les inclure.

-----

Il est temps de faire une pause  dans Camper Cat et de rencontrer un autre campeur Zersiax (@zersiax), un champion de l'accessibilité et un utilisateur de lecteur d'écran. Pour  entendre un extrait de son lecteur d'écran en action, ajoutez un élément `audio` après le `p`. Incluez l'attribut `controls`. Ensuite, placez une  balise `source` à l'intérieur des balises `audio` avec l'attribut `src` défini sur "https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" et  l'attribut `type` défini sur "audio/mpeg".
**Remarque :** le clip  audio peut sembler rapide et difficile à comprendre, mais c'est une  vitesse normale pour les utilisateurs de lecteurs d'écran.

> Votre code doit avoir une balise `audio`.
> Votre élément `audio` doit avoir une balise de fermeture.
> La balise `audio` doit avoir l'attribut `controls`.
> Votre code doit avoir une balise `source`.
> Votre balise `source` doit être à l'intérieur des balises `audio`.
> La valeur de l'attribut `src` sur la balise `source` doit correspondre exactement au lien dans les instructions.
> Votre code doit inclure un attribut `type` sur la balise `source` avec une valeur audio/mpeg.

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>
  </main>
</body>
```

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>
    <audio id="meowClip" controls>
  	  <source src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg" />
    </audio>
  </main>
</body>
```

------



## 10. Améliorez l'accessibilité des graphiques avec l'élément `figure`

[Learn Applied Accessibility: Improve Chart Accessibility with the figure Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-chart-accessibility-with-the-figure-element)

HTML5 a introduit l'élément `figure`, ainsi que la légende `figcaption` correspondante. Utilisés ensemble, ces éléments enveloppent une représentation visuelle (comme une image, un diagramme ou un graphique) avec sa légende. Cela  donne un double gain d'accessibilité en regroupant sémantiquement le  contenu associé et en fournissant une alternative textuelle qui explique la `figure`.
Pour les visualisations de données telles que les  graphiques, la légende peut être utilisée pour noter brièvement les  tendances ou les conclusions pour les utilisateurs malvoyants. Un autre  défi concerne la façon de déplacer une version tableau des données du  graphique hors écran (à l'aide de CSS) pour les utilisateurs de lecteurs d'écran.
Voici un exemple - notez que `figcaption` entre dans les balises de `figure` et peut être combinée avec d'autres  éléments :

```html
<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
  <br>
  <figcaption>
    Master Camper Cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>
```

-----

Camper Cat travaille d'arrache-pied pour créer un graphique à barres empilées  indiquant le temps par semaine consacré à l'entraînement en furtivité,  au combat et aux armes. Aidez-le à mieux structurer sa page en changeant la balise `div` qu'il utilisait en balise `figure` et la balise `p` qui  entoure la légende en balise `figcaption`.

> Votre code doit avoir une balise `figure`.
> Votre code doit avoir une balise `figcaption`.
> Votre code ne doit pas contenir de balises `div`.
> Votre code ne doit pas avoir de balises `p`.
> `figcaption` doit être un enfant de la balise `figure`.
> Votre élément `figure` doit avoir une balise de fermeture.

```html
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <!-- Changer uniquement le code en dessous de cette ligne -->
      <div>
        <!-- Le graphique à barres empilées ira ici -->
        <br>
        <p>Breakdown per week of time to spend training in stealth, combat, and weapons.</p>
      </div>
      <!-- Ne changez le code qu'au-dessus de cette ligne -->
    </section>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

```html
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <figure>
        <img src="stackedBarChart.jpeg" alt="stacked bar chart">
        <br>
        <figcaption>
          Breakdown per week of time to spend training in stealth, combat, and weapons.
        </figcaption>
      </figure>
    </section>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

-----



## 11. Améliorez l'accessibilité du champ de formulaire avec l'élément `label`

[Learn Applied Accessibility: Improve Form Field Accessibility with the label Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-form-field-accessibility-with-the-label-element)

L'amélioration de l'accessibilité avec le balisage HTML sémantique  s'applique à l'utilisation à la fois des noms de balises appropriés et  des attributs. Les prochains défis couvrent certains scénarios  importants utilisant des attributs dans les formulaires.
La  balise `label` enveloppe le texte d'un élément de contrôle de formulaire  spécifique, généralement le nom ou l'étiquette d'un choix. Cela lie le  sens à l'élément et rend le formulaire plus lisible. L'attribut `for` sur  une balise `label` associe explicitement ce `label` au contrôle de formulaire et est utilisé par les lecteurs d'écran.
Vous avez découvert les boutons radio et leurs étiquettes dans une leçon de la  section HTML de base. Dans cette leçon, nous avons enveloppé l'élément  d'entrée du bouton radio dans un élément `label` avec le texte de  l'étiquette afin de rendre le texte cliquable. Une autre façon d'y  parvenir consiste à utiliser l'attribut `for` comme expliqué dans cette  leçon.
La valeur de l'attribut `for` doit être la même que la valeur de l'attribut `id` du contrôle de formulaire. Voici un exemple :

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

------

Camper Cat s'attend à beaucoup d'intérêt pour ses articles de blog réfléchis  et souhaite inclure un formulaire d'inscription par e-mail. Ajoutez un  attribut `for` sur le `label` de l'e-mail qui correspond à l'`id` dans son  champ `input`.

> Votre code doit avoir un attribut `for` sur la balise `label` qui n'est pas vide.
> Votre valeur d'attribut `for` doit correspondre à la valeur de l'`id` sur `input` de l'e-mail.

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>
      <label>Email:</label>
      <input type="text" id="email" name="email">
      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email">
      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

-----



## 12. Enveloppez les boutons radio dans un élément `fieldset` pour une meilleure accessibilité

[Learn Applied Accessibility: Wrap Radio Buttons in a fieldset Element for Better Accessibility | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility)

La rubrique du formulaire suivante couvre l'accessibilité des boutons  radio. Chaque choix reçoit un `label` avec un attribut `for` lié à l'`id` de l'élément correspondant tel que couvert dans le dernier défi.  Puisque les boutons radio viennent souvent dans un groupe où  l'utilisateur doit en choisir un, il existe un moyen de montrer  sémantiquement que les choix font partie d'un ensemble.
La balise `fieldset` entoure tout le groupe de boutons radio pour y parvenir. Il  utilise souvent une balise `legend` pour fournir une description du  regroupement, qui est lue par les lecteurs d'écran pour chaque choix  dans l'élément `fieldset`.
L'enveloppement  de `fieldset` et la balise `legend` ne sont pas nécessaires lorsque les choix sont explicites,  comme une sélection de sexe. Il suffit d'utiliser un `label` avec  l'attribut `for` pour chaque bouton radio.
Voici un exemple :

```html
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>
    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>
    <input id="three" type="radio" name="items" value="three">
    <label for="three">Choice Three</label>
  </fieldset>
</form>
```

-----

Camper Cat veut des informations sur le niveau ninja de ses utilisateurs  lorsqu'ils s'inscrivent à sa liste de diffusion. Il a ajouté un ensemble de boutons radio et a appris de notre dernière leçon à utiliser des  balises d'étiquette avec des attributs `for` pour chaque choix. Allez Camper  Cat ! Cependant, son code a encore besoin d'aide. Remplacez la balise `div` entourant les boutons radio par une balise `fieldset` et changez la  balise `p` à l'intérieur en `legend`.

> Votre code doit avoir une balise `fieldset` autour du jeu de boutons radio.
> L'élément `fieldset` doit avoir une balise de fermeture.
> Votre code doit avoir une balise `legend` autour du texte demandant le niveau de ninja d'un utilisateur.
> Votre code ne doit pas contenir de balises `div`.
> Votre code ne devrait plus avoir de balise `p` autour du texte demandant le niveau de ninja d'un utilisateur.

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email">
      <!-- Changer uniquement le code en dessous de cette ligne -->
      <div>
        <p>What level ninja are you?</p>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </div>
      <!-- Ne changez le code qu'au-dessus de cette ligne -->
      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email">
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </fieldset>
      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

------



## 13. Ajouter un sélecteur de date accessible

[Learn Applied Accessibility: Add an Accessible Date Picker | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/add-an-accessible-date-picker)

Les formulaires incluent souvent le champ `input`, qui peut être  utilisé pour créer plusieurs contrôles de formulaire différents.  L'attribut `type` sur cet élément indique le type d'entrée qui sera créé.
Vous avez peut-être remarqué les types d'entrée `text` et `submit` dans les défis  précédents, et HTML5 a introduit une option pour spécifier un champ `date`. En fonction de la prise en charge du navigateur, un sélecteur de date apparaît dans le champ `input` lorsqu'il est sélectionné, ce qui  facilite le remplissage d'un formulaire pour tous les utilisateurs.
Pour les navigateurs plus anciens, le type sera par défaut `text`, ce qui  permet d'afficher aux utilisateurs le format de date attendu dans  l'étiquette ou sous forme de texte d'espace réservé au cas où.
Voici un exemple :

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

-----

Camper Cat organise un tournoi Mortal Kombat et souhaite demander à ses  concurrents de voir quelle date fonctionne le mieux. Ajoutez une balise `input` avec un attribut de `type` « date », un attribut `id` de « pickdate »  et un attribut `name` « date ».

> Votre code doit ajouter une balise `input` pour le champ de sélection de date.
> Votre balise `input` doit avoir un attribut `type` avec une valeur de date.
> Votre balise `input` doit avoir un attribut `id` avec une valeur de pickdate.
> Votre balise `input` doit avoir un attribut `name` avec une valeur de date.

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>
        <!-- Only change code below this line -->
        <!-- Only change code above this line -->
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>
        <input type="date" id="pickdate" name="date">
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

-----



## 14. Standardiser les heures avec l'attribut HTML5 `datetime`

[Learn Applied Accessibility: Standardize Times with the HTML5 datetime Attribute | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/standardize-times-with-the-html5-datetime-attribute)

Poursuivant le thème de la date, HTML5 a également introduit l'élément `time` avec un attribut `datetime` pour normaliser les heures. Il s'agit  d'un élément en ligne qui peut encapsuler une date ou une heure sur une  page. Un format valide de cette date est conservé par l'attribut `datetime`. Il s'agit de la valeur à laquelle accèdent les appareils  fonctionnels. Cela permet d'éviter toute confusion en indiquant une  version standardisée d'une heure, même si elle est écrite de manière  informelle ou familière dans le texte.
Voici un exemple :

```html
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```

------

Les résultats du sondage Mortal Kombat de Camper Cat sont arrivés ! Enveloppez une balise `time` autour du texte "Thursday, September 15<sup>th</sup>" et ajoutez un attribut `datetime` à "2016-09-15".

> Votre code doit avoir un élément `p` qui inclut le texte `Thank you to everyone for responding to Master Camper Cat's survey.` et inclure un élément `time`.
> Vos balises `time` ajoutées devraient entourer le texte `Thursday, September 15<sup>th</sup>`.
> Votre balise`time` ajoutée doit avoir un attribut `datetime` qui n'est pas vide.
> Votre attribut `datetime` ajouté doit être défini sur une valeur `2016-09-15`.

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <article>
    <h2>Mortal Kombat Tournament Survey Results</h2>
    <!-- Only change code below this line -->
    <p>Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat tournament is Thursday, September 15<sup>th</sup>. May the best ninja win!</p>
    <!-- Only change code above this line -->
    <section>
      <h3>Comments:</h3>
      <article>
        <p>Posted by: Sub-Zero on <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time></p>
        <p>Johnny Cage better be there, I'll finish him!</p>
      </article>
      <article>
        <p>Posted by: Doge on <time datetime="2016-08-15T08:12Z">August 15<sup>th</sup></time></p>
        <p>Wow, much combat, so mortal.</p>
      </article>
      <article>
        <p>Posted by: The Grim Reaper on <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time></p>
        <p>Looks like I'll be busy that day.</p>
      </article>
    </section>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <article>
    <h2>Mortal Kombat Tournament Survey Results</h2>
    <p>Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat tournament is <time datetime="2016-09-15">Thursday, September 15<sup>th</sup></time>. May the best ninja win!</p>
    <section>
      <h3>Comments:</h3>
      <article>
        <p>Posted by: Sub-Zero on <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time></p>
        <p>Johnny Cage better be there, I'll finish him!</p>
      </article>
      <article>
        <p>Posted by: Doge on <time datetime="2016-08-15T08:12Z">August 15<sup>th</sup></time></p>
        <p>Wow, much combat, so mortal.</p>
      </article>
      <article>
        <p>Posted by: The Grim Reaper on <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time></p>
        <p>Looks like I'll be busy that day.</p>
      </article>
    </section>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

------



## 15. Rendre les éléments visibles uniquement pour un lecteur d'écran à l'aide de CSS personnalisé

[Learn Applied Accessibility: Make Elements Only Visible to a Screen Reader by Using Custom CSS | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-elements-only-visible-to-a-screen-reader-by-using-custom-css)

Avez-vous remarqué que tous les défis d'accessibilité appliqués jusqu'à  présent n'ont utilisé aucun CSS ? Il s'agit de montrer l'importance d'un  plan de document logique et d'utiliser des balises sémantiquement  significatives autour de votre contenu avant d'introduire l'aspect de  conception visuelle.
Cependant, la magie du CSS peut également  améliorer l'accessibilité de votre page lorsque vous souhaitez masquer  visuellement du contenu destiné uniquement aux lecteurs d'écran. Cela se produit lorsque les informations sont dans un format visuel (comme un  graphique), mais que les utilisateurs de lecteurs d'écran ont besoin  d'une présentation alternative (comme un tableau) pour accéder aux  données. CSS est utilisé pour positionner les éléments de lecture  d'écran uniquement hors de la zone visuelle de la fenêtre du navigateur.
Voici un exemple des règles CSS qui accomplissent cela :

```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

**Remarque :** les approches CSS suivantes ne feront PAS la même chose :

- `display: none;` ou `visibility: hidden;` masque le contenu pour tout le monde, y compris les utilisateurs de lecteurs d'écran
- Des valeurs nulles pour les tailles de pixels, telles que la `width: 0px; height: 0px;` supprime cet élément du flux de votre  document, ce qui signifie que les lecteurs d'écran l'ignoreront

------

Camper Cat a créé un graphique à barres empilées vraiment cool pour sa page  d'entraînement et a mis les données dans un tableau pour ses  utilisateurs malvoyants. La table a déjà une classe `sr-only`, mais  les règles CSS ne sont pas encore remplies. Donnez à `position` une  valeur absolue, `left` une valeur de -10000px et `width` et `height` des valeurs de 1px.

> Votre code doit définir la propriété `position` de la classe `sr-only` uniquement sur une valeur absolue.
> Votre code doit définir la propriété `left` de la classe `sr-only` sur une valeur de -10000px.
> Votre code doit définir la propriété `width` de la classe `sr-only` sur une valeur de 1 pixel.
> Votre code doit définir la propriété `height` de la classe `sr-only` sur une valeur de 1 pixel.

```html
<head>
  <style>
  .sr-only {
    position: ;
    left: ;
    width: ;
    height: ;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Diagramme à barres empilées de la formation hebdomadaire -->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

```html
<head>
  <style>
  .sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training -->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

------



## 16. Améliorez la lisibilité avec un texte à contraste élevé

[Learn Applied Accessibility: Improve Readability with High Contrast Text | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-readability-with-high-contrast-text)

Un faible contraste entre les couleurs de premier plan et d'arrière-plan peut rendre le texte difficile à lire. Un contraste suffisant améliore  la lisibilité de votre contenu, mais que signifie exactement  « suffisant » ?
Les directives pour l'accessibilité du contenu Web  (WCAG) recommandent au moins un rapport de contraste de 4,5 à 1 pour le  texte normal. Le rapport est calculé en comparant les valeurs de  luminance relatives de deux couleurs. Cela va de 1:1 pour la même  couleur, ou sans contraste, à 21:1 pour le blanc contre le noir, le  contraste le plus fort. Il existe de nombreux outils de vérification du  contraste disponibles en ligne qui calculent ce rapport pour vous.

------

Le choix de Camper Cat de texte gris clair sur fond blanc pour son récent  article de blog a un rapport de contraste de 1.5:1, ce qui le rend  difficile à lire. Changez `color` du texte du gris actuel (`#D3D3D3`) à un gris plus foncé (`#636363`) pour améliorer le rapport de contraste à  6:1.

> Votre code doit changer `color` du texte pour `body` en gris plus foncé.
> Votre code ne doit pas changer `background-color` de `body`.

```html
<head>
  <style>
  body {
    color: #D3D3D3;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```

```html
<head>
  <style>
  body {
    color: #636363;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```

------



## 17. Évitez les problèmes de daltonisme en utilisant un contraste suffisant

[Learn Applied Accessibility: Avoid Colorblindness Issues by Using Sufficient Contrast | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/avoid-colorblindness-issues-by-using-sufficient-contrast)

La couleur est une grande partie de la conception visuelle, mais son  utilisation introduit deux problèmes d'accessibilité. Premièrement, la  couleur seule ne doit pas être utilisée comme seul moyen de transmettre  des informations importantes car les utilisateurs de lecteurs d'écran ne les verront pas. Deuxièmement, les couleurs de premier plan et  d'arrière-plan nécessitent un contraste suffisant pour que les  utilisateurs daltoniens puissent les distinguer.
Les défis  précédents concernaient le fait d'avoir des alternatives textuelles pour résoudre le premier problème. Le dernier défi a introduit des outils de vérification du contraste pour aider avec le second. Le rapport de  contraste recommandé par WCAG de 4.5:1 s'applique à l'utilisation des  couleurs ainsi qu'aux combinaisons de niveaux de gris.
Les  utilisateurs daltoniens ont du mal à distinguer certaines couleurs des  autres - généralement dans la teinte mais parfois aussi dans la  légèreté. Vous pouvez vous rappeler que le rapport de contraste est  calculé en utilisant les valeurs de luminance relative (ou de  luminosité) des couleurs de premier plan et d'arrière-plan.
En  pratique, le rapport de contraste de 4.5:1 peut être atteint en  ombrageant (en ajoutant du noir à) la couleur la plus foncée et en  teignant (en ajoutant du blanc à) la couleur la plus claire. Les nuances plus foncées de la roue chromatique sont considérées comme des nuances  de bleus, violettes, magentas et rouges, tandis que les couleurs plus  claires sont les oranges, les jaunes, les verts et les bleus-verts.

-----

Camper Cat expérimente l'utilisation de la couleur pour le texte et  l'arrière-plan de son blog, mais sa combinaison actuelle d'un `background-color` verdâtre avec `color` de texte marron a un rapport de contraste de 2.5:1. Vous pouvez facilement ajuster la clarté des  couleurs puisqu'il les a déclarées en utilisant la propriété CSS `hsl()`  (qui signifie hue, saturation, lightness : teinte, saturation, clarté) en changeant le troisième  argument. Augmentez la valeur de luminosité de `background-color` de 35% à 55% et diminuez la valeur de luminosité de `color` de 20% à 15%. Cela améliore le contraste à 5.9:1.

> Votre code doit uniquement modifier la valeur de luminosité de la propriété de `color` du texte sur une valeur de 15%.
> Votre code doit uniquement modifier la valeur de luminosité de la propriété `background-color` par une valeur de 55%.

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```

-----



## 18. Évitez les problèmes de daltonisme en choisissant soigneusement les couleurs qui transmettent des informations

[Learn Applied Accessibility: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information)

Il existe différentes formes de daltonisme. Celles-ci peuvent aller  d'une sensibilité réduite à une certaine longueur d'onde de la lumière à l'incapacité de voir la couleur du tout. La forme la plus courante est  une sensibilité réduite pour détecter les verts.
Par exemple, si  deux couleurs vertes similaires sont la couleur de premier plan et  d'arrière-plan de votre contenu, un utilisateur daltonien peut ne pas  être en mesure de les distinguer. Les couleurs proches peuvent être  considérées comme des voisines sur la roue chromatique, et ces  combinaisons doivent être évitées lors de la transmission d'informations importantes.
**Remarque :** certains outils de sélection de couleurs  en ligne incluent des simulations visuelles de la façon dont les  couleurs apparaissent pour différents types de daltonisme. Ce sont  d'excellentes ressources en plus des calculatrices de contrôle de  contraste en ligne.

------

Camper Cat teste différents styles pour un  bouton important, mais `background-color` jaune (`#FFFF33`) et `color` du texte vert (`#33FF33`) sont des teintes voisines sur la roue  chromatique et pratiquement indiscernables pour certains utilisateurs  daltoniens. (Leur luminosité similaire échoue également à la  vérification du rapport de contraste). Changez `color` du texte en  bleu foncé (`#003366`) pour résoudre les deux problèmes.

> Votre code doit changer `color` du texte du `button` en bleu foncé.

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```

```html
<head>
  <style>
  button {
    color: #003366;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```

------



## 19. Donner un sens aux liens à l'aide d'un texte de lien descriptif

[Learn Applied Accessibility: Give Links Meaning by Using Descriptive Link Text | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/give-links-meaning-by-using-descriptive-link-text)

Les utilisateurs de lecteurs d'écran ont différentes options pour le  type de contenu que lit leur appareil. Cela comprend le passage à (ou  au-dessus) des éléments de repère, le passage au contenu principal ou  l'obtention d'un résumé de page à partir des en-têtes. Une autre option  consiste à n'entendre que les liens disponibles sur une page.
Les lecteurs d'écran le font en lisant le texte du lien, ou ce qui se  trouve entre les balises anchor (`a`). Avoir une liste de liens « cliquez  ici » ou « en savoir plus » n'est pas utile. Au lieu de cela, vous devez  utiliser un texte bref mais descriptif dans les balises `a` pour donner  plus de sens à ces utilisateurs.

-----

Le texte du lien utilisé par  Camper Cat n'est pas très descriptif sans le contexte environnant.  Déplacez les balises d'ancrage (`a`) afin qu'elles entourent le texte « informations sur les batteries » au lieu de « Cliquez ici ».

> Votre code doit déplacer l'ancre d'une balise `a` autour des mots « Cliquez ici » pour  envelopper les mots «informations sur les batteries».
> L'élément `a` doit avoir un attribut `href` avec une valeur de chaîne vide `""`.
> L'élément `a` doit avoir une balise de fermeture.

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>
```

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. Click here for <a href="">information about batteries</a></p>
  </article>
</body>
```

------



## 20. Rendre les liens navigables avec les clés HTML `accesskey`

[Learn Applied Accessibility: Make Links Navigable with HTML Access Keys | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-links-navigable-with-html-access-keys)

HTML propose l'attribut `accesskey` pour spécifier une touche de raccourci pour activer ou mettre le focus sur un élément. Cela peut rendre la  navigation plus efficace pour les utilisateurs de clavier uniquement.
HTML5 permet à cet attribut d'être utilisé sur n'importe quel élément, mais  il est particulièrement utile lorsqu'il est utilisé avec des éléments  interactifs. Cela inclut les liens, les boutons et les contrôles de  formulaire.
Voici un exemple :

```html
<button accesskey="b">Important Button</button>
```

-----

Camper Cat souhaite que les liens autour des deux titres d'articles de blog  comportent des raccourcis clavier afin que les utilisateurs de son site  puissent accéder rapidement à l'histoire complète. Ajoutez un attribut  `accesskey` aux deux liens et définissez le premier sur "g" (pour Garfield) et le second sur "c" (pour Chuck Norris).

> Votre code doit ajouter un attribut `accesskey` à la balise `a` avec l'`id` « first ».
> Votre code doit ajouter un attribut `accesskey` à la balise `a` avec l'`id` « second ».
> Votre code doit définir l'attribut `accesskey` sur la balise `a` avec l'`id` « first » sur « g ». Notez que le cas est important.
> Votre code doit définir l'attribut `accesskey` sur la balise `a` avec l'`id` de « second » à « c ». Notez que le cas est important.

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2><a id="first" href="#">The Garfield Files: Lasagna as Training Fuel?</a></h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>
    <h2><a id="second" href="#">Is Chuck Norris a Cat Person?</a></h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2><a id="first" href="#" accesskey="g">The Garfield Files: Lasagna as Training Fuel?</a></h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>
    <h2><a id="second" href="#" accesskey="c">Is Chuck Norris a Cat Person?</a></h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

-----



## 21. Utiliser `tabindex` pour ajouter le focus clavier à un élément

[Learn Applied Accessibility: Use tabindex to Add Keyboard Focus to an Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/use-tabindex-to-add-keyboard-focus-to-an-element)

L'attribut HTML `tabindex` a trois fonctions distinctes relatives au focus clavier d'un élément. Quand c'est sur une balise, cela indique que  l'élément peut être focalisé. La valeur (un entier positif, négatif ou  zéro) détermine le comportement.
Certains éléments, tels que les  liens et les contrôles de formulaire, reçoivent automatiquement le focus clavier lorsqu'un utilisateur parcourt une page. C'est dans le même  ordre que les éléments entrent dans le balisage source HTML. Cette même  fonctionnalité peut être donnée à d'autres éléments, tels que `div`, `span`  et `p`, en plaçant un attribut `tabindex="0"` sur eux. Voici un exemple :

```html
<div tabindex="0">I need keyboard focus!</div>
```

**Remarque :** une valeur `tabindex` négative (généralement -1) indique qu'un élément  est focalisable, mais n'est pas accessible par le clavier. Cette méthode est généralement utilisée pour mettre l'accent sur le contenu par  programmation (comme lorsqu'un `div` utilisé pour une fenêtre pop-up est  activé), et dépasse la portée de ces défis.

-----

Camper Cat a créé une nouvelle enquête pour collecter des informations sur ses utilisateurs.  Il sait que les champs de saisie reçoivent automatiquement le focus  clavier, mais il veut s'assurer que les utilisateurs de son clavier  s'arrêtent aux instructions tout en parcourant les éléments. Ajoutez un  attribut `tabindex` à la balise `p` et définissez sa valeur sur `"0"`. Bonus - l'utilisation de `tabindex` permet également à la pseudo-classe CSS `:focus` de travailler sur la balise `p`.

> Votre code doit ajouter un attribut `tabindex` à la balise `p` qui contient les instructions du formulaire.
> Votre code doit définir l'attribut `tabindex` de la balise `p` sur une valeur de 0.

```html
<head>
  <style>
  p:focus { background-color: yellow; }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>
      <p>Instructions: Fill in ALL your information then click <b>Submit</b></p>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

```html
<head>
  <style>
  p:focus { background-color: yellow; }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>
      <p tabindex="0">Instructions: Fill in ALL your information then click <b>Submit</b></p>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

------



## 22. Utilisez `tabindex` pour spécifier l'ordre de mise au point du clavier pour plusieurs éléments

[Learn Applied Accessibility: Use tabindex to Specify the Order of Keyboard Focus for Several Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements)

L'attribut `tabindex` spécifie également l'ordre de tabulation exact des  éléments. Ceci est réalisé lorsque la valeur de l'attribut est définie  sur un nombre positif de 1 ou plus.
La définition d'un `tabindex="1"` amènera d'abord le focus clavier sur cet élément. Ensuite, il  parcourt la séquence des valeurs `tabindex` spécifiées (2, 3, etc.), avant de passer aux éléments par défaut et `tabindex="0"`.
Il est  important de noter que lorsque l'ordre de tabulation est défini de cette manière, il remplace l'ordre par défaut (qui utilise la source HTML).  Cela peut dérouter les utilisateurs qui s'attendent à démarrer la  navigation depuis le haut de la page. Cette technique peut être  nécessaire dans certaines circonstances, mais en termes d'accessibilité, soyez prudent avant de l'appliquer.
Voici un exemple :

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>
<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

-----

Camper Cat a un champ de recherche sur sa page Inspirational Quotes qu'il  prévoit de positionner dans le coin supérieur droit avec CSS. Il  souhaite que les contrôles `input` de recherche et `input` d'envoi soient les deux premiers éléments de l'ordre de  tabulation. Ajoutez un attribut `tabindex` défini sur "1" à l'`input` de  recherche et un attribut `tabindex` défini sur "2" à l'`input` d'envoi.

> Votre code doit ajouter un attribut `tabindex` à la balise `input` de recherche.
> Votre code doit ajouter un attribut `tabindex` à la balise `input` d'envoi.
> Votre code doit définir l'attribut `tabindex` sur la balise `input` de recherche sur une valeur de 1.
> Votre code doit définir l'attribut `tabindex` sur la balise `input` d'envoi sur une valeur de 2.

```html
<body>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>
    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">
  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

```html
<body>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>
    <input type="search" name="search" id="search" tabindex="1">
    <input type="submit" name="submit" value="Submit" id="submit" tabindex="2">
  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

