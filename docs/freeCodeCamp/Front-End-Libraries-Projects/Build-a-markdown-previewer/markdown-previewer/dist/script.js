function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}marked.setOptions({
  renderer: new marked.Renderer(),
  baseUrl: null,
  breaks: true,
  gfm: true,
  headerIds: true,
  headerPrefix: "",
  highlight: function (code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
    return hljs.highlight(validLanguage, code).value;
  } });


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClear",









    () => {
      this.setState({
        markdown: "" });

    });this.state = { markdown: placeholder };}updateMarkdown(markdown) {this.setState({ markdown });}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "App" }, /*#__PURE__*/
      React.createElement("div", { className: "container-fluid" }, /*#__PURE__*/
      React.createElement("nav", { className: "navbar navbar-dark bg-dark" }, /*#__PURE__*/
      React.createElement("div", { class: "container-fluid" }, /*#__PURE__*/
      React.createElement("span", { class: "navbar-brand mb-0 h1" }, "\xC9DITEUR MARKDOWN"))), /*#__PURE__*/


      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("nav", { className: "navbar navbar-light", style: { backgroundColor: '#e3f2fd' } }, /*#__PURE__*/
      React.createElement("div", { class: "container-fluid" }, /*#__PURE__*/
      React.createElement("span", { class: "navbar-brand mb-0 h1" }, "MARKDOWN"), /*#__PURE__*/
      React.createElement("button", {
        className: "btn btn-outline-secondary me-2 clearButton",
        onClick: this.handleClear }, "Effacer"))), /*#__PURE__*/


      React.createElement("div", { className: "mark-input inputStyle" }, /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        className: "input inputStyle",
        value: this.state.markdown,
        onChange: e => {
          this.updateMarkdown(e.target.value);
        } }))), /*#__PURE__*/



      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("nav", { className: "navbar navbar-light", style: { backgroundColor: '#e3f2fd' } }, /*#__PURE__*/
      React.createElement("div", { class: "container-fluid" }, /*#__PURE__*/
      React.createElement("span", { class: "navbar-brand mb-0 h1" }, "APER\xC7U"))), /*#__PURE__*/


      React.createElement("div", {
        id: "preview",
        className: "outputStyle",
        dangerouslySetInnerHTML: {
          __html: marked(this.state.markdown) } }))), /*#__PURE__*/




      React.createElement("footer", { className: "navbar navbar-dark bg-dark" }, /*#__PURE__*/
      React.createElement("div", { class: "container-fluid", style: { justifyContent: 'center' } }, /*#__PURE__*/
      React.createElement("span", { class: "navbar-text" }, /*#__PURE__*/
      React.createElement("img", {
        src: 'https://gitlab.com/gylgyl2000/gylgyl2000-personal-portfolio/-/raw/master/personal-portfolio/src/components/assets/otter-solid.svg',
        alt: "otter",
        style: { width: '25px', marginRight: '12px' } }), "gylgyl2000 - Construit avec ", /*#__PURE__*/

      React.createElement("a", { href: "https://github.com/markedjs/marked" }, "Marked")))))));






  }}


