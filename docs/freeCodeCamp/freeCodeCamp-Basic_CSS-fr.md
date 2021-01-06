---
id: freeCodeCamp-Basic_CSS-fr
title: CSS de base
---



## Introduction au CSS de base

[Basic CSS | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/)

Les feuilles de style en cascade (CSS) indiquent au navigateur comment  afficher le texte et tout autre contenu que vous écrivez en HTML.
Notez que CSS est sensible à la casse, alors soyez prudent avec votre capitalisation.
CSS a été adopté par tous les principaux navigateurs et vous permet de contrôler :

- couleur
- polices
- positionnement
- espacement
- dimensionnement
- décorations
- transitions

Il existe trois façons principales d'appliquer le style CSS. Vous pouvez  appliquer des styles en ligne directement aux éléments HTML avec  l'attribut style. Vous pouvez également placer des règles CSS dans des  balises de style dans un document HTML. Enfin, vous pouvez écrire des  règles CSS dans une feuille de style externe, puis référencer ce fichier dans le document HTML. Même si les deux premières options ont leurs cas d'utilisation, la plupart des développeurs préfèrent les feuilles de  style externes car elles séparent les styles des éléments HTML. Cela  améliore la lisibilité et la réutilisabilité de votre code.

L'idée derrière CSS est que vous pouvez utiliser un sélecteur pour cibler un  élément HTML dans le DOM (Document Object Model), puis appliquer une  variété d'attributs à cet élément pour changer la façon dont il est  affiché sur la page.

Dans cette section, vous verrez comment  l'ajout de styles CSS aux éléments de votre CatPhotoApp peut le faire  passer d'un simple texte à quelque chose de plus.

-----



## 1. Changer la couleur du texte

[Learn Basic CSS: Change the Color of Text | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/change-the-color-of-text)

Modifions maintenant la couleur de certains de nos textes.
Nous pouvons le faire en modifiant le `style` de votre élément `h2`.
La propriété responsable de la couleur du texte d'un élément est la propriété de style `color`.
Voici comment définir la couleur du texte de votre élément `h2` sur bleu :

`<h2 style="color: blue;">CatPhotoApp</h2>`

Notez qu'il est recommandé de terminer les déclarations de `style` en ligne par un `;`.

-----

Modifiez le style de votre élément `h2` afin que sa couleur de texte soit rouge.

> Votre élément `h2` doit avoir une déclaration `style`.
> Votre élément `h2` doit avoir la couleur `red`.
> Votre déclaration `style` doit se terminer par un `;`.

```html
<h2 style="color: red;">CatPhotoApp</h2>
```

-----



## 2. Utiliser les sélecteurs CSS pour styliser les éléments

[Learn Basic CSS: Use CSS Selectors to Style Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-css-selectors-to-style-elements)

Avec CSS, il existe des centaines de propriétés CSS que vous pouvez  utiliser pour modifier l'apparence d'un élément sur votre page.
Lorsque vous avez entré `<h2 style="color: red;">CatPhotoApp</h2>`, vous styliez cet élément `h2` individuel avec CSS en ligne, qui signifie Feuilles de style en cascade.
C'est une façon de spécifier le style d'un élément, mais il existe une meilleure façon d'appliquer le CSS.
En haut de votre code, créez un bloc de `style` comme celui-ci :

```html
<style>
</style>
```

À l'intérieur de ce bloc de style, vous pouvez créer un sélecteur CSS  pour tous les éléments `h2`. Par exemple, si vous vouliez que tous les  éléments `h2` soient rouges, vous ajouteriez une règle de style qui  ressemble à ceci :

```html
<style>
  h2 {
    color: red;
  }
</style>
```

Notez qu'il est important d'avoir à la fois des accolades ouvrantes et  fermantes (`{` et `}`) autour des règles de style de chaque élément. Vous  devez également vous assurer que la définition de style de votre élément se situe entre les balises de style d'ouverture et de fermeture. Enfin, veillez à ajouter un point-virgule à la fin de chacune des règles de  style de votre élément.

-----

Supprimez l'attribut de style de votre élément `h2` et créez à la place un bloc de `style` CSS. Ajoutez le CSS  nécessaire pour que tous les éléments `h2` deviennent bleus.

> L'attribut style doit être supprimé de votre élément `h2`.
> Vous devez créer un élément `style`.
> Votre élément `h2` doit être bleu.
> Votre déclaration `h2` de feuille de style doit être valide avec un point-virgule et une accolade fermante.
> Tous vos éléments `style` doivent être valides et avoir des balises de fermeture.

```html
<style>
  h2 {
    color: blue;
  }
</style>
```

-----



## 3. Utilisez une classe CSS pour styliser un élément

[Learn Basic CSS: Use a CSS Class to Style an Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-a-css-class-to-style-an-element)

Les classes sont des styles réutilisables qui peuvent être ajoutés aux éléments HTML.
Voici un exemple de déclaration de classe CSS :

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

Vous pouvez voir que nous avons créé une classe CSS appelée `blue-text` dans  la balise `<style>`. Vous pouvez appliquer une classe à un élément HTML  comme ceci : `<h2 class="blue-text">CatPhotoApp</h2>`. Notez que dans votre élément de `style` CSS, les noms de classe commencent par un point. Dans  l'attribut de classe de vos éléments HTML, le nom de classe n'inclut pas le point.

-----

À l'intérieur de votre élément `style`, changez le sélecteur `h2` en `.red-text` et mettez à jour la valeur de la couleur de `blue` au `red`.
Donnez à votre élément `h2` l'attribut `class` avec la valeur `'red-text'`.

> Votre élément `h2` doit être rouge.
> Votre élément `h2` doit avoir la classe `red-text`.
> Votre feuille de style doit déclarer une classe `red-text` et avoir sa couleur définie sur rouge.
> Vous ne devez pas utiliser de déclarations de style en ligne comme `style="color: red"` dans votre élément `h2`.

```html
<style>
  .red-text {
    color: red;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
```

-----



## 4. Style de plusieurs éléments avec une classe CSS

[Learn Basic CSS: Style Multiple Elements with a CSS Class | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/style-multiple-elements-with-a-css-class)

Les classes vous permettent d'utiliser les mêmes styles CSS sur  plusieurs éléments HTML. Vous pouvez voir cela en appliquant votre  classe `red-text` au premier élément `p`.

> Votre élément `h2` doit être rouge.
> Votre élément `h2` doit avoir la classe `red-text`.
> Votre premier élément `p` doit être rouge.
> Vos deuxième et troisième éléments `p` ne doivent pas être rouges.
> Votre premier élément `p` doit avoir la classe `red-text`.

```html
<style>
  .red-text {
    color: red;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
```

-----



## 5. Modifier la taille de police d'un élément

[Learn Basic CSS: Change the Font Size of an Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/change-the-font-size-of-an-element)

La taille de la police est contrôlée par la propriété CSS `font-size`, comme ceci :

```css
h1 {
  font-size: 30px;
}
```

------

À l'intérieur de la même balise `<style>` qui contient votre classe `red-text`, créez une entrée pour `p` éléments et définissez `font-size` sur 16 pixels (`16px`).

> Entre les balises `style`, donnez aux éléments `p` une `font-size` de `16px`. Le zoom du navigateur et du texte doit être à 100%.

```html
<style>
  .red-text {
    color: red;
  }
  p {
    font-size: 16px;
  }
</style>
```

-----



## 6. Définir la famille de polices d'un élément

[Learn Basic CSS: Set the Font Family of an Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/set-the-font-family-of-an-element)

Vous pouvez définir la police qu'un élément doit utiliser en utilisant la propriété `font-family`.

Par exemple, si vous vouliez définir la police de votre élément `h2` sur `sans-serif`, vous utiliseriez le CSS suivant :

```css
h2 {
  font-family: sans-serif;
}
```

Faites en sorte que tous vos éléments `p` utilisent la police monospace.

> Vos éléments `p` doivent utiliser la police `monospace`.

```css
p {
  font-size: 16px;
  font-family: monospace;
}
```

-----



