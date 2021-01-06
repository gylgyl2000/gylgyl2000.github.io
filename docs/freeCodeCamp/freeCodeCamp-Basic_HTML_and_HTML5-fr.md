---
id: freeCodeCamp-Basic_HTML_and_HTML5-fr
title: HTML et HTML5 de base
---



## Introduction au HTML et au HTML5 de base

[Basic HTML and HTML5 | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/)

HTML, ou HyperText Markup Language, est un langage de balisage utilisé  pour décrire la structure d'une page Web. Il utilise une syntaxe ou une  notation spéciale pour organiser et donner des informations sur la page  au navigateur. Les éléments ont généralement des balises d'ouverture et  de fermeture qui entourent et donnent un sens au contenu. Par exemple,  il existe différentes options de balises à placer autour du texte pour  indiquer s'il s'agit d'un en-tête, d'un paragraphe ou d'une liste.
Par exemple :

```html
<h1>Top level heading: Maybe a page title</h1>

<p>A paragraph of text. Some information we would like to communicate to the viewer. This can be as long or short as we would like.</p>

<ol>
  <li>Number one on the list</li>
  <li>Number two</li>
  <li>A third item</li>
</ol>
```

Devient :

> # Top level heading: Maybe a page title
>
> A paragraph of text. Some information we would like to communicate to the user. This can be as long or short as we would like.
>
> 1. Number one on the list
> 2. Number two
> 3. A third item

------

La partie HyperText du HTML provient des débuts du Web et de son cas d'utilisation d'origine. Les pages contenaient généralement des  documents statiques contenant des références à d'autres documents. Ces  références contenaient des liens hypertextes utilisés par le navigateur  pour naviguer vers le document de référence afin que l'utilisateur  puisse lire le document de référence sans avoir à le rechercher  manuellement.

Au fur et à mesure que les pages Web et les  applications Web deviennent de plus en plus complexes, le consortium W3  met à jour la spécification HTML pour garantir qu'une page Web peut être affichée de manière fiable sur n'importe quel navigateur. La dernière  version de HTML est HTML5.

Cette section présente comment utiliser les éléments HTML pour donner une structure et une signification à votre contenu Web.

-----



## 1. Dites "Hello !" aux éléments HTML

[Learn Basic HTML and HTML5: Say Hello to HTML Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements)

Bienvenue aux défis de codage HTML de freeCodeCamp. Ceux-ci vous guideront tout au long du développement Web, étape par étape.
Tout d'abord, vous allez commencer par créer une page Web simple en HTML.  Vous pouvez modifier le code dans votre éditeur de code, qui est intégré à cette page Web.
Voyez-vous le code dans votre éditeur de code qui dit `<h1>Hello</h1>` ? C'est un élément HTML.
La plupart des éléments HTML ont une balise d'ouverture et une balise de fermeture.
Les balises d'ouverture ressemblent à ceci :

`<h1>`

Les balises de fermeture ressemblent à ceci :

`</h1>`

La seule différence entre les balises d'ouverture et de fermeture est la  barre oblique après le crochet ouvrant d'une balise de fermeture.

-----

Pour réussir le test de ce défi, changez le texte de votre élément `h1` pour dire "Hello World".

> Votre élément `h1` doit avoir le texte "Hello World".

```html
<h1>Hello</h1>
```

```html
<h1>Hello World</h1>
```

> # Hello World

-----



## 2. Titre avec l'élément `h2`

[Learn Basic HTML and HTML5: Headline with the h2 Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/headline-with-the-h2-element)

Au cours des prochaines leçons, nous créerons une application Web de photo de chat HTML5 pièce par pièce.
L'élément `h2` que vous ajouterez à cette étape ajoutera un en-tête de niveau deux à la page Web.
Cet élément informe le navigateur de la structure de votre site Web. Les éléments `h1` sont souvent utilisés pour les titres principaux, tandis que les éléments `h2` sont généralement utilisés pour les sous-titres. Il  existe également des éléments `h3`, `h4`, `h5` et `h6` pour indiquer différents  niveaux de sous-titres.

-----

Ajoutez une balise `h2` qui dit "CatPhotoApp" pour créer un deuxième élément HTML sous votre élément `h1` "Hello World".

> Vous devez créer un élément `h2`.
> Votre élément `h2` doit avoir une balise de fermeture.
> Votre élément `h2` doit avoir le texte "CatPhotoApp".
> Votre élément `h1` doit avoir le texte "Hello World".

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

> # Hello World
>
> ## CatPhotoApp

-----



## 3. Informer avec l'élément de paragraphe

[Learn Basic HTML and HTML5: Inform with the Paragraph Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element)

Les éléments `p` sont l'élément préféré pour le texte de paragraphe sur les sites Web. `p` est l'abréviation de "paragraphe".
Vous pouvez créer un élément de paragraphe comme celui-ci :

`<p>I'm a p tag!</p>`

-----

Créez un élément `p` sous votre élément `h2` et donnez-lui le texte "Hello Paragraph".

**Remarque :** Par convention, toutes les balises HTML sont écrites en minuscules, par exemple `<p></p>` et non `<P></P>`.