const placeholder = `# Aide-mémoire Markdown
### Une référence rapide à la syntaxe Markdown.
-----

## Aperçu
Cet aide-mémoire Markdown fournit un aperçu rapide de tous les éléments de syntaxe Markdown. Il ne peut pas couvrir tous les cas de bord, donc si vous avez besoin de plus d'informations sur l'un de ces éléments, reportez-vous aux guides de référence pour [la syntaxe de base](https://www.markdownguide.org/basic-syntax) et [la syntaxe étendue](https://www.markdownguide.org/extended-syntax).

## Syntaxe de base
Ce sont les éléments décrits dans le document de conception original de John Gruber. Toutes les applications Markdown prennent en charge ces éléments.

### Titres
# H1 : Titre de niveau 1
## H2 : Titre de niveau 2
### H3 : Titre de niveau 3
#### H3 : Titre de niveau 4
##### H3 : Titre de niveau 5
###### H3 : Titre de niveau 6

### Paragraphes
Pour créer des paragraphes, utilisez une ligne vierge pour séparer une ou plusieurs lignes de texte :

J'aime vraiment utiliser Markdown.

Je pense que je vais l'utiliser pour formater tous mes documents à partir de maintenant.

### Sauts de ligne

Pour créer un saut de ligne (\`<br>\`), terminez une ligne avec deux ou plusieurs espaces, puis tapez return :

Ceci est la première ligne.
Et ceci est la deuxième ligne.

### Emphases
Vous pouvez ajouter de l'emphase en mettant le texte en gras ou en italique.

#### Gras
Pour du texte en gras, ajoutez **deux astérisques('*')** ou __traits de soulignement('_')__ avant et après un mot ou une phrase. Pour mettre en gras le milieu d'un mot pour accentuer, ajoutez deux as**téris**ques sans espaces autour des lettres.

#### Italique
Pour mettre du texte en italique, ajoutez *un astérisque('**')* ou _un trait de soulignement('__')_ avant et après un mot ou une phrase. Pour mettre en italique le milieu d'un mot pour l'emphase, ajoutez un as*téris*que sans espaces autour des lettres.

#### Gras et italique

Pour mettre en valeur le texte en gras et en italique en même temps, ajoutez ***trois astérisques*** ou ___traits de soulignement___ avant et après un mot ou une phrase. Pour mettre en gras et mettre en italique le milieu d'un mot pour mettre l'accent, ajoutez trois as***téris***ques sans espaces autour des lettres.

### Blockquote
Pour créer un blockquote, ajoutez un < devant un paragraphe.

> Dorothy la suivit à travers plusieurs des belles pièces de son château.

#### Blockquotes avec plusieurs paragraphes

Les blockquotes peuvent contenir plusieurs paragraphes. Ajoutez un < sur les lignes vides entre les paragraphe

> Dorothy la suivit à travers plusieurs des belles pièces de son château.
>
> La sorcière lui a dit de nettoyer les casseroles et les bouilloires, de balayer le sol et de garder le feu alimenté avec du bois.

### Listes
Vous pouvez organiser les éléments en listes ordonnées et non ordonnées.

####  Listes ordonnées
Pour créer une liste ordonnée, ajoutez une ligne d'éléments avec des nombres suivis de points. Les nombres ne doivent pas nécessairement être dans l’ordre numérique, mais la liste doit commencer par le numéro un.

1. Premier élément
2. Deuxième élément
3. Troisième élément
4. Quatrième élément

#### Listes non ordonnées
Pour créer une liste non ordonnée, ajoutez des tirets (-), des astérisques (*) ou des signes plus (+) devant les éléments de campagne. Mettez en retrait un ou plusieurs éléments pour créer une liste imbriquée.

- Premier élément
- Deuxième élément
- Troisième élément
	- Élément en retrait
	- Élément en retrait
- Quatrième élément

### Code
Pour désigner un mot ou une phrase sous forme de code, placez-le entre des accents inversés (\` \`).

À l'invite de commande, tapez \`nano\`.

#### Échappe de backticks

Si le mot ou la phrase que vous souhaitez désigner comme code comprend un ou plusieurs backticks, vous pouvez l'échapper en entourant le mot ou la phrase de doubles backticks (\`\`).

\`\`Utilisez \`code\` dans votre fichier Markdown.\`\`

#### Blocs de code
Pour créer des blocs de code, indentez chaque ligne du bloc d'au moins quatre espaces ou une tabulation.

\`\`\`text
	<html>
		<head>
		</head>
	</html>
\`\`\`

### Règles horizontales

Pour créer une règle horizontale, utilisez au moins trois astérisques (***), tirets (---) ou traits de soulignement (___) sur une ligne.

***
---
___

### Liens
Pour créer un lien, placez le texte du lien entre crochets (par exemple, [Duck Duck Go]), puis suivez-le immédiatement avec l'URL entre parenthèses (par exemple, (https://duckduckgo.com)).

Mon moteur de recherche préféré est [Duck Duck Go] (https://duckduckgo.com).

#### Ajout de titres
Vous pouvez éventuellement ajouter un titre pour un lien. Cela apparaîtra comme une info-bulle lorsque l'utilisateur survolera le lien. Pour ajouter un titre, placez-le entre parenthèses après l'URL.

Mon moteur de recherche préféré est [Duck Duck Go] (https://duckduckgo.com "Le meilleur moteur de recherche pour la confidentialité").

#### URL et adresses e-mail
Pour transformer rapidement une URL ou une adresse e-mail en lien, placez-la entre crochets.

<https://www.markdownguide.org>
<fake@example.com>

#### Liens de style de référence

Les liens de style de référence sont un type spécial de lien qui facilite l'affichage et la lecture des URL dans Markdown. Les liens de style de référence sont construits en deux parties : la partie que vous gardez en ligne avec votre texte et la partie que vous stockez ailleurs dans le fichier pour que le texte reste facile à lire.

> Dans un trou dans le sol vivait un hobbit. Pas un trou méchant, sale et humide, rempli des extrémités de vers et une odeur suintante, ni encore un trou sec, nu et sablonneux sans rien dedans pour s'asseoir ou pour s'asseoir manger : c'était un [hobbit-hole] [1], et cela signifie du confort.

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit modes de vie"

### Images
Pour ajouter une image, ajoutez un point d'exclamation (!), Suivi du texte alternatif entre crochets et du chemin ou de l'URL de l'élément d'image entre parenthèses. Vous pouvez éventuellement ajouter un titre après l'URL entre parenthèses.

![Philadelphia's Magic Gardens. This place was so cool!](https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Magic_Garden-Philadelphia.jpg/800px-Magic_Garden-Philadelphia.jpg "Philadelphia's Magic Gardens")

#### Lier des images
Pour ajouter un lien vers une image, placez le Markdown de l'image entre crochets, puis ajoutez le lien entre parenthèses.

[![An old rock in the desert](https://live.staticflickr.com/389/31833779864_38b5c9d52e_n.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

## Syntaxe étendue
Ces éléments étendent la syntaxe de base en ajoutant des fonctionnalités supplémentaires. Toutes les applications Markdown ne prennent pas en charge ces éléments.

###  Tableaux
Pour ajouter un tableau, utilisez au moins trois tirets (---) pour créer l’en-tête de chaque colonne et utilisez des tubes (|) pour séparer chaque colonne. Vous pouvez éventuellement ajouter des tuyaux à chaque extrémité de la table.

| Syntaxe | Description |
| ----------- | ----------- |
| En-tête | Titre |
| Paragraphe | Texte |

#### Alignement
Vous pouvez aligner le texte des colonnes vers la gauche, la droite ou le centre en ajoutant un signe deux-points (:) à gauche, à droite ou des deux côtés des tirets dans la ligne d'en-tête.

| Syntaxe | Description | Texte de test |
| : --- | : ----: | ---: |
| En-tête | Titre | Voici ceci |
| Paragraphe | Texte | Et plus encore |


### Blocs de code clôturés
La syntaxe de base Markdown vous permet de créer des blocs de code en indentant les lignes de quatre espaces ou d'une tabulation. Si vous trouvez cela gênant, essayez d'utiliser des blocs de code clôturés. En fonction de votre processeur ou éditeur Markdown, vous utiliserez trois backticks (\`\`\`') ou trois tildes (~~~) sur les lignes avant et après le bloc de code. Le meilleur ? Vous n’avez pas à mettre de ligne en retrait !

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

#### Mise en évidence de la syntaxe
De nombreux processeurs Markdown prennent en charge la coloration syntaxique des blocs de code clôturés. Cette fonctionnalité vous permet d'ajouter une coloration pour la langue dans laquelle votre code a été écrit. Pour ajouter une coloration syntaxique, spécifiez une langue à côté des backticks avant le bloc de code isolé.

\`\`\`json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

### Notes de bas de page
Les notes de bas de page vous permettent d'ajouter des notes et des références sans encombrer le corps du document. Lorsque vous créez une note de bas de page, un numéro en exposant avec un lien apparaît à l'endroit où vous avez ajouté la référence de note de bas de page. Les lecteurs peuvent cliquer sur le lien pour accéder au contenu de la note de bas de page en bas de la page.

Pour créer une référence de note de bas de page, ajoutez un signe d'insertion et un identificateur entre crochets ([^1]). Les identifiants peuvent être des nombres ou des mots, mais ils ne peuvent pas contenir d'espaces ni de tabulations. Les identifiants ne corrèlent que la référence de note de bas de page avec la note de bas de page elle-même - dans la sortie, les notes de bas de page sont numérotées séquentiellement.

Ajoutez la note de bas de page en utilisant un autre signe d'insertion et un numéro entre crochets avec deux points et du texte ([^1]: Ma note de bas de page.). Vous n'êtes pas obligé de mettre des notes de bas de page à la fin du document. Vous pouvez les placer n'importe où, sauf à l'intérieur d'autres éléments tels que des listes, des guillemets et des tableaux.

    Voici une simple note de bas de page,[^1] et en voici une plus longue.[^Bignote]

    [^1]: Ceci est la première note de bas de page.

    [^bignote]: En voici un avec plusieurs paragraphes et du code.

        Mettez en retrait les paragraphes pour les inclure dans la note de bas de page.

        \`{ my code }\`

        Ajoutez autant de paragraphes que vous le souhaitez.

### ID d'en-tête  {#ID-den-tete}
De nombreux processeurs Markdown prennent en charge les ID personnalisés pour les en-têtes - certains processeurs Markdown les ajoutent automatiquement. L'ajout d'identifiants personnalisés vous permet de créer un lien direct vers les en-têtes et de les modifier avec CSS. Pour ajouter un ID d'en-tête personnalisé, placez l'ID personnalisé entre accolades sur la même ligne que l'en-tête.

### My Great Heading {#custom-id}

Le HTML ressemble à ceci :

\`<h3 id="custom-id">Mon grand titre</h3>\`

#### Lien vers les ID de titre
Vous pouvez créer un lien vers des en-têtes avec des ID personnalisés dans le fichier en créant un lien standard avec un signe dièse (#) suivi de l'ID d'en-tête personnalisé.

[ID d'en-tête](#ID-den-tete)

### Listes de définitions
Certains processeurs Markdown vous permettent de créer des listes de définitions de termes et leurs définitions correspondantes. Pour créer une liste de définitions, tapez le terme sur la première ligne. Sur la ligne suivante, tapez deux points suivis d'un espace et de la définition.

Premier mandat
: C'est la définition du premier terme.

Deuxième mandat
: Ceci est une définition du deuxième terme.
: Ceci est une autre définition du deuxième terme.

### Barré
Vous pouvez barrer les mots en plaçant une ligne horizontale au centre de ceux-ci. Le résultat ressemble ~~à ceci~~. Cette fonction vous permet d'indiquer que certains mots sont une erreur non destinée à être incluse dans le document. Pour barrer les mots, utilisez deux symboles tilde (~~) avant et après les mots.

~~Le monde est plat.~~ Nous savons maintenant que le monde est rond.

### Listes de tâches
Les listes de tâches vous permettent de créer une liste d'éléments avec des cases à cocher. Dans les applications Markdown qui prennent en charge les listes de tâches, des cases à cocher seront affichées à côté du contenu. Pour créer une liste de tâches, ajoutez des tirets (-) et des crochets avec un espace ([]) devant les éléments de la liste des tâches. Pour sélectionner une case à cocher, ajoutez un x entre les crochets ([x]).

- [x] Rédiger le communiqué de presse
- [] Mettre à jour le site Web
- [] Contactez les médias

### Emoji
Il existe deux façons d'ajouter des emoji aux fichiers Markdown : copiez et collez l'emoji dans votre texte au format Markdown, ou saisissez des *codes abrégés emoji*.

#### Copier et coller des emoji
Dans la plupart des cas, vous pouvez simplement copier un emoji à partir d'une source comme [Emojipedia](https://emojipedia.org/) et le coller dans votre document. De nombreuses applications Markdown afficheront automatiquement l'emoji dans le texte au format Markdown. Les fichiers HTML et PDF que vous exportez depuis votre application Markdown doivent afficher les emoji.
**Conseil :** si vous utilisez un générateur de site statique, assurez-vous d'encoder les pages HTML au format UTF-8.

#### Utilisation de shortcodes Emoji
Certaines applications Markdown vous permettent d'insérer des emoji en tapant des shortcodes emoji. Ceux-ci commencent et se terminent par un deux-points et incluent le nom d'un emoji.

Parti camper ! :tent: Revenons bientôt. ⛺

C'est tellement drôle ! :joy:  😂
`;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));