## 7. Importer une police Google

[Learn Basic CSS: Import a Google Font | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/import-a-google-font)

En plus de spécifier les polices courantes que l'on trouve sur la  plupart des systèmes d'exploitation, nous pouvons également spécifier  des polices Web personnalisées non standard à utiliser sur notre site  Web. Il existe de nombreuses sources de polices Web sur Internet. Pour  cet exemple, nous nous concentrerons sur la bibliothèque Google Fonts.

[Google Fonts](https://fonts.google.com/) est une bibliothèque gratuite de polices Web que vous pouvez  utiliser dans votre CSS en référençant l'URL de la police.

Alors, allons-y et importons et appliquons une police Google (notez que si  Google est bloqué dans votre pays, vous devrez sauter ce défi).

Pour importer une police Google, vous pouvez copier l'URL de la ou des  polices de la bibliothèque Google Fonts, puis la coller dans votre HTML. Pour ce défi, nous importerons la police `Lobster`. Pour ce faire, copiez l'extrait de code suivant et collez-le en haut de votre éditeur de code (avant l'ouverture de l'élément `style`) :

`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">`

Vous pouvez maintenant utiliser la police `Lobster` dans votre CSS en utilisant `Lobster` comme FAMILY_NAME comme dans l'exemple suivant :
`font-family: FAMILY_NAME, GENERIC_NAME;`.

GENERIC_NAME est facultatif et constitue une police de secours au cas où l'autre  police spécifiée ne serait pas disponible. Ceci est couvert dans le  prochain défi.

Les noms de famille sont sensibles à la casse et  doivent être mis entre guillemets s'il y a un espace dans le nom. Par  exemple, vous avez besoin de guillemets pour utiliser la police `"Open Sans"`, mais pas pour utiliser la police `Lobster`.

-----

Créez une règle CSS `font-family` qui utilise la police `Lobster` et assurez-vous  qu'elle sera appliquée à votre élément `h2`.

> Vous devez importer la police `Lobster`.
> Votre élément `h2` doit utiliser la police `Lobster`.
> Vous devez utiliser un sélecteur CSS `h2` pour changer la police.
> Votre élément `p` doit toujours utiliser la police `monospace`.

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  h2 {
    font-family: Lobster, GENERIC_NAME;
  }
  .red-text {
    color: red;
  }
  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>
```

-----



## 8. Spécifier comment les polices doivent se dégrader

[Learn Basic CSS: Specify How Fonts Should Degrade | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/specify-how-fonts-should-degrade)

Il existe plusieurs polices par défaut disponibles dans tous les  navigateurs. Ces familles de polices génériques incluent `monospace`, `serif` et `sans-serif`.
Lorsqu'une police n'est pas disponible, vous pouvez dire au navigateur de se « dégrader » en une autre police.
Par exemple, si vous souhaitez qu'un élément utilise la police `Helvetica`,  mais qu'il se dégrade en police `sans-serif` lorsque `Helvetica` n'est pas  disponible, vous le spécifiez comme suit :

```html
p {
  font-family: Helvetica, sans-serif;
}
```

Les noms de famille de polices génériques ne sont pas sensibles à la casse. De plus, ils n'ont pas besoin de guillemets car ce sont des mots-clés  CSS.

-----

Pour commencer, appliquez la police `monospace` à l'élément `h2`, de sorte qu'il ait maintenant deux polices - `Lobster` et `monospace`.
Dans le dernier défi, vous avez importé la police `Lobster` en utilisant la balise `link`. Maintenant, commentez cette importation de la police `Lobster` (en utilisant les commentaires HTML que vous avez appris  auparavant) à partir de Google Fonts afin qu'elle ne soit plus  disponible. Remarquez comment votre élément `h2` se dégrade en police `monospace`.
**Remarque :** si la police Lobster est installée sur votre ordinateur, vous ne verrez pas la dégradation car votre navigateur est  capable de trouver la police.

> Votre élément `h2` doit utiliser la police `Lobster`.
> Votre élément `h2` doit se dégrader en police `monospace` lorsque `Lobster` n'est pas disponible.
> Vous devriez commenter votre appel à Google pour la police `Lobster` en mettant `<!--` devant.
> Vous devez fermer votre commentaire en ajoutant `-->`.

```html
<!-- <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"> -->
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, monospace;
  }
  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>
```

-----



## 9. Dimensionner vos images

[Learn Basic CSS: Size Your Images | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/size-your-images)

CSS a une propriété appelée `width` qui contrôle la largeur d'un élément.  Tout comme avec les polices, nous utiliserons `px` (pixels) pour spécifier la largeur de l'image.
Par exemple, si nous voulions créer une  classe CSS appelée `larger-image` qui donne aux éléments HTML une  largeur de 500 pixels, nous utiliserions :

```html
<style>
  .larger-image {
    width: 500px;
  }
</style>
```

Créez une classe appelée `smaller-image` et utilisez-la pour redimensionner l'image afin qu'elle ne fasse que 100 pixels de large.
**Remarque :** en raison des différences d'implémentation du navigateur, vous devrez  peut-être être au zoom de 100% pour réussir les tests sur ce défi.

> Votre élément `img` doit avoir la classe `smaller-image`.
> Votre image doit avoir une largeur de 100 pixels. Le zoom du navigateur doit être à 100%.

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, monospace;
  }
  p {
    font-size: 16px;
    font-family: monospace;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img class="smaller-image" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
```

-----



## 10. Ajouter des bordures autour de vos éléments

[Learn Basic CSS: Add Borders Around Your Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-borders-around-your-elements)

Les bordures CSS ont des propriétés telles que `style`, `color` et `width`.
Par exemple, si nous voulions créer une bordure rouge de 5 pixels autour  d'un élément HTML, nous pourrions utiliser cette classe :

```html
<style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>
```

-----

Créez une classe appelée `thick-green-border`. Cette classe doit ajouter une bordure verte solide de 10 pixels autour d'un élément HTML. Appliquez  la classe à votre photo de chat.
N'oubliez pas que vous pouvez  appliquer plusieurs classes à un élément à l'aide de son attribut `class`, en séparant chaque nom de classe par un espace. Par exemple : `<img class="class1 class2">`.