> Votre code doit avoir un élément `p` valide.
> Votre élément `p` doit avoir le texte "Hello Paragraph".
> Votre élément `p` doit avoir une balise de fermeture.

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```

> # Hello World
>
> ## CatPhotoApp
>
> Hello Paragraph

-----



## 4. Remplissez le vide avec du texte d'espace réservé

[Learn Basic HTML and HTML5: Fill in the Blank with Placeholder Text | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/fill-in-the-blank-with-placeholder-text)

Les développeurs Web utilisent traditionnellement le *texte lorem ipsum*  comme texte d'espace réservé. Le texte du lorem ipsum est gratté au  hasard par un célèbre passage de la Rome antique.
Le texte Lorem  ipsum a été utilisé comme texte d'espace réservé par les compositeurs depuis le 16<sup>ème</sup> siècle, et cette tradition se poursuit sur le Web.
Eh bien, 5 siècles, c'est assez long. Puisque nous construisons une CatPhotoApp, utilisons quelque chose qui s'appelle "kitty ipsum text".

-----

Remplacez le texte à l'intérieur de votre élément `p` par les premiers mots de ce "kitty ipsum text" : `Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.`

> Votre élément `p` doit contenir les premiers mots de `kitty ipsum text` fourni.

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

> # Hello World
>
> ## CatPhotoApp
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.

-----



## 5. Supprimer le commentaire HTML

[Learn Basic HTML and HTML5: Uncomment HTML | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/uncomment-html)

Les commentaires sont un moyen de laisser des commentaires pour d'autres développeurs dans votre code sans affecter la sortie résultante qui est affichée à l'utilisateur final.
Les commentaires sont également un moyen pratique de rendre le code inactif sans avoir à le supprimer entièrement.
Les commentaires en HTML commencent par `<!--` et se terminent par `-->`.

-----

Décommentez vos éléments `h1`, `h2` et `p`.

> Votre élément `h1` doit être visible sur la page en le décommentant.
> Votre élément `h2` doit être visible sur la page en le décommentant.
> Votre élément `p` doit être visible sur la page en le décommentant.
> Aucune balise de commentaire de fin ne doit être visible sur la page (c'est-à-dire `-->`).

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

-----



## 6. Commenter HTML

[Learn Basic HTML and HTML5: Comment out HTML | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/comment-out-html)

N'oubliez pas que pour commencer un commentaire, vous devez utiliser `<!--` et pour terminer un commentaire, vous devez utiliser `-->`.
Ici, vous devrez terminer le commentaire avant que votre élément `h2` ne commence.

-----

Commentez votre élément `h1` et votre élément `p,` mais pas votre élément `h2`.

> Votre élément `h1` doit être commenté afin qu'il ne soit pas visible sur la page.
> Votre élément `h2` ne doit pas être commenté pour qu'il soit visible sur la page.
> Votre élément `p` doit être mis en commentaire afin qu'il ne soit pas visible sur la page.
> Chacun de vos commentaires doit être fermé par `-->`.
> Vous ne devez pas changer l'ordre de `h1`, `h2` ou `p` dans le code.

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

```html
<!--
<h1>Hello World</h1>
-->
<h2>CatPhotoApp</h2>
<!--
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

> ## CatPhotoApp

-----



## 7. Supprimer les éléments HTML

[Learn Basic HTML and HTML5: Delete HTML Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/delete-html-elements)

Notre téléphone n'a pas beaucoup d'espace vertical.
Supprimons les éléments inutiles afin que nous puissions commencer à créer notre CatPhotoApp.

-----

Supprimez votre élément `h1` afin que nous puissions simplifier notre vue.

> Votre élément `h1` doit être supprimé.
> Votre élément `h2` doit être sur la page.
> Votre élément `p` doit être sur la page.

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

> ## CatPhotoApp
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.

-----



## 8. Introduction aux éléments HTML5

[Learn Basic HTML and HTML5: Introduction to HTML5 Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/introduction-to-html5-elements)

HTML5 introduit des balises HTML plus descriptives. Ceux-ci incluent `main`, `header`, `footer`, `nav`, `video`, `article`, `section` et autres.
Ces balises donnent une structure descriptive à votre  HTML, facilitent la lecture de votre HTML et aident à l'optimisation des moteurs de recherche (SEO) et à l'accessibilité. La balise "principale" (`main`) HTML5 aide les moteurs de recherche et les autres développeurs à  trouver le contenu principal de votre page.
Exemple d'utilisation, un élément `main` avec deux éléments enfants imbriqués à l'intérieur :

```html
<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

**Remarque :** la plupart des nouvelles balises HTML5 et leurs avantages sont traités dans la section "Accessibilité appliquée".

-----

Créez un deuxième élément `p` après l'élément `p` existant avec le texte kitty ipsum suivant : `Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`
Ensuite, créez un élément `main` et imbriquez les deux éléments `p` à l'intérieur de l'élément `main`.

> Vous devriez avoir 2 éléments `p` avec du texte Kitty Ipsum.
> Chacun de vos éléments `p` doit avoir une balise de fermeture.
> Votre élément `p` doit contenir les premiers mots du texte supplémentaire kitty ipsum fourni.
> Votre code doit avoir un élément `main`.
> L'élément `main` doit avoir deux éléments de paragraphe comme enfants.
> La balise `main` d'ouverture doit précéder la balise du premier paragraphe.
> La balise `main` de fermeture doit venir après la deuxième balise de paragraphe de fermeture.

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

```html
<h2>CatPhotoApp</h2>
<main>
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