> Votre élément `img` doit avoir la classe `smaller-image`.
> Votre élément `img` doit avoir la classe `thick-green-border`.
> Votre image doit avoir une largeur de bordure de `10px`.
> Votre image doit avoir un style de bordure `solid`.
> La bordure autour de votre élément `img` doit être verte.

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, monospace;
  }
  p {
    font-size: 16px;
    font-family: monospace;
  }
  .smaller-image {
    width: 100px;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
```

-----



## 11. Ajouter des coins arrondis avec un rayon de bordure `border-radius`

[Learn Basic CSS: Add Rounded Corners with border-radius | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-rounded-corners-with-border-radius)

La photo de votre chat présente actuellement des angles vifs. Nous  pouvons arrondir ces coins avec une propriété CSS appelée `border-radius`.

-----

Vous pouvez spécifier un `border-radius` avec des pixels. Donnez à votre photo de chat un `border-radius` de `10px`.
**Remarque :** ce défi permet plusieurs solutions possibles. Par exemple, vous pouvez  ajouter `border-radius` à la classe `.thick-green-border` ou à la classe  `.smaller-image`.

> Votre élément d'image doit avoir la classe "thick-green-border".
> Votre image doit avoir un rayon de bordure de `10px`.

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, monospace;
  }
  p {
    font-size: 16px;
    font-family: monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 10px;
  }
  .smaller-image {
    width: 100px;
  }
</style>
```

-----



## 12. Créer des images circulaires avec un rayon de bordure `border-radius`

[Learn Basic CSS: Make Circular Images with a border-radius | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/make-circular-images-with-a-border-radius)

En plus des pixels, vous pouvez également spécifier le `border-radius` à l'aide d'un pourcentage.

-----

Donnez à votre photo de chat un `border-radius` de `50%`.

> Votre image doit avoir un rayon de bordure de `50%`, ce qui la rend parfaitement circulaire.
> La valeur `border-radius` doit utiliser une valeur de pourcentage de `50%`.

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, monospace;
  }
  p {
    font-size: 16px;
    font-family: monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
```

-----



## 13. Donner une couleur d'arrière-plan à un élément `div`

[Learn Basic CSS: Give a Background Color to a div Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/give-a-background-color-to-a-div-element)

Vous pouvez définir la couleur d'arrière-plan d'un élément avec la propriété `background-color`.
Par exemple, si vous vouliez que la couleur d'arrière-plan d'un élément soit `green`, vous la mettriez dans votre élément `style` :

```css
.green-background {
  background-color: green;
}
```

------

Créez une classe appelée `silver-background` avec `background-color` silver. Attribuez cette classe à votre élément `div`.

> L'élément `div` doit avoir la classe `silver-background`.
> Votre élément `div` doit avoir un arrière-plan argenté.
> Une classe nommée `silver-background` doit être définie dans l'élément `style` et la valeur `silver` doit être affectée à la propriété `background-color`.

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, monospace;
  }
  p {
    font-size: 16px;
    font-family: monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
  .silver-background {
    background-color: silver;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>
```

-----



## 14. Définir l'`id` d'un élément

[Learn Basic CSS: Set the id of an Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/set-the-id-of-an-element)

En plus des classes, chaque élément HTML peut également avoir un attribut `id`.
Il y a plusieurs avantages à utiliser les attributs `id` : Vous pouvez utiliser un `id` pour styliser un seul élément et vous apprendrez plus  tard que vous pouvez les utiliser pour sélectionner et modifier des  éléments spécifiques avec JavaScript.
Les attributs `id` doivent  être uniques. Les navigateurs n'appliqueront pas cela, mais il s'agit  d'une bonne pratique largement acceptée. Veuillez donc ne pas donner à  plus d'un élément le même attribut `id`.
Voici un exemple de la façon dont vous donnez à votre élément `h2` l'id de `cat-photo-app` :

`<h2 id="cat-photo-app">`

------

Donnez à votre élément `form` l'id `cat-photo-form`.

> Votre élément de formulaire doit avoir l'id `cat-photo-form`.

```html
<form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
```

-----



## 15. Utiliser un attribut `id` pour styliser un élément

[Learn Basic CSS: Use an id Attribute to Style an Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-an-id-attribute-to-style-an-element)

Une chose intéressante à propos des attributs `id` est que, comme les classes, vous pouvez les styliser en utilisant CSS.
Cependant, un `id` n'est pas réutilisable et ne doit être appliqué qu'à un seul élément. Un `id` a également une spécificité (importance) plus élevée qu'une classe, donc si les deux sont appliqués au même  élément et ont des styles en conflit, les styles de l'`id` seront appliqués.
Voici un exemple de la façon dont vous pouvez prendre votre élément avec l'attribut `id` de `cat-photo-element` et lui donner la  couleur d'arrière-plan verte. Dans votre élément `style` :

```css
#cat-photo-element {
  background-color: green;
}
```

Notez qu'à l'intérieur de votre élément `style`, vous référencez toujours  les classes en mettant un `.` devant leurs noms. Vous faites toujours référence aux `id` en mettant un `#` devant leurs noms.

-----

Essayez de donner à votre formulaire, qui a maintenant l'attribut `id` de `cat-photo-form`, un fond vert.

> Votre élément de `form` doit avoir l'identifiant `cat-photo-form`.
> Votre élément de `form` doit avoir la `background-color` verte.
> Votre élément de `form` doit avoir un attribut `id`.
> Vous ne devez donner à votre `form` aucun attribut `class` ou `style`.

```css
#cat-photo-form {
  background-color: green;
}
```

-----



## 16. Ajuster le remplissage, `padding`, d'un élément

[Learn Basic CSS: Adjust the Padding of an Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/adjust-the-padding-of-an-element)

Maintenant, mettons notre application Cat Photo de côté pendant un moment et apprenons-en plus sur le style HTML.
Vous l'avez peut-être déjà remarqué, mais tous les éléments HTML sont essentiellement de petits rectangles.
Trois propriétés importantes contrôlent l'espace qui entoure chaque élément HTML : le remplissage (`padding`), la marge (`margin`) et la bordure (`border`).
Le `padding` d'un élément contrôle la quantité d'espace entre le contenu de l'élément et son `border`.
Ici, nous pouvons voir que la boîte bleue et la boîte rouge sont imbriquées dans la boîte jaune. Notez que la boîte rouge a plus de `padding` que  la boîte bleue.
Lorsque vous augmentez le `padding` de la boîte bleue, cela augmentera la distance (`padding`) entre le texte et la  bordure qui l'entoure.

-----

Changez le `padding` de votre boîte bleue pour correspondre à celui de votre boîte rouge.

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }
  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }
  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }
  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }
  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>
<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

> Votre classe `blue-box` devrait donner aux éléments `20px` de `padding`.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding: 20px;
}
```

-----



## 17. Ajuster la marge d'un élément

[Learn Basic CSS: Adjust the Margin of an Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/adjust-the-margin-of-an-element)

Un élément `margin` contrôle la quantité d'espace entre le `border` d'un élément et les éléments environnants.
Ici, nous pouvons voir que la boîte bleue et la boîte rouge sont imbriquées  dans la boîte jaune. Notez que la boîte rouge a un `margin` plus grande  que la boîte bleue, ce qui la fait paraître plus petite.
Lorsque vous augmentez `margin` de la boîte bleue, cela augmentera la distance entre sa bordure et les éléments environnants.

-----

Modifiez `margin` de la boîte bleue pour qu'elle corresponde à celle de la boîte rouge.

> Votre classe `blue-box` devrait donner aux éléments `20px` de `margin`.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding: 20px;
  margin: 20px;
}
```

-----



## 18. Ajouter une marge négative à un élément

[Learn Basic CSS: Add a Negative Margin to an Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-a-negative-margin-to-an-element)

Un élément `margin` contrôle la quantité d'espace entre `border` d'un élément et les éléments environnants.
Si vous définissez `margin` d'un élément sur une valeur négative, l'élément s'agrandit.

-----

Essayez de définir `margin` sur une valeur négative comme celle de la boîte rouge.
Modifiez `margin` de la zone bleue à `-15px`, afin qu'elle remplisse toute la largeur horizontale de la zone jaune qui l'entoure.

> Votre classe `blue-box` devrait donner aux éléments `-15px` de `margin`.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding: 20px;
  margin: -15px;
}
```

-----



## 19. Ajouter un remplissage différent à chaque côté d'un élément

[Learn Basic CSS: Add Different Padding to Each Side of an Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-different-padding-to-each-side-of-an-element)

Parfois, vous souhaiterez personnaliser un élément afin qu'il ait différentes quantités de `padding` sur chacun de ses côtés.
CSS vous permet de contrôler le `padding` des quatre côtés individuels  d'un élément avec les propriétés `padding-top`, `padding-right`, `padding-bottom`, et `padding-left` .

-----

Donnez à la `blue-box` un  `padding` de `40px` sur ses côtés supérieur et gauche, mais seulement `20px` sur ses côtés inférieur et droit.

> Votre classe de `blue-box` devrait donner au haut des éléments `40px` de `padding`.
> Votre classe de `blue-box` devrait donner le droit des éléments `20px` de `padding`.
> Votre classe `blue-box` devrait donner au bas des éléments `20px` de `padding`.
> Votre classe `blue-box` doit donner à la gauche des éléments `40px` de `padding`.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
}
```

-----



## 20. Ajouter des marges différentes de chaque côté d'un élément

[Learn Basic CSS: Add Different Margins to Each Side of an Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-different-margins-to-each-side-of-an-element)

Parfois, vous souhaiterez personnaliser un élément afin qu'il ait une `margin` différente sur chacun de ses côtés.
CSS vous permet de contrôler `margin` des quatre côtés individuels d'un élément avec les propriétés `margin-top`, `margin-right`, `margin-bottom`, et `margin-left` .

-----