> ## CatPhotoApp
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed   everywhere rip the couch sleep in the sink fluffy fur catnip scratched.

-----



## 9. Ajouter des images à votre site Web

[Learn Basic HTML and HTML5: Add Images to Your Website | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-images-to-your-website)

Vous pouvez ajouter des images à votre site Web à l'aide de l'élément `img` et pointer vers l'URL d'une image spécifique à l'aide de l'attribut `src`.
Un exemple de ceci serait :

`<img src="https://www.your-image-source.com/your-image.jpg">`

Notez que les éléments `img` se ferment automatiquement.
Tous les éléments `img` doivent avoir un attribut `alt`. Le texte à l'intérieur d'un attribut `alt` est utilisé par les lecteurs d'écran pour améliorer l'accessibilité et s'affiche si l'image ne se charge pas.

**Remarque :** si l'image est purement décorative, il est recommandé d'utiliser un attribut `alt` vide.

Dans l'idéal, l'attribut `alt` ne doit pas contenir de caractères spéciaux sauf si nécessaire.
Ajoutons un attribut `alt` à notre exemple `img` ci-dessus :

`<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up.">`

-----

Essayons d'ajouter une image à notre site Web :
Dans l'élément principal existant, insérez un élément `img` avant les éléments `p` existants.
Maintenant, définissez l'attribut `src` pour qu'il pointe vers cette URL :

`https://bit.ly/fcc-relaxing-cat`

Enfin, n'oubliez pas de donner à votre élément `img` un attribut `alt` avec le texte applicable.

> Votre page doit avoir un élément d'image.
> Votre image doit avoir un attribut `src` qui pointe vers l'image du chaton.
> L'attribut `alt` de votre élément d'image ne doit pas être vide.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

```html
<h2>CatPhotoApp</h2>
<main>
<img src="https://bit.ly/fcc-relaxing-cat" alt="Relaxing cat">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

> ## CatPhotoApp
>
> ![Relaxing cat](https://bit.ly/fcc-relaxing-cat)
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.

-----



## 10. Lien vers des pages externes avec des éléments d'ancrage

[Learn Basic HTML and HTML5: Link to External Pages with Anchor Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-external-pages-with-anchor-elements)

Vous pouvez utiliser des éléments `a` (*anchor* - ancrage) pour créer un lien vers du contenu en dehors de votre page Web.
Les éléments `a` ont besoin d'une adresse Web de destination appelée attribut `href`. Ils ont également besoin d'un texte d'ancrage. Voici un exemple :

`<a href="https://freecodecamp.org">this links to freecodecamp.org</a>`

Ensuite, votre navigateur affichera le texte **"this links to freecodecamp.org"** comme lien sur lequel vous pouvez cliquer. Et ce lien vous mènera à  l'adresse Web https://www.freecodecamp.org.

-----

Créez un élément `a` qui renvoie à `https://freecatphotoapp.com` et a "cat photos" comme texte d'ancrage.

> Votre élément `a` doit avoir le texte d'ancrage "cat photos".
> Vous avez besoin d'un élément `a` qui renvoie à `https://freecatphotoapp.com`
> Votre élément `a` doit avoir une balise de fermeture.

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="https://freecatphotoapp.com">cat photos</a>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