Donnez à `blue-box` une `margin` de `40px` sur ses  côtés supérieur et gauche, mais seulement `20px` sur ses côtés inférieur  et droit.

> Votre classe de `blue-box` doit donner au haut des éléments `40px` de `margin`.
> Votre classe `blue-box` doit donner au droit des éléments `20px` de `margin`.
> Votre classe de `blue-box` devrait donner au bas des éléments `20px` de `margin`.
> Votre classe de `blue-box` doit donner à la gauche des éléments `40px` de `margin`.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  margin-top: 40px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-left: 40px;
}
```

-----



## 21. Utiliser la notation dans le sens des aiguilles d'une montre pour spécifier le remplissage d'un élément

[Learn Basic CSS: Use Clockwise Notation to Specify the Padding of an Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-clockwise-notation-to-specify-the-padding-of-an-element)

Au lieu de spécifier individuellement les propriétés `padding-top`, `padding-right`, `padding-bottom`, et `padding-left` d'un élément, vous pouvez  les spécifier toutes sur une seule ligne, comme ceci :

`padding: 10px 20px 10px 20px;`

Ces quatre valeurs fonctionnent comme une horloge : haut, droite, bas,  gauche et produiront exactement le même résultat que l'utilisation des  instructions de remplissage spécifiques aux côtés.

-----

Utilisez la  notation dans le sens des aiguilles d'une montre pour donner à la classe ".blue-box" un `padding` de `40px` sur ses côtés supérieur et gauche,  mais seulement `20px` sur ses côtés inférieur et droit.

> Votre classe `blue-box` devrait donner au haut des éléments `40px` de `padding`.
> Votre classe `blue-box` devrait donner le droit des éléments `20px` de `padding`.
> Votre classe `blue-box` doit donner au bas des éléments `20px` de `padding`.
> Votre classe `blue-box` devrait donner à la gauche des éléments `40px` de `padding`.
> Vous devez utiliser la notation dans le sens des aiguilles d'une montre pour définir le `padding` de la classe `blue-box`.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding: 40px 20px 20px 40px;
}
```

-----



## 22. Utiliser la notation dans le sens des aiguilles d'une montre pour spécifier la marge d'un élément

[Learn Basic CSS: Use Clockwise Notation to Specify the Margin of an Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-clockwise-notation-to-specify-the-margin-of-an-element)

Essayons à nouveau, mais avec `margin` cette fois.
Au lieu de  spécifier individuellement les propriétés `margin-top`, `margin-right`, `margin-bottom`, et `margin-left` d'un élément, vous pouvez les spécifier toutes sur une seule ligne, comme ceci :

`margin: 10px 20px 10px 20px;`

Ces quatre valeurs fonctionnent comme une horloge : haut, droite, bas,  gauche et produiront exactement le même résultat que l'utilisation des instructions de marge spécifiques aux côtés.

Utilisez la notation dans le sens des aiguilles d'une montre pour donner à l'élément avec la classe `blue-box` une `margin` de `40px` sur ses côtés supérieur et  gauche, mais seulement `20px` sur ses côtés inférieur et droit.

-----

> Votre classe `blue-box` doit donner au haut des éléments `40px` de `margin`.
> Votre classe `blue-box` doit donner au droit des éléments `20px` de `margin`.
> Votre classe `blue-box` devrait donner au bas des éléments `20px` de `margin`.
> Votre classe `blue-box` doit donner à la gauche des éléments `40px` de `margin`.
> Vous devez utiliser la notation dans le sens des aiguilles d'une montre pour définir la `margin` de la classe `blue-box`.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  margin: 40px 20px 20px 40px;
}
```

-----



## 23. Utiliser les sélecteurs d'attributs pour styliser les éléments

[Learn Basic CSS: Use Attribute Selectors to Style Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-attribute-selectors-to-style-elements)

Vous avez ajouté des attributs `id` ou `class` aux éléments que vous  souhaitez styliser spécifiquement. Ceux-ci sont connus sous le nom de sélecteurs d'ID et de classe. Il existe d'autres sélecteurs CSS que vous pouvez utiliser pour sélectionner des groupes d'éléments personnalisés à styliser.
Faisons à nouveau ressortir CatPhotoApp pour nous entraîner à utiliser les sélecteurs CSS.
Pour ce défi, vous utiliserez le sélecteur d'attribut `[attr = value]` pour  styliser les cases à cocher dans CatPhotoApp. Ce sélecteur fait  correspondre et stylise les éléments avec une valeur d'attribut  spécifique. Par exemple, le code ci-dessous modifie les marges de tous  les éléments avec le `type` d'attribut et une valeur correspondante de `radio` :

```css
[type='radio'] {
  margin: 20px 0px 20px 0px;
}
```

-----

À l'aide du sélecteur d'attribut `type`, essayez de donner aux cases à cocher dans CatPhotoApp une marge supérieure de `10px` et une marge  inférieure de `15px`.

> Le sélecteur d'attribut `type` doit être utilisé pour sélectionner les cases à cocher.
> Les marges supérieures des cases à cocher doivent être de `10px`.
> Les marges inférieures des cases à cocher doivent être de `15px`.

```css
[type='checkbox'] {
  margin: 10px 0px 15px 0px;
}
```

-----



## 24. Comprendre les unités absolues et relatives

[Learn Basic CSS: Understand Absolute versus Relative Units | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/understand-absolute-versus-relative-units)

Les derniers défis définissent tous la marge ou le remplissage d'un élément avec des pixels (`px`). Les pixels sont un type d'unité de  longueur, ce qui indique au navigateur comment dimensionner ou espacer un élément. En plus de `px`, CSS propose un certain nombre d'options d'unités de longueur différentes que vous pouvez utiliser.

Les  deux principaux types d'unités de longueur sont absolus et relatifs. Les unités absolues sont liées aux unités physiques de longueur. Par  exemple, `in` et `mm` se réfèrent respectivement aux pouces et aux millimètres. Les unités de longueur absolue correspondent  approximativement à la mesure réelle sur un écran, mais il existe  certaines différences selon la résolution de l'écran.

Les unités relatives, telles que `em` ou `rem`, sont relatives à une autre valeur de  longueur. Par exemple, `em` est basé sur la taille de la police d'un élément. Si vous l'utilisez pour définir la propriété `font-size` elle-même, elle est relative à `font-size` du parent.

**Remarque :** plusieurs options d'unité relative sont liées à la taille de la  fenêtre. Ils sont traités dans la section Principes de conception Web  adaptative.

-----

Ajoutez une propriété `padding` à l'élément avec la classe `red-box` et définissez-la sur `1.5em`.

> Votre classe `red-box` doit avoir une propriété `padding`.
> Votre classe `red-box` devrait donner aux éléments `1.5em` de `padding`.

```css
.red-box {
  background-color: red;
  margin: 20px 40px 20px 40px;
  padding: 1.5em;
}
```

-----



## 25. Styliser l'élément de corps HTML

[Learn Basic CSS: Style the HTML Body Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/style-the-html-body-element)

Maintenant, commençons à neuf et parlons de l'héritage CSS.
Chaque page HTML a un élément de corps.

------

On peut prouver que l'élément body existe ici en lui donnant une couleur de fond noire.
Nous pouvons le faire en ajoutant ce qui suit à notre élément de style :

```css
body {
  background-color: black;
}
```

> Votre élément `body` doit avoir la `background-color` en noir.
> Votre règle CSS doit être correctement formatée avec des accolades ouvrantes et fermantes.
> Votre règle CSS doit se terminer par un point-virgule.

```css
<style>
  body {
    background-color: black;
  }
</style>
```

-----



## 26. Hériter des styles de l'élément Body

[Learn Basic CSS: Inherit Styles from the Body Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/inherit-styles-from-the-body-element)

Nous avons maintenant prouvé que chaque page HTML a un élément `body`, et  que son élément `body` peut également être stylisé avec CSS.
N'oubliez pas que vous pouvez styliser votre élément `body` comme tout autre  élément HTML, et tous vos autres éléments hériteront des styles de votre élément `body`.

-----

Tout d'abord, créez un élément `h1` avec le texte `Hello World`.
Ensuite, donnons à tous les éléments de votre page la couleur `green` en ajoutant  `color: green;` à la déclaration de style de votre élément `body`.
Enfin, donnez à votre élément `body` la famille `font-family` de `monospace` en  ajoutant `font-family: monospace;` à la déclaration de style de votre  élément `body`.

> Vous devez créer un élément `h1`.
> Votre élément `h1` doit avoir le texte `Hello World`.
> Votre élément `h1` doit avoir une balise de fermeture.
> Votre élément `body` doit avoir la propriété `color` en `green`.
> Votre élément `body` doit avoir la propriété `font-family` de `monospace`.
> Votre élément `h1` doit hériter de la police `monospace` de votre élément `body`.
> Votre élément `h1` doit hériter de la couleur verte de votre élément `body`.

```css
<style>
  body {
    background-color: black;
    color: green;
    font-family: monospace;
  }
</style>
<h1>Hello World</h1>
```

-----



## 27. Donner la priorité à un style par rapport à un autre

[Learn Basic CSS: Prioritize One Style Over Another | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/prioritize-one-style-over-another)

Parfois, vos éléments HTML recevront plusieurs styles en conflit les uns avec les autres.
Par exemple, votre élément `h1` ne peut pas être à la fois vert et rose.
Voyons ce qui se passe lorsque nous créons une classe qui rend le texte rose, puis appliquons-le à un élément. Notre classe remplacera-t-elle la propriété CSS `color: green;` de l'élément `body` ?

-----

Créez une classe CSS appelée `pink-text` qui donne à un élément la couleur rose.
Donnez à votre élément `h1` la classe de `pink-text`.

> Votre élément `h1` doit avoir la classe `pink-text`.
> Votre `<style>` doit avoir une classe CSS `pink-text` qui change la `color`.
> Votre élément `h1` doit être rose.

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```

-----



## 28. Remplacer les styles dans les CSS suivants

[Learn Basic CSS: Override Styles in Subsequent CSS | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-styles-in-subsequent-css)

Notre classe "pink-text" a outrepassé la déclaration CSS de notre élément body !
Nous venons de prouver que nos classes passerons outre le CSS de l'élément `body`. La question logique suivante est donc : que pouvons-nous faire pour passer outre notre classe de `pink-text` ?

-----

Créez une classe CSS  supplémentaire appelée `blue-text` qui donne à un élément la couleur  bleue. Assurez-vous qu'il est en dessous de votre déclaration de classe `pink-text`.
Appliquez la classe `blue-text` à votre élément `h1` en plus de votre classe `pink-text`, et voyons laquelle gagne.
L'application de plusieurs attributs de classe à un élément HTML se fait avec un espace entre eux comme ceci :

`class="class1 class2"`

**Remarque :** l'ordre dans lequel les classes sont répertoriées dans l'élément HTML n'a pas d'importance.
Cependant, l'ordre des déclarations de `class` dans la section `<style>` est ce qui est important. La seconde déclaration prévaudra toujours sur la première.  Parce que `.blue-text` est déclaré en second, il outrepasse les attributs de `.pink-text`.

> Votre élément `h1` doit avoir la classe `pink-text`.
> Votre élément `h1` doit avoir la classe `blue-text`.
> `blue-text` et `pink-text` doivent appartenir au même élément `h1`.
> Votre élément `h1` doit être bleu.

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

-----



## 29. Remplacer les déclarations de classe en stylisant les attributs d'ID

[Learn Basic CSS: Override Class Declarations by Styling ID Attributes | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-class-declarations-by-styling-id-attributes)

Nous venons de prouver que les navigateurs lisent les CSS de haut en bas dans l'ordre de leur déclaration. Cela signifie qu'en cas de conflit,  le navigateur utilisera la dernière déclaration CSS. Notez que si nous avions même mis `blue-text` avant `pink-text` dans les classes de notre élément `h1`, cela regarderait toujours l'ordre des déclarations et non l'ordre de leur utilisation !
Mais nous n'avons pas encore fini. Il existe d'autres moyens de remplacer le CSS. Vous souvenez-vous des attributs id ?
Remplaçons vos classes `pink-text` et `blue-text` , et rendons votre élément `h1` orange, en donnant à l'élément `h1` un identifiant, puis en stylisant cet identifiant.

-----

Donnez à votre élément `h1` l'attribut `id` de `orange-text`. N'oubliez pas que les styles `id` ressemblent à ceci :

`<h1 id="orange-text">`

Laissez les classes `blue-text` and `pink-text`  sur votre élément `h1`.
Créez une déclaration CSS pour votre `id` `orange-text` dans votre élément `style`. Voici un exemple de ce à quoi cela ressemble :

```css
#brown-text {
  color: brown;
}
```

**Remarque :** peu importe que vous déclariez ce CSS au-dessus ou au-dessous de la  classe `pink-text`, car l'attribut id aura toujours la priorité.

> Votre élément `h1` doit avoir la classe `pink-text`.
> Votre élément `h1` doit avoir la classe `blue-text`.
> Votre élément `h1` doit avoir l'identifiant `orange-text`.
> Il ne devrait y avoir qu'un seul élément `h1`.
> Votre `id` `orange-text` doit avoir une déclaration CSS.
> Votre `h1` ne doit avoir aucun attribut `style`.
> Votre élément `h1` doit être orange.

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
  color: orange;
}
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```

-----



## 30. Remplacer les déclarations de classe avec des styles en ligne

[Learn Basic CSS: Override Class Declarations with Inline Styles | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-class-declarations-with-inline-styles)

Nous avons donc prouvé que les déclarations d'id remplacent les déclarations de classe, quel que soit l'endroit où elles sont déclarées  dans votre élément `style` CSS.
Il existe d'autres moyens de remplacer le CSS. Vous souvenez-vous des styles en ligne ?

-----

Utilisez un style en ligne pour essayer de rendre notre élément `h1` blanc.  N'oubliez pas que les styles de ligne ressemblent à ceci :

`<h1 style="color: green;">`

Laissez les classes `blue-text` et `pink-text` sur votre élément `h1`.

> Votre élément `h1` doit avoir la classe `pink-text`.
> Votre élément `h1` doit avoir la classe `blue-text`.
> Votre élément `h1` doit avoir l'identifiant `orange-text`.
> Votre élément `h1` doit avoir un style en ligne.
> Votre élément `h1` doit être blanc.

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white;" >Hello World!</h1>
```

-----



## 31. Remplacer tous les autres styles en utilisant Important

[Learn Basic CSS: Override All Other Styles by using Important | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-all-other-styles-by-using-important)

Yay ! Nous venons de prouver que les styles en ligne remplaceront toutes les déclarations CSS dans votre élément `style`.
Mais attendez. Il existe un dernier moyen de remplacer CSS. C'est la méthode la plus puissante de toutes. Mais avant de le faire, parlons des  raisons pour lesquelles vous voudriez un jour remplacer CSS.
Dans de nombreuses situations, vous utiliserez des bibliothèques CSS.  Ceux-ci peuvent accidentellement remplacer votre propre CSS. Donc,  lorsque vous devez absolument vous assurer qu'un élément a un CSS  spécifique, vous pouvez utiliser `!important`.
Revenons à notre  déclaration de classe `pink-text`. N'oubliez pas que notre classe `pink-text` a été remplacée par les déclarations de classe, les déclarations id et les styles en ligne suivants.

-----

Ajoutons le  mot-clé `!important` à la déclaration de couleur de votre élément `pink-text` pour être sûr à 100% que votre élément `h1` sera rose.
Voici un exemple de procédure :

`color: red !important;`

> Votre élément `h1` doit avoir la classe `pink-text`.
> Votre élément `h1` doit avoir la classe `blue-text`.
> Votre élément `h1` doit avoir l'`id`  `orange-text`.
> Votre élément `h1` doit avoir le style en ligne de `color: white`.
> Votre déclaration de classe `pink-text` doit avoir le mot clé `!important` pour remplacer toutes les autres déclarations.
> Votre élément `h1` doit être rose.

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```

-----



## 32. Utiliser le code hexadécimal pour des couleurs spécifiques

[Learn Basic CSS: Use Hex Code for Specific Colors | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-hex-code-for-specific-colors)

Saviez-vous qu'il existe d'autres façons de représenter les couleurs en  CSS ? L'une de ces méthodes est appelée code hexadécimal, ou code  hexadécimal pour faire court.
Nous utilisons généralement des  *décimales*, ou des nombres de base 10, qui utilisent les symboles 0 à 9  pour chaque chiffre. Les *hexadécimaux* (ou *hex*) sont des nombres en base 16. Cela signifie qu'il utilise seize symboles distincts. Comme les décimales, les symboles 0-9 représentent les valeurs de zéro à  neuf. Alors A, B, C, D, E, F représentent les valeurs de dix à quinze.  Au total, 0 à F peut représenter un chiffre en hexadécimal, ce qui nous  donne 16 valeurs possibles au total. Vous pouvez trouver plus  d'informations sur [les nombres hexadécimaux ici](https://fr.wikipedia.org/wiki/Syst%C3%A8me_hexad%C3%A9cimal).
En CSS, nous  pouvons utiliser 6 chiffres hexadécimaux pour représenter les couleurs,  deux pour les composants rouge (R), vert (G) et bleu (B). Par exemple, `#000000` est noir et est également la valeur la plus basse possible. Vous pouvez trouver plus d'informations sur [le système de couleurs RVB ici](https://fr.wikipedia.org/wiki/Rouge_vert_bleu).

```css
body {
  color: #000000;
}
```

-----

Remplacez le mot `black` dans `background-color` de notre `body` par sa représentation en code hexadécimal, `#000000`.

> Votre élément `body` doit avoir `background-color` en noir.
> Le `hex code` de la couleur noire doit être utilisé à la place du mot `black`.

```html
<style>
  body {
    background-color: #000000;
  }
</style>
```

-----



## 33. Utilisez le code hexadécimal pour mélanger les couleurs

[Learn Basic CSS: Use Hex Code to Mix Colors | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-hex-code-to-mix-colors)

Pour vérifier, les codes hexadécimaux utilisent 6 chiffres hexadécimaux  pour représenter les couleurs, deux chacun pour les composants rouge (R), vert (G) et bleu (B).
A partir de ces trois couleurs pures  (rouge, vert et bleu), on peut varier les quantités de chacune pour  créer plus de 16 millions d'autres couleurs !
Par exemple, l'orange est du rouge pur, mélangé avec du vert et pas de bleu. En code hexadécimal, cela se traduit par `#FFA500`.
Le chiffre `0` est le plus petit nombre en code hexadécimal et représente une absence totale de couleur.
Le chiffre `F` est le nombre le plus élevé du code hexadécimal et représente la luminosité maximale possible.

-----

Remplacez les mots de couleur dans notre élément `style` par leurs codes hexadécimaux corrects.

| Color       | Hex Code  |
| ----------- | --------- |
| Dodger Blue | `#1E90FF` |
| Green       | `#00FF00` |
| Orange      | `#FFA500` |
| Red         | `#FF0000` |

> Votre élément `h1` avec le texte `I am red!` devrait avoir la `color` rouge.
> Le `hex code` de la couleur rouge doit être utilisé à la place du mot `red`.
> Votre élément `h1` avec le texte `I am green!` devrait avoir la `color` verte.
> Le `hex code` de la couleur verte doit être utilisé à la place du mot `green`.
> Votre élément `h1` avec le texte I`I am dodger blue!` devrait recevoir la `color` bleu canard.
> Le `hex code` de la couleur bleu dodger doit être utilisé à la place du mot `dodgerblue`.
> Votre élément `h1` avec le texte `I am orange!` devrait avoir la `color` orange.
> Le `hex code` de la couleur orange doit être utilisé à la place du mot `orange`.

```html
<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #1E90FF;
  }
  .orange-text {
    color: #FFA500;
  }
</style>
<h1 class="red-text">I am red!</h1>
<h1 class="green-text">I am green!</h1>
<h1 class="dodger-blue-text">I am dodger blue!</h1>
<h1 class="orange-text">I am orange!</h1>
```

-----



## 34. Utiliser un code hexadécimal abrégé

[Learn Basic CSS: Use Abbreviated Hex Code | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-abbreviated-hex-code)

Beaucoup de gens se sentent dépassés par les possibilités de plus de 16  millions de couleurs. Et il est difficile de se souvenir du code  hexadécimal. Heureusement, vous pouvez le raccourcir.
Par  exemple, le code hexadécimal du rouge `#FF0000` peut être raccourci en `#F00`. Cette forme abrégée donne un chiffre pour le rouge, un chiffre pour le vert et un chiffre pour le bleu.
Cela réduit le nombre total  de couleurs possibles à environ 4000. Mais les navigateurs interpréteront `#FF0000` et `#F00` comme exactement la même couleur.

-----

Allez-y, essayez d'utiliser les codes hexadécimaux abrégés pour colorer les bons éléments.

| Color   | Short Hex Code |
| ------- | -------------- |
| Cyan    | `#0FF`         |
| Green   | `#0F0`         |
| Red     | `#F00`         |
| Fuchsia | `#F0F`         |

> Votre élément `h1` avec le texte `I am red!` devrait avoir la `color` rouge.
> Le `hex code` abrégé de la couleur rouge doit être utilisé à la place du code hexadécimal `#FF0000`.
> Votre élément `h1` avec le texte `I am green!` devrait avoir la `color` verte.
> Le `hex code` abrégé de la couleur verte doit être utilisé à la place du code hexadécimal `#00FF00`.
> Votre élément `h1` avec le texte `I am cyan!` devrait recevoir la `color` cyan.
> Le `hex code` abrégé de la couleur cyan doit être utilisé à la place du code hexadécimal `#00FFFF`.
> Votre élément `h1` avec le texte `I am fuchsia!` devrait recevoir la `color` fuchsia.
> Le `hex code` abrégé de la couleur fuchsia doit être utilisé à la place du code hexadécimal `#FF00FF`.

```html
<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>
<h1 class="red-text">I am red!</h1>
<h1 class="fuchsia-text">I am fuchsia!</h1>
<h1 class="cyan-text">I am cyan!</h1>
<h1 class="green-text">I am green!</h1>
```

-----



## 35. Utiliser les valeurs RVB pour colorer les éléments

[Learn Basic CSS: Use RGB values to Color Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-rgb-values-to-color-elements)

Une autre façon de représenter les couleurs dans CSS consiste à utiliser des valeurs `RVB`.
La valeur RVB du noir ressemble à ceci :

`rgb(0, 0, 0)`

La valeur RVB du blanc ressemble à ceci :

`rgb(255, 255, 255)`

Au lieu d'utiliser six chiffres hexadécimaux comme vous le faites avec le  code hexadécimal, avec RVB, vous spécifiez la luminosité de chaque  couleur avec un nombre compris entre 0 et 255.
Si vous faites le  calcul, les deux chiffres d'une couleur valent 16 fois 16, ce qui nous  donne 256 valeurs totales. Ainsi, RVB, qui commence à compter à partir  de zéro, a exactement le même nombre de valeurs possibles que le code  hexadécimal.
Voici un exemple de la façon dont vous changeriez l'arrière-plan du corps en orange à l'aide de son code RVB.

```css
body {
  background-color: rgb(255, 165, 0);
}
```

Remplaçons le code hexadécimal dans la couleur d'arrière-plan de notre élément `body` par la valeur RVB du noir : `rgb(0, 0, 0)`.

> Votre élément `body` doit avoir un fond noir.
> Vous devriez utiliser `rgb` pour donner à votre élément `body` une couleur noire.

```html
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```

-----



## 36. Utilisez RVB pour mélanger les couleurs

[Learn Basic CSS: Use RGB to Mix Colors | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-rgb-to-mix-colors)

Tout comme avec le code hexadécimal, vous pouvez mélanger les couleurs  en RVB en utilisant des combinaisons de différentes valeurs.

-----

Remplacez les codes hexadécimaux de notre élément `style` par leurs valeurs RVB correctes.

| Couleur         | RVB                  |
| --------------- | -------------------- |
| Bleu            | `rgb(0, 0, 255)`     |
| Rouge           | `rgb(255, 0, 0)`     |
| Orchidée        | `rgb(218, 112, 214)` |
| Terre de sienne | `rgb(160, 82, 45)`   |

> Votre élément `h1` avec le texte `I am red!` devrait avoir `color` rouge.
> Vous devez utiliser `rgb` pour la couleur rouge.
> Votre élément `h1` avec le texte `I am orchid!` devrait avoir `color` orchidée.
> Vous devez utiliser `rgb` pour la couleur orchidée.
> Votre élément `h1` avec le texte `I am blue!` devrait avoir `color` bleue.
> Vous devez utiliser `rgb` pour la couleur bleue.
> Votre élément `h1` avec le texte `I am sienna!` devrait avoir `color` sienne.
> Vous devez utiliser `rgb` pour la couleur sienna.

```html
<style>
  .red-text {
    color: rgb(255, 0, 0);
  }
  .orchid-text {
    color: rgb(218, 112, 214);
  }
  .sienna-text {
    color: rgb(160, 82, 45);
  }
  .blue-text {
    color: rgb(0, 0, 255);
  }
</style>
<h1 class="red-text">I am red!</h1>
<h1 class="orchid-text">I am orchid!</h1>
<h1 class="sienna-text">I am sienna!</h1>
<h1 class="blue-text">I am blue!</h1>
```

-----



## 37. Utilisez des variables CSS pour modifier plusieurs éléments à la fois

[Learn Basic CSS: Use CSS Variables to change several elements at once | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-css-variables-to-change-several-elements-at-once)

Les *variables* CSS sont un moyen puissant de modifier de nombreuses  propriétés de style CSS à la fois en ne modifiant qu'une seule valeur.
Suivez les instructions ci-dessous pour voir comment la modification de  seulement trois valeurs peut modifier le style de nombreux éléments.

-----

Dans la classe `penguin`, changez la valeur `black` en `gray`, la valeur `gray` en `white` et la valeur `yellow` en `orange`.

> La classe `penguin` doit déclarer la variable `--penguin-skin` et l'affecter à `gray`.
> La classe `penguin` doit déclarer la variable `--penguin-belly` et l'affecter à `white`.
> La classe `penguin` doit déclarer la variable `--penguin-beak` et l'affecter à `orange`.

```html
<style>
  .penguin {
    /* Only change code below this line */
    --penguin-skin: black;
    --penguin-belly: gray;
    --penguin-beak: yellow;
    /* Only change code above this line */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }
  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }
  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }
  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }
  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }
  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }
  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }
  body {
    background:#c6faf1;
  }
  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

```css
.penguin {
  --penguin-skin: gray;
  --penguin-belly: white;
  --penguin-beak: orange;
```

-----



## 38. Créer une variable CSS personnalisée

[Learn Basic CSS: Create a custom CSS Variable | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/create-a-custom-css-variable)

Pour créer une variable CSS, il vous suffit de lui donner un nom avec deux tirets devant elle et de lui attribuer une valeur comme celle-ci :

`--penguin-skin: gray;`

Cela créera une variable nommée `--penguin-skin` et lui attribuera la valeur de `gray`. Vous pouvez maintenant utiliser cette variable ailleurs dans votre CSS pour changer la valeur des autres éléments en gris.

-----

Dans la classe `penguin`, créez un nom de variable `--penguin-skin` et donnez-lui une valeur `gray`.

> La classe `penguin` devrait déclarer la variable `--penguin-skin` et l'affecter à `gray`.

```html
<style>
  .penguin {
    /* Only change code below this line */

    /* Only change code above this line */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
```

```css
.penguin {
  --penguin-skin: gray;
}
```

-----



## 39. Utilisez une variable CSS personnalisée

[Learn Basic CSS: Use a custom CSS Variable | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-a-custom-css-variable)

Après avoir créé votre variable, vous pouvez attribuer sa valeur à d'autres propriétés CSS en référençant le nom que vous lui avez donné.

```css
background: var(--penguin-skin);
```

Cela changera l'arrière-plan de l'élément que vous ciblez en gris car c'est  la valeur de la variable `--penguin-skin`. Notez que les styles ne seront  appliqués que si les noms des variables correspondent exactement.

------

Appliquez la variable `--penguin-skin` à la propriété `background` des classes `penguin-top`, `penguin-bottom`, `right-hand` et `left-hand`.

> La variable `--penguin-skin` doit être appliquée à la propriété `background` de la classe `penguin-top`.
> La variable `--penguin-skin` doit être appliquée à la propriété `background` de la classe `penguin-bottom`.
> La variable `--penguin-skin` doit être appliquée à la propriété `background` de la classe `right-hand`.
> La variable `--penguin-skin` doit être appliquée à la propriété `background` de la classe `left-hand`.

```html
<style>
	.penguin {
		--penguin-skin: gray;
		position: relative;
		margin: auto;
		display: block;
		margin-top: 5%;
		width: 300px;
		height: 300px;
	}
	.penguin-top {
		top: 10%;
		left: 25%;
		/* Change code below this line */
		background: black;
		/* Change code above this line */
		width: 50%;
		height: 45%;
		border-radius: 70% 70% 60% 60%;
	}
	.penguin-bottom {
		top: 40%;
		left: 23.5%;
		/* Change code below this line */
		background: black;
		/* Change code above this line */
		width: 53%;
		height: 45%;
		border-radius: 70% 70% 100% 100%;
	}
	.right-hand {
		top: 0%;
		left: -5%;
		/* Change code below this line */
		background: black;
		/* Change code above this line */
		width: 30%;
		height: 60%;
		border-radius: 30% 30% 120% 30%;
		transform: rotate(45deg);
		z-index: -1;
	}
	.left-hand {
		top: 0%;
		left: 75%;
		/* Change code below this line */
		background: black;
		/* Change code above this line */
		width: 30%;
		height: 60%;
		border-radius: 30% 30% 30% 120%;
		transform: rotate(-45deg);
		z-index: -1;
	}
// [...]
```

```html
<style>
	.penguin {
		--penguin-skin: gray;
		position: relative;
		margin: auto;
		display: block;
		margin-top: 5%;
		width: 300px;
		height: 300px;
	}
	.penguin-top {
		top: 10%;
		left: 25%;
		/* Change code below this line */
		background: var(--penguin-skin);
		/* Change code above this line */
		width: 50%;
		height: 45%;
		border-radius: 70% 70% 60% 60%;
	}
	.penguin-bottom {
		top: 40%;
		left: 23.5%;
		/* Change code below this line */
		background: var(--penguin-skin);
		/* Change code above this line */
		width: 53%;
		height: 45%;
		border-radius: 70% 70% 100% 100%;
	}
	.right-hand {
		top: 0%;
		left: -5%;
		/* Change code below this line */
		background: var(--penguin-skin);
		/* Change code above this line */
		width: 30%;
		height: 60%;
		border-radius: 30% 30% 120% 30%;
		transform: rotate(45deg);
		z-index: -1;
	}
	.left-hand {
		top: 0%;
		left: 75%;
		/* Change code below this line */
		background: var(--penguin-skin);
		/* Change code above this line */
		width: 30%;
		height: 60%;
		border-radius: 30% 30% 30% 120%;
		transform: rotate(-45deg);
		z-index: -1;
	}
// [...]
```

-----



## 40. Attacher une valeur de repli à une variable CSS

[Learn Basic CSS: Attach a Fallback value to a CSS Variable | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/attach-a-fallback-value-to-a-css-variable)

Lorsque vous utilisez votre variable comme valeur de propriété CSS, vous pouvez attacher une valeur de secours à laquelle votre navigateur  reviendra si la variable donnée n'est pas valide.

**Remarque :** cette solution de secours n'est pas utilisée pour augmenter la compatibilité  du navigateur et ne fonctionnera pas sur les navigateurs IE. Il est  plutôt utilisé pour que le navigateur ait une couleur à afficher s'il ne trouve pas votre variable.
Voici comment procéder :

```css
background: var(--penguin-skin, black);
```

Cela définira l'arrière-plan en noir si votre variable n'a pas été définie. Notez que cela peut être utile pour le débogage.

-----

Il semble qu'il y ait un problème avec les variables fournies aux classes  `.penguin-top` et `.penguin-bottom`. Plutôt que de corriger la faute de frappe, ajoutez une valeur de repli `black` à la propriété `background`  des classes `.penguin-top` et `.penguin-bottom`.

> La valeur de repli `black` doit être utilisée dans la propriété `background` de la classe `penguin-top`.
> La valeur de repli `black` doit être utilisée dans la propriété `background` de la classe `penguin-bottom`.

```html
<style>
  .penguin {
    --penguin-skin: black;
    --penguin-belly: gray;
    --penguin-beak: yellow;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
  .penguin-top {
    top: 10%;
    left: 25%;
    /* Change code below this line */
    background: var(--pengiun-skin);
    /* Change code above this line */
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    /* Change code below this line */
    background: var(--pengiun-skin);
    /* Change code above this line */
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
```

```html
<style>
  .penguin {
    --penguin-skin: black;
    --penguin-belly: gray;
    --penguin-beak: yellow;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
  .penguin-top {
    top: 10%;
    left: 25%;
    /* Change code below this line */
    background: var(--pengiun-skin, black);
    /* Change code above this line */
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    /* Change code below this line */
    background: var(--pengiun-skin, black);
    /* Change code above this line */
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
```

-----



## 41. Améliorer la compatibilité avec les solutions de secours du navigateur

[Learn Basic CSS: Improve Compatibility with Browser Fallbacks | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/improve-compatibility-with-browser-fallbacks)

Lorsque vous travaillez avec CSS, vous rencontrerez probablement des  problèmes de compatibilité du navigateur à un moment donné. C'est  pourquoi il est important de fournir des solutions de secours au  navigateur pour éviter les problèmes potentiels.

Lorsque votre  navigateur analyse le CSS d'une page Web, il ignore toutes les  propriétés qu'il ne reconnaît pas ou ne prend pas en charge. Par  exemple, si vous utilisez une variable CSS pour attribuer une couleur  d'arrière-plan à un site, Internet Explorer ignorera la couleur  d'arrière-plan car il ne prend pas en charge les variables CSS. Dans ce  cas, le navigateur utilisera la valeur qu'il a pour cette propriété.  S'il ne trouve aucun autre jeu de valeurs pour cette propriété, il  reviendra à la valeur par défaut, qui n'est généralement pas idéale.

Cela signifie que si vous souhaitez fournir une solution de secours pour le  navigateur, c'est aussi simple que de fournir une autre valeur plus  largement prise en charge immédiatement avant votre déclaration. De  cette façon, un navigateur plus ancien aura quelque chose sur quoi se  rabattre, tandis qu'un navigateur plus récent interprétera simplement  toute déclaration venant plus tard dans la cascade.

-----

Il semble  qu'une variable est utilisée pour définir la couleur d'arrière-plan de  la classe `.red-box`. Améliorons la compatibilité de notre navigateur en  ajoutant une autre déclaration `background` juste avant la déclaration existante et définissons sa valeur sur rouge.

> Votre règle `.red-box`  doit inclure une solution de secours avec `background` défini sur  rouge juste avant la déclaration `background` existante.

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width: 200px;
  }
</style>
<div class="red-box"></div>
```

-----



## 42. Hériter des variables CSS

[Learn Basic CSS: Inherit CSS Variables | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/inherit-css-variables)

Lorsque vous créez une variable, vous pouvez l'utiliser à l'intérieur du sélecteur dans lequel vous la créez. Il est également disponible dans  tous les descendants de ce sélecteur. Cela se produit parce que les  variables CSS sont héritées, tout comme les propriétés ordinaires.

Pour utiliser l'héritage, les variables CSS sont souvent définies dans l'élément *:root*.

`:root` est un sélecteur de pseudo-classe qui correspond à l'élément  racine du document, généralement l'élément `html`. En créant vos variables dans `:root`, elles seront disponibles globalement et accessibles à  partir de n'importe quel autre sélecteur de la feuille de style.

-----

Définissez une variable nommée `--penguin-belly` dans le sélecteur `:root` et  donnez-lui la valeur `pink`. Vous pouvez alors voir que la variable est  héritée et que tous les éléments enfants qui l'utilisent ont un  arrière-plan rose.

> La variable `--penguin-belly` doit être déclarée dans `:root` et affectée de la valeur `pink`.

```html
<style>
  :root {
    /* Only change code below this line */
    --penguin-belly: pink;
    /* Only change code above this line */
  }
  body {
    background: var(--penguin-belly, #c6faf1);
  }
  .penguin {
    --penguin-skin: gray;
    --penguin-beak: orange;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }
  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }
  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }
  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }
  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }
  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }
  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }
  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

-----



## 43. Changer une variable pour une zone spécifique

[Learn Basic CSS: Change a variable for a specific area | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/change-a-variable-for-a-specific-area)

Lorsque vous créez vos variables dans `:root`, elles définiront la valeur de cette variable pour toute la page.
Vous pouvez ensuite écraser ces variables en les redéfinissant dans un élément spécifique.

-----

Changez la valeur de `--penguin-belly` en `white` dans la classe `penguin`.

> La classe `penguin` doit réaffecter la variable `--penguin-belly` en `white`.

```html
<style>
  :root {
    --penguin-skin: gray;
    --penguin-belly: pink;
    --penguin-beak: orange;
  }
  body {
    background: var(--penguin-belly, #c6faf1);
  }
  .penguin {
    /* Only change code below this line */
	--penguin-belly: white;
    /* Only change code above this line */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, pink);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, pink);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, pink);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }
  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }
  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }
  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }
  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }
  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }
  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }
  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

-----



## 44. Utiliser une requête multimédia pour modifier une variable

[Learn Basic CSS: Use a media query to change a variable | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-a-media-query-to-change-a-variable)

Les variables CSS peuvent simplifier la façon dont vous utilisez les requêtes multimédias.
Par exemple, lorsque votre écran est plus petit ou plus grand que le point  d'arrêt de votre requête multimédia, vous pouvez modifier la valeur  d'une variable et elle appliquera son style partout où elle est  utilisée.

-----

Dans le sélecteur `:root` de la `media query`,  modifiez-le pour que `--penguin-size` soit redéfini et donne une valeur de `200px`. En outre, redéfinissez `--penguin-skin` et donnez-lui une valeur `black`. Redimensionnez ensuite l'aperçu pour voir ce changement en  action.

> `:root` doit réaffecter la variable `--penguin-size` à `200px`.
> `:root` doit réaffecter la variable `--penguin-skin` en `black`.

```html
<style>
  :root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
  }
  @media (max-width: 350px) {
    :root {
      /* Only change code below this line */
      --penguin-size: 200px;
      --penguin-skin: black;
      /* Only change code above this line */
    }
  }
  .penguin {
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: var(--penguin-size, 300px);
    height: var(--penguin-size, 300px);
  }
  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }
  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
  .right-hand {
    top: 5%;
    left: 25%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(130deg);
    z-index: -1;
    animation-duration: 3s;
    animation-name: wave;
    animation-iteration-count: infinite;
    transform-origin:0% 0%;
    animation-timing-function: linear;
  }
  @keyframes wave {
      10% {
        transform: rotate(110deg);
      }
      20% {
        transform: rotate(130deg);
      }
      30% {
        transform: rotate(110deg);
      }
      40% {
        transform: rotate(130deg);
      }
    }
  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }
  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }
  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }
  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .sparkle {
    top: 25%;
    left:-23%;
    background: white;
    width: 150%;
    height: 100%;
    border-radius: 50%;
  }
  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }
  body {
    background:#c6faf1;
  }
  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