> ## CatPhotoApp
>
> [cat photos](https://freecatphotoapp.com)![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.

-----



## 11. Lien vers des sections internes d'une page avec des éléments d'ancrage

[Learn Basic HTML and HTML5: Link to Internal Sections of a Page with Anchor Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-internal-sections-of-a-page-with-anchor-elements)

Les éléments `a` (*anchor* - ancre) peuvent également être utilisés pour créer des  liens internes pour accéder à différentes sections d'une page Web.
Pour créer un lien interne, vous affectez l'attribut `href` d'un lien à un symbole de hachage `#` plus la valeur de l'attribut `id` de l'élément vers  lequel vous souhaitez créer un lien en interne, généralement plus bas dans la page. Vous devez ensuite ajouter le même attribut `id` à l'élément auquel vous créez un lien. Un `id` est un attribut qui décrit de manière unique un élément.
Vous trouverez ci-dessous un exemple de lien d'ancrage interne et de son élément cible :

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

Lorsque les utilisateurs cliquent sur le lien Contacts, ils sont  redirigés vers la section de la page Web avec l'élément d'en-tête  **Contacts**.

-----

Changez votre lien externe en lien interne en changeant l'attribut `href` en "#footer" et le texte de "cat photos" en "Jump to Bottom".
Supprimez l'attribut `target="_blank"` de la balise  d'ancrage car cela entraîne l'ouverture du document lié dans un nouvel onglet de fenêtre.
Ajoutez ensuite un attribut `id` avec une valeur de "footer" à l'élément `<footer>` en bas de la page.

> Il ne devrait y avoir qu'une seule balise d'ancrage sur votre page.
> Il ne devrait y avoir qu'une seule balise `footer` sur votre page.
> La balise `a` doit avoir un attribut `href` défini sur "#footer".
> La balise `a` ne doit pas avoir d'attribut `target`
> Le texte `a` doit être "Jump to Bottom".
> La balise `footer` doit avoir un attribut `id` défini sur "footer".

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>
</main>
<footer>Copyright Cat Photo App</footer>
```

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="#footer">Jump to Bottom</a>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>
</main>
<footer id="footer">Copyright Cat Photo App</footer>
```

> ## CatPhotoApp
>
> [Jump to Bottom](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-internal-sections-of-a-page-with-anchor-elements#footer)![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched  sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur  catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed  everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.  Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching  attack your ankles chase the red dot, hairball run catnip eat the grass  sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.
>
> Meowwww loved it, hated it, loved it, hated it yet spill litter  box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy  mouse squeak roll over. With tail in the air lounge in doorway. Man  running from cops stops to pet cats, goes to jail.
>
> Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red  dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no  reason. Meow to be let out play time intently sniff hand run outside as  soon as door open yet destroy couch.
>
> Copyright Cat Photo App

-----



## 12. Imbriquer un élément d'ancrage dans un paragraphe

[Learn Basic HTML and HTML5: Nest an Anchor Element within a Paragraph | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/nest-an-anchor-element-within-a-paragraph)

Vous pouvez imbriquer des liens dans d'autres éléments de texte.

```html
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>
```

Décomposons l'exemple : le texte normal est enveloppé dans l'élément `p` :
`<p> Here's a ... for you to follow. </p>`.
Vient ensuite l'élément d'ancrage `<a>` (qui nécessite une balise de fermeture `</a>`):
`<a> ... </a>`.
`target` est un attribut de balise d'ancrage qui spécifie où  ouvrir le lien et la valeur `"_blank"` spécifie d'ouvrir le lien dans un  nouvel onglet `href` est un attribut de balise d'ancrage qui contient  l'adresse URL du lien :
`<a href="http://freecodecamp.org"> ... </a>`.
Le  texte, **"link to freecodecamp.org"**, dans un élément `a` appelé texte d'ancrage, affichera un lien sur lequel cliquer :
`<a href=" ... ">link to freecodecamp.org</a>`.
La sortie finale de l'exemple ressemblera à ceci :
Voici [a link to freecodecamp.org](http://freecodecamp.org) que vous pouvez suivre.

-----

Maintenant, imbriquez l'élément `a` existant dans un nouvel élément `p` (juste après l'élément `main` existant). Le nouveau paragraphe doit contenir un  texte indiquant "View more cat photos", où "cat photos" est un lien et le reste du texte est du texte brut.

> Vous devriez avoir un élément `a` qui renvoie à "https://freecatphotoapp.com".
> Votre élément `a` doit avoir le texte d'ancrage "cat photos"
> Vous devez créer un nouvel élément `p` autour de votre élément `a`. Il doit y  avoir au moins 3 balises `p` au total dans votre code HTML.
> Votre élément `a` doit être imbriqué dans votre nouvel élément `p`.
> Votre élément `p` doit avoir le texte "View more " (avec un espace après).
> Votre élément `a` ne doit pas contenir le texte "View more".
> Chacun de vos éléments `p` doit avoir une balise de fermeture.
> Chacun de vos éléments `a` doit avoir une balise de fermeture.

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

```html
<h2>CatPhotoApp</h2>
<main>
  <p>View more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a></p>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

> ## CatPhotoApp
>
> View more [cat photos](https://freecatphotoapp.com)
>
> ![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.

-----



## 13. Créer des liens morts à l'aide du symbole de hachage

[Learn Basic HTML and HTML5: Make Dead Links Using the Hash Symbol | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/make-dead-links-using-the-hash-symbol)

Parfois, vous souhaitez ajouter des éléments `a` à votre site Web avant de savoir où ils seront liés.
C'est également pratique lorsque vous modifiez le comportement d'un lien à  l'aide de `JavaScript`, ce que nous en apprendrons plus tard.

-----

La  valeur actuelle de l'attribut `href` est un lien qui pointe vers  "https://freecatphotoapp.com". Remplacez la valeur d'attribut `href` par  un `#`, également appelé symbole de hachage, pour créer un lien mort.
Par exemple : `href="#"`

Votre élément `a` doit être un lien mort avec la valeur de l'attribut `href` définie sur "#"`.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>.</p>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

> ## CatPhotoApp
>
> Click here to view more [cat photos](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/make-dead-links-using-the-hash-symbol#).
>
> ![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.

-----



## 14. Transformez une image en lien

[Learn Basic HTML and HTML5: Turn an Image into a Link | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/turn-an-image-into-a-link)

Vous pouvez transformer des éléments en liens en les imbriquant dans un élément `a`.
Imbriquez votre image dans un élément. Voici un exemple :

`<a href="#"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera."></a>`

N'oubliez pas d'utiliser `#` comme propriété `href` de votre élément afin de le transformer en lien mort.

-----

Placez l'élément d'image existant dans un élément `a` (*anchor* - d'ancrage).
Une fois que vous avez fait cela, survolez votre image avec votre curseur. Le pointeur normal de votre curseur doit devenir le pointeur de clic sur le lien. La photo est maintenant un lien.

> L'élément `img` existant doit être imbriqué dans un élément `a`.
> Votre élément `a` doit être un lien mort avec un attribut `href` défini sur `#`.
> Chacun de vos éléments `a` doit avoir une balise de fermeture.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

> ## CatPhotoApp
>
> Click here to view more [cat photos](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/turn-an-image-into-a-link#).
>
> [![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/turn-an-image-into-a-link#)
>
> Kitty ipsum dolor sit amet, shed everywhere shed everywhere  stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
>
> Purr jump eat the grass rip the couch scratched sunbathe, shed  everywhere rip the couch sleep in the sink fluffy fur catnip scratched.

-----



## 15. Créer une liste non ordonnée à puces

[Learn Basic HTML and HTML5: Create a Bulleted Unordered List | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-bulleted-unordered-list)

HTML a un élément spécial pour créer des listes non ordonnées ou des listes de style à puces.
Les listes non ordonnées commencent par un élément `<ul>` d'ouverture, suivi  d'un nombre quelconque d'éléments `<li>`. Enfin, les listes non ordonnées se ferment avec un `</ul>`.
Par exemple :

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

créerait une liste à puces de style "milk" et "cheese".

-----

Supprimez les deux derniers éléments `p` et créez une liste non ordonnée de trois choses que les chats adorent au bas de la page.

> Créez un élément `ul`.
> Vous devriez avoir trois éléments `li` dans votre élément `ul`.
> Votre élément `ul` doit avoir une balise de fermeture.
> Vos éléments `li` doivent avoir des balises de fermeture.
> Vos éléments `li` ne doivent pas contenir de chaîne vide ou seulement un espace blanc.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <ul>
    <li>Sleep</li>
    <li>Hunt</li>
    <li>Claw and scratch</li>
  </ul>
</main>
```

> ## CatPhotoApp
>
> Click here to view more [cat photos](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-bulleted-unordered-list#).
>
> [![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-bulleted-unordered-list#)
>
> - Sleep
> - Hunt
> - Claw and scratch

-----



## 16. Créer une liste ordonnée

[Learn Basic HTML and HTML5: Create an Ordered List | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-an-ordered-list)

HTML a un autre élément spécial pour créer des listes ordonnées ou des listes numérotées.
Les listes ordonnées commencent par un élément `<ol>` ouvrant, suivi d'un  nombre quelconque d'éléments `<li>`. Enfin, les listes ordonnées sont  fermées avec la balise `</ol>`.
Par exemple :

```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

créerait une liste numérotée de "Garfield" et "Sylvester".

-----

Créez une liste ordonnée des 3 choses que les chats détestent le plus.

> Vous devriez avoir une liste ordonnée pour "Top 3 things cats hate:"
> Vous devriez avoir une liste non ordonnée pour "Things cats love:"
> Vous ne devriez avoir qu'un seul élément `ul`.
> Vous ne devriez avoir qu'un seul élément `ol`.
> Vous devriez avoir trois éléments `li` dans votre élément `ul`.
> Vous devriez avoir trois éléments `li` dans votre élément `ol`.
> Votre élément `ul` doit avoir une balise de fermeture.
> Votre élément `ol` doit avoir une balise de fermeture.
> Votre élément `li` doit avoir une balise de fermeture.
> Les éléments `li` de votre liste non ordonnée ne doivent pas être vides.
> Les éléments `li` de votre liste ordonnée ne doivent pas être vides.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
</main>
```

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>Car rides</li>
    <li>Baths</li>
    <li>Tummy rubs</li>
  </ol>
</main>
```

> ## CatPhotoApp
>
> Click here to view more [cat photos](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-an-ordered-list#).
>
> [![A cute orange cat lying on its back.](https://bit.ly/fcc-relaxing-cat)](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-an-ordered-list#)
>
> Things cats love:
>
> - cat nip
> - laser pointers
> - lasagna
>
> Top 3 things cats hate:
>
> 1. Car rides
> 2. Baths
> 3. Tummy rubs

-----



## 17. Créer un champ de texte

[Learn Basic HTML and HTML5: Create a Text Field | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-text-field)

Créons maintenant un formulaire Web.
Les éléments `input` sont un moyen pratique d'obtenir des informations de votre utilisateur.
Vous pouvez créer une entrée de texte comme celle-ci :

`<input type="text">`

Notez que les éléments d'entrée se ferment automatiquement.

-----

Créez un élément `input` de type `text` sous vos listes.

> Votre application doit avoir un élément `input` de type `text`.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
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
<input type="text">
</main>
```

-----



## 18. Ajouter un texte d'espace réservé à un champ de texte

[Learn Basic HTML and HTML5: Add Placeholder Text to a Text Field | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-placeholder-text-to-a-text-field)

Le texte d'espace réservé est ce qui est affiché dans votre élément `input` avant que votre utilisateur n'ait entré quoi que ce soit.
Vous pouvez créer un texte d'espace réservé comme ceci :

`<input type="text" placeholder="this is placeholder text">`

**Remarque :** n'oubliez pas que les éléments d'entrée se ferment automatiquement.

-----

Définissez la valeur `placeholder` de votre texte `input` sur "cat photo URL".

> Vous devez ajouter un attribut `placeholder` à l'élément `input` de texte existant.
> Vous devez définir la valeur de votre attribut `placeholder` sur "cat photo URL".
> L'élément `input` terminé ne doit pas avoir de balise de fermeture.
> L'élément `input` terminé doit avoir une syntaxe valide.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
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
  <input type="text" placeholder="cat photo URL">
</main>
```

-----



## 19. Créer un élément de formulaire

[Learn Basic HTML and HTML5: Create a Form Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-form-element)

Vous pouvez créer des formulaires Web qui soumettent réellement des données à un serveur en utilisant uniquement du HTML pur. Vous pouvez le faire en spécifiant une action sur votre élément `form`.
Par exemple :

`<form action="/url-where-you-want-to-submit-form-data"></form>`

-----

Imbriquez votre champ de texte dans un élément `form` et ajoutez l'attribut `action="https://freecatphotoapp.com/submit-cat-photo"` à l'élément de formulaire.

> Votre élément `input` doit être imbriqué dans un élément `form`.
> Votre `form` doit avoir un attribut `action` défini sur `https://freecatphotoapp.com/submit-cat-photo`.
> Votre élément `form` doit avoir des balises d'ouverture et de fermeture bien formées.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
  <input type="text" placeholder="cat photo URL">
  </form>
</main>
```

-----



## 20. Ajouter un bouton d'envoi à un formulaire

[Learn Basic HTML and HTML5: Add a Submit Button to a Form | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-a-submit-button-to-a-form)

Ajoutons un bouton `submit` à votre formulaire. Cliquez sur ce bouton  pour envoyer les données de votre formulaire à l'URL que vous avez spécifiée avec l'attribut `action` de votre formulaire.
Voici un exemple de bouton d'envoi :

`<button type="submit">this button submits the form</button>`

------

Ajoutez un bouton comme dernier élément de votre élément `form` avec un type `submit` et "Submit" comme texte.

> Votre formulaire doit contenir un bouton.
> Votre bouton d'envoi doit avoir l'attribut `type` défini à `submit`.
> Votre bouton d'envoi ne doit contenir que le texte "Submit".
> Votre élément `button` doit avoir une balise de fermeture.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```

-----



## 21. Utiliser HTML5 pour requérir un champ

[Learn Basic HTML and HTML5: Use HTML5 to Require a Field | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/use-html5-to-require-a-field)

Vous pouvez requérir des champs de formulaire spécifiques afin que votre utilisateur ne soit pas en mesure de soumettre votre formulaire tant qu'il ne les aura pas remplis.
Par exemple, si vous souhaitez rendre un champ de saisie de texte obligatoire, vous pouvez simplement  ajouter l'attribut `required` dans votre élément `input`, comme ceci : `<input type="text" required>`.

-----

Faites de votre texte `input` un champ `required`, afin que votre utilisateur ne puisse pas soumettre le  formulaire sans remplir ce champ.
Essayez ensuite de soumettre le formulaire sans entrer de texte. Voyez comment votre formulaire HTML5  vous informe que le champ est obligatoire ?

> Votre élément d'entrée de texte doit avoir l'attribut `required`.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <input type="text" required placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```

------



## 22. Créer un ensemble de boutons radio

[Learn Basic HTML and HTML5: Create a Set of Radio Buttons | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-set-of-radio-buttons)

Vous pouvez utiliser des boutons radio pour les questions pour  lesquelles vous souhaitez que l'utilisateur ne vous donne qu'une seule  réponse parmi plusieurs options.
Les boutons radio sont de type `input`.
Chacun de vos boutons radio peut être imbriqué dans son propre élément `label`. En enveloppant un élément `input` à l'intérieur d'un élément `label`, il associera automatiquement l'entrée du bouton radio à l'élément d'étiquette qui l'entoure.
Tous les boutons radio associés doivent avoir le même attribut `name` pour créer un  groupe de boutons radio. En créant un groupe de radio, la sélection d'un seul bouton radio désélectionnera automatiquement les autres boutons du même groupe, garantissant qu'une seule réponse est fournie par l'utilisateur.
Voici un exemple de bouton radio :

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

Il est recommandé de définir un attribut `for` sur l'élément `label`, avec une valeur correspondant à la valeur de l'attribut `id` de l'élément `input`. Cela permet aux technologies d'assistance de créer une  relation liée entre l'étiquette et l'élément `input` enfant. Par  exemple :

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

-----

Ajoutez une paire de boutons radio à votre formulaire, chacun imbriqué dans son propre élément `label`. L'un devrait avoir l'option  `indoor` et l'autre devrait avoir l'option `outdoor`. Les deux  doivent partager l'attribut `name` `indoor-outdoor` pour créer un  groupe radio.

> Votre page doit avoir deux éléments de bouton radio.
> Vos boutons radio doivent recevoir l'attribut `name` `indoor-outdoor`.
> Chacun de vos deux éléments de bouton radio doit être imbriqué dans son propre élément `label`.
> Chacun de vos éléments `label` doit avoir une balise de fermeture.
> L'un de vos boutons radio doit avoir l'étiquette `indoor`.
> L'un de vos boutons radio doit avoir l'étiquette `outdoor`.
> Chacun de vos éléments de bouton radio doit être ajouté dans la balise `form`.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

-----



## 23. Créer un ensemble de cases à cocher

[Learn Basic HTML and HTML5: Create a Set of Checkboxes | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-set-of-checkboxes)

Les formulaires utilisent généralement des cases à cocher pour les questions qui peuvent avoir plus d'une réponse.
Les cases à cocher sont de type `input`.
Chacune de vos cases à cocher peut être imbriquée dans son propre élément `label`. En enveloppant un élément `input` à l'intérieur d'un élément `label`, il associera automatiquement l'entrée de case à  cocher à l'élément d'étiquette qui l'entoure.
Toutes les entrées de case à cocher associées doivent avoir le même attribut `name`.
Il est recommandé de définir explicitement la relation entre une case à cocher `input` et son `label` correspondante en définissant l'attribut `for` sur l'élément `label` pour qu'il corresponde à l'attribut `id` de l'élément `input` associé.
Voici un exemple de case à cocher :

`<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>`

-----

Ajoutez à votre formulaire un ensemble de trois cases à cocher. Chaque case à  cocher doit être imbriquée dans son propre élément `label`. Tous les trois devraient partager l'attribut `name` `personality`.

> Votre page doit avoir trois éléments de case à cocher.
> Chacun de vos trois éléments de case à cocher doit être imbriqué dans son propre élément `label`.
> Assurez-vous que chacun de vos éléments `label` a une balise de fermeture.
> Vos cases à cocher doivent recevoir l'attribut `name` `personality`.
> Chacune de vos cases à cocher doit être ajoutée dans la balise `form`.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a> 
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

-----



## 24. Utilisez l'attribut `value` avec les boutons radio et les cases à cocher

[Learn Basic HTML and HTML5: Use the value attribute with Radio Buttons and Checkboxes | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/use-the-value-attribute-with-radio-buttons-and-checkboxes)

Lorsqu'un formulaire est soumis, les données sont envoyées au serveur et incluent des entrées pour les options sélectionnées. Les entrées de  type `radio` et `checkbox` rapportent leurs valeurs à partir de l'attribut `value`.
Par exemple :

```html
<label for="indoor"> 
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
<label for="outdoor"> 
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor 
</label>
```

Ici, vous avez deux entrées `radio`. Lorsque l'utilisateur soumet le  formulaire avec l'option `indoor` sélectionnée, les données du  formulaire comprendront la ligne : `indoor-outdoor=indoor`. Cela  provient des attributs `name` et `value` de valeur de l'entrée "indoor".
Si vous omettez l'attribut `value`, les données de formulaire soumises utilisent la valeur par défaut, qui est `on`. Dans ce scénario, si  l'utilisateur cliquait sur l'option "indoor" et soumettait le formulaire, les données du formulaire résultantes seraient `indoor-outdoor=on`, ce qui n'est pas utile. L'attribut `value` doit donc être défini sur quelque chose pour identifier l'option.

-----

Attribuez à chacune des entrées `radio` et `checkbox` l'attribut `value`. Utilisez le texte de l'étiquette d'entrée, en minuscules, comme valeur de  l'attribut.

> L'un de vos boutons radio doit avoir l'attribut `value` de `indoor`.
> L'un de vos boutons radio doit avoir l'attribut `value` de `outdoor`.
> L'une de vos cases à cocher doit avoir l'attribut `value` de `loving`.
> L'une de vos cases à cocher doit avoir l'attribut `value` de `lazy`.
> L'une de vos cases à cocher doit avoir l'attribut `value` de `energetic`.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a> 
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input value="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input value="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input value="loving" type="checkbox" name="personality"> Loving</label>
    <label><input value="lazy" type="checkbox" name="personality"> Lazy</label>
    <label><input value="energetic" type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

-----



## 25. Cochez les boutons radio et les cases à cocher par défaut

[Learn Basic HTML and HTML5: Check Radio Buttons and Checkboxes by Default | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/check-radio-buttons-and-checkboxes-by-default)

Vous pouvez définir une case à cocher ou un bouton radio à cocher par défaut à l'aide de l'attribut `checked`.
Pour ce faire, ajoutez simplement le mot «vérifié» à l'intérieur d'un élément d'entrée. Par exemple:

`<input type="radio" name="test-name" checked>`

-----

Définissez le premier de vos boutons radio et la première de vos cases à cocher tous les deux être cochés par défaut.

> Votre premier bouton radio sur votre formulaire doit être coché par défaut.
> Votre première case à cocher sur votre formulaire doit être cochée par défaut.

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

-----



## 26. Imbriquez de nombreux éléments dans un seul élément `div`

[Learn Basic HTML and HTML5: Nest Many Elements within a Single div Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/nest-many-elements-within-a-single-div-element)

L'élément `div`, également appelé élément de division, est un conteneur à usage général pour d'autres éléments.
L'élément `div` est probablement l'élément HTML le plus couramment utilisé de tous.
Comme tout autre élément non auto-fermant, vous pouvez ouvrir un élément `div` avec `<div>` et le fermer sur une autre ligne avec `</div>`.

-----

Imbriquez vos listes "Things cats love" et "Things cats hate" dans un seul élément `div`.
Astuce : essayez de placer votre balise `div` d'ouverture au-dessus de votre  élément `p` "Things cats love" et votre balise `div` de fermeture après votre balise `ol` de fermeture afin que vos deux listes soient dans une `div`.

> Vos éléments `p` doivent être imbriqués dans votre élément `div`.
> Votre élément `ul` doit être imbriqué dans votre élément `div`.
> Votre élément `ol` doit être imbriqué dans votre élément `div`.
> Votre élément `div` doit avoir une balise de fermeture.

```html
<h2>CatPhotoApp</h2>
<main>
<div>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

-----



## 27. Déclarer le Doctype d'un document HTML

[Learn Basic HTML and HTML5: Declare the Doctype of an HTML Document | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/declare-the-doctype-of-an-html-document)

Les défis jusqu'à présent ont couvert des éléments HTML spécifiques et  leurs utilisations. Cependant, il existe quelques éléments qui donnent  une structure globale à votre page et doivent être inclus dans chaque  document HTML.

En haut de votre document, vous devez indiquer au  navigateur la version HTML utilisée par votre page. Le HTML est un  langage en évolution et est mis à jour régulièrement. La plupart des  principaux navigateurs prennent en charge la dernière spécification, à  savoir HTML5. Cependant, les anciennes pages Web peuvent utiliser des  versions antérieures de la langue.

Vous indiquez ces informations au navigateur en ajoutant la balise `<!DOCTYPE ...>` sur la première ligne, où la partie `...` est la version de HTML. Pour HTML5, vous utilisez `<!DOCTYPE html>`.

Le `!` et `DOCTYPE` en majuscules est important, en  particulier pour les anciens navigateurs. Le code `html` n'est pas sensible à la casse.

Ensuite, le reste de votre code HTML doit  être enveloppé dans des balises `html`. Le `<html>` d'ouverture va directement sous la ligne `<!DOCTYPE html>`, et le `</html>` de fermeture va à la fin de  la page.

Voici un exemple de la structure de page :

```html
<!DOCTYPE html>
<html>
  <!-- Your HTML code goes here -->
</html>
```

-----

Ajoutez une balise `DOCTYPE` pour HTML5 en haut du document HTML vierge  dans l'éditeur de code. En dessous, ajoutez des balises `html` d'ouverture et de fermeture, qui entourent un élément `h1`. L'en-tête peut inclure n'importe quel texte.

> Votre code doit inclure une balise `<!DOCTYPE html>`.
> Il devrait y avoir un élément `html`.
> Les balises `html` doivent entourer un élément `h1`.

```html
<!DOCTYPE html>
<html>
  <h1>A cute orange cat lying on its back</h1>
</html>
```

-----



## 28. Définir l'en-tête et le corps d'un document HTML

[Learn Basic HTML and HTML5: Define the Head and Body of an HTML Document | freeCodeCamp.org](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/define-the-head-and-body-of-an-html-document)

Vous pouvez ajouter un autre niveau d'organisation dans votre document HTML dans les balises `html` avec les éléments `head` et `body`. Tout balisage contenant des informations sur votre page irait dans la balise `head`. Ensuite, tout balisage avec le contenu de la page (ce qui s'affiche pour un utilisateur) irait dans la balise `body`.
Les éléments de  métadonnées, tels que `link`, `meta`, `title`, et `style`, se  trouvent généralement à l'intérieur de l'élément `head`.
Voici un exemple de mise en page d'une page :

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>
```

-----

Modifiez le balisage pour qu'il y ait une `head` et un `body`. L'élément `head` ne doit inclure que le `title`, et l'élément `body` ne doit inclure que les `h1` et `p`.

> Il ne doit y avoir qu'un seul élément `head` sur la page.
> Il ne doit y avoir qu'un seul élément `body` sur la page.
> L'élément `head` doit être un enfant de l'élément `html`.
> L'élément `body` doit être un enfant de l'élément `html`.
> L'élément `head` doit s'enrouler autour de l'élément `title`.
> L'élément `body` doit s'enrouler autour des éléments `h1` et `p`.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>The best page ever</title>
  </head>
  <body>
    <h1>The best page ever</h1>
      <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  </body>
</html>
```

> # The best page ever
>
> Cat ipsum dolor sit amet, jump launch to pounce upon little yarn  mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball  run catnip eat the grass sniff. Meow i could pee on this if i had the  energy for slap owner's face at 5am until human fills food dish yet  scamper. Knock dish off table head butt cant eat out of my own dish  scratch the furniture. Make meme, make cute face. Sleep in the bathroom  sink chase laser but pee in the shoe. Paw at your fat belly licks your  face and eat grass, throw it back up kitty ipsum dolor sit amet, shed  everywhere shed everywhere stretching attack your ankles chase the red  dot, hairball run catnip eat the grass sniff.