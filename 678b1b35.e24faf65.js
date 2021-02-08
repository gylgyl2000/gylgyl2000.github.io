(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{126:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),i=(t(0),t(214)),o={id:"Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals-fr",title:"Conditionnelles"},l={unversionedId:"Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals-fr",id:"Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals-fr",isDocsHomePage:!1,title:"Conditionnelles",description:"Learn JavaScript: Conditionals Cheatsheet | Codecademy",source:"@site/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals-fr.md",slug:"/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals-fr",permalink:"/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals-fr",editUrl:"https://github.com/gylgyl2000/laloutre.github.io/edit/main/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals-fr.md",version:"current",sidebar:"docs",previous:{title:"Introduction - Variables",permalink:"/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-01-Introduction-_-Variables-fr"},next:{title:"Fonctions",permalink:"/docs/Codecademy/Codecademy-Cheatsheets-Learn_JavaScript-03-Functions-fr"}},c=[{value:"Contr\xf4le du flux",id:"contr\xf4le-du-flux",children:[]},{value:"Op\xe9rateur logique <code>||</code>",id:"op\xe9rateur-logique-",children:[]},{value:"Op\xe9rateur ternaire",id:"op\xe9rateur-ternaire",children:[]},{value:"D\xe9claration <code>else</code>",id:"d\xe9claration-else",children:[]},{value:"Op\xe9rateur logique <code>&amp;&amp;</code>",id:"op\xe9rateur-logique--1",children:[]},{value:"Instruction <code>switch</code>",id:"instruction-switch",children:[]},{value:"D\xe9claration <code>if</code>",id:"d\xe9claration-if",children:[]},{value:"Vrai ou faux",id:"vrai-ou-faux",children:[]},{value:"Op\xe9rateur logique <code>!</code>",id:"op\xe9rateur-logique--2",children:[]},{value:"Op\xe9rateurs de comparaison",id:"op\xe9rateurs-de-comparaison",children:[]},{value:"Clause <code>else if</code>",id:"clause-else-if",children:[]}],s={rightToc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow/cheatsheet"}),"Learn JavaScript: Conditionals Cheatsheet | Codecademy")),Object(i.mdx)("h3",{id:"contr\xf4le-du-flux"},"Contr\xf4le du flux"),Object(i.mdx)("p",null,"Le flux de contr\xf4le est l'ordre dans lequel les  instructions sont ex\xe9cut\xe9es dans un programme. Le flux de contr\xf4le par  d\xe9faut concerne les instructions \xe0 lire et \xe0 ex\xe9cuter dans l'ordre de  gauche \xe0 droite et de haut en bas dans un fichier programme."),Object(i.mdx)("p",null,"Les  structures de contr\xf4le telles que les conditions (instructions ",Object(i.mdx)("inlineCode",{parentName:"p"},"if")," et  autres) modifient le flux de contr\xf4le en ex\xe9cutant uniquement des blocs  de code si certaines conditions sont remplies. Ces structures permettent essentiellement \xe0 un programme de prendre des d\xe9cisions sur le code qui sera ex\xe9cut\xe9 pendant l'ex\xe9cution du programme."),Object(i.mdx)("h3",{id:"op\xe9rateur-logique-"},"Op\xe9rateur logique ",Object(i.mdx)("inlineCode",{parentName:"h3"},"||")),Object(i.mdx)("p",null,"L'op\xe9rateur logique OR ",Object(i.mdx)("inlineCode",{parentName:"p"},"||")," v\xe9rifie deux valeurs et renvoie un bool\xe9en. Si une ou les deux valeurs sont v\xe9ridiques, elle renvoie ",Object(i.mdx)("inlineCode",{parentName:"p"},"true"),". Si les deux valeurs  sont fausses, il renvoie ",Object(i.mdx)("inlineCode",{parentName:"p"},"false"),".\n| A     | B     | A ","|","|"," B |\n| ----- | ----- | -------- |\n| false | false | false    |\n| false | true  | true     |\n| true  | false | true     |\n| true  | true  | true     |"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"true || false;        // true\n10 > 5 || 10 > 20;    // true\nfalse || false;       // false\n10 > 100 || 10 > 20;  // false\n")),Object(i.mdx)("h3",{id:"op\xe9rateur-ternaire"},"Op\xe9rateur ternaire"),Object(i.mdx)("p",null,"L'op\xe9rateur ternaire permet une syntaxe compacte dans le cas de d\xe9cisions binaires  (choix entre deux choix). Il accepte une condition suivie d'un op\xe9rateur ",Object(i.mdx)("inlineCode",{parentName:"p"},"?"),", puis deux expressions s\xe9par\xe9es par un ",Object(i.mdx)("inlineCode",{parentName:"p"},":"),". Si la condition est  \xe9valu\xe9e comme v\xe9ridique, la premi\xe8re expression est ex\xe9cut\xe9e, sinon la  deuxi\xe8me expression est ex\xe9cut\xe9e."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let price = 10.5;\nlet day = "Monday";\n\nday === "Monday" ? price -= 1.5 : price += 1.5;\n')),Object(i.mdx)("h3",{id:"d\xe9claration-else"},"D\xe9claration ",Object(i.mdx)("inlineCode",{parentName:"h3"},"else")),Object(i.mdx)("p",null,"Un bloc ",Object(i.mdx)("inlineCode",{parentName:"p"},"else")," peut \xeatre ajout\xe9 \xe0 un bloc ",Object(i.mdx)("inlineCode",{parentName:"p"},"if")," ou \xe0 une s\xe9rie de blocs ",Object(i.mdx)("inlineCode",{parentName:"p"},"if")," - ",Object(i.mdx)("inlineCode",{parentName:"p"},"else if"),". Le bloc ",Object(i.mdx)("inlineCode",{parentName:"p"},"else")," ne sera ex\xe9cut\xe9 que si la condition ",Object(i.mdx)("inlineCode",{parentName:"p"},"if")," \xe9choue."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const isTaskCompleted = false;\n\nif (isTaskCompleted) {\n    console.log('Task completed');\n} else {\n    console.log('Task incomplete');\n}\n")),Object(i.mdx)("h3",{id:"op\xe9rateur-logique--1"},"Op\xe9rateur logique ",Object(i.mdx)("inlineCode",{parentName:"h3"},"&&")),Object(i.mdx)("p",null,"L'op\xe9rateur logique AND ",Object(i.mdx)("inlineCode",{parentName:"p"},"&&")," v\xe9rifie deux valeurs et renvoie un bool\xe9en. Si ",Object(i.mdx)("em",{parentName:"p"},"les deux")," valeurs sont vraies, alors il renvoie ",Object(i.mdx)("inlineCode",{parentName:"p"},"true"),". Si l'une des  valeurs, ou les deux, est fausse, alors elle renvoie la valeur ",Object(i.mdx)("inlineCode",{parentName:"p"},"false"),"."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"true && true;      // true\n1 > 2 && 2 > 1;    // false\ntrue && false;     // false\n4 === 4 && 3 > 1;  // true\n")),Object(i.mdx)("h3",{id:"instruction-switch"},"Instruction ",Object(i.mdx)("inlineCode",{parentName:"h3"},"switch")),Object(i.mdx)("p",null,"Les instructions ",Object(i.mdx)("inlineCode",{parentName:"p"},"switch")," fournissent un moyen de v\xe9rifier une expression par rapport \xe0 plusieurs clauses ",Object(i.mdx)("inlineCode",{parentName:"p"},"case"),". Si un cas correspond, le code \xe0  l'int\xe9rieur de cette clause est ex\xe9cut\xe9.\nLa clause ",Object(i.mdx)("inlineCode",{parentName:"p"},"case")," doit se  terminer par un mot-cl\xe9 ",Object(i.mdx)("inlineCode",{parentName:"p"},"break"),". Si aucun cas ne correspond mais qu'une clause ",Object(i.mdx)("inlineCode",{parentName:"p"},"default")," est incluse, le code \xe0 l'int\xe9rieur de ",Object(i.mdx)("inlineCode",{parentName:"p"},"default")," sera  ex\xe9cut\xe9.\n",Object(i.mdx)("strong",{parentName:"p"},"Remarque :")," Si ",Object(i.mdx)("inlineCode",{parentName:"p"},"break")," est omis du bloc d'un ",Object(i.mdx)("inlineCode",{parentName:"p"},"case"),",  l'instruction ",Object(i.mdx)("inlineCode",{parentName:"p"},"switch")," continuera \xe0 v\xe9rifier les valeurs ",Object(i.mdx)("inlineCode",{parentName:"p"},"case")," jusqu'\xe0 ce qu'une interruption soit rencontr\xe9e ou que le flux soit interrompu."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const food = 'salade';\n\nswitch (nourriture) {\n  case 'hu\xeetre':\n    console.log('Le go\xfbt de la mer \ud83e\uddaa');\n    break;\n  case 'pizza':\n    console.log('Une d\xe9licieuse tarte \ud83c\udf55');\n    break;\n  default:\n    console.log('Profitez de votre repas');\n}\n\n// Imprime : profitez de votre repas\n")),Object(i.mdx)("h3",{id:"d\xe9claration-if"},"D\xe9claration ",Object(i.mdx)("inlineCode",{parentName:"h3"},"if")),Object(i.mdx)("p",null,"Une instruction ",Object(i.mdx)("inlineCode",{parentName:"p"},"if")," accepte une expression avec un ensemble de parenth\xe8ses :"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Si l'expression est \xe9valu\xe9e \xe0 une valeur de v\xe9rit\xe9, le code dans son corps de code s'ex\xe9cute."),Object(i.mdx)("li",{parentName:"ul"},"Si l'expression est \xe9valu\xe9e \xe0 une valeur erron\xe9e, son corps de code ne s'ex\xe9cutera pas.")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const isMailSent = true;\n\nif (isMailSent) {\n  console.log('Mail envoy\xe9 au destinataire');\n}\n")),Object(i.mdx)("h3",{id:"vrai-ou-faux"},"Vrai ou faux"),Object(i.mdx)("p",null,"En JavaScript, les valeurs sont \xe9valu\xe9es \xe0 ",Object(i.mdx)("inlineCode",{parentName:"p"},"true")," ou ",Object(i.mdx)("inlineCode",{parentName:"p"},"false")," lorsqu'elles sont \xe9valu\xe9es en tant que bool\xe9ens."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Les valeurs qui \xe9valuent \xe0 ",Object(i.mdx)("inlineCode",{parentName:"li"},"true")," sont appel\xe9es v\xe9rit\xe9"),Object(i.mdx)("li",{parentName:"ul"},"Les valeurs \xe9valu\xe9es \xe0 ",Object(i.mdx)("inlineCode",{parentName:"li"},"false")," sont appel\xe9es fausses")),Object(i.mdx)("p",null,"Les valeurs fausses incluent ",Object(i.mdx)("inlineCode",{parentName:"p"},"false"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"0"),", des cha\xeenes vides, ",Object(i.mdx)("inlineCode",{parentName:"p"},"null"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"undefined")," et ",Object(i.mdx)("inlineCode",{parentName:"p"},"NaN"),". Toutes les autres valeurs sont vraies."),Object(i.mdx)("h3",{id:"op\xe9rateur-logique--2"},"Op\xe9rateur logique ",Object(i.mdx)("inlineCode",{parentName:"h3"},"!")),Object(i.mdx)("p",null,"L'op\xe9rateur logique NOT ",Object(i.mdx)("inlineCode",{parentName:"p"},"!")," peut \xeatre utilis\xe9 pour effectuer l'une des op\xe9rations suivantes :"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Inversez une valeur bool\xe9enne."),Object(i.mdx)("li",{parentName:"ul"},"Inversez la v\xe9racit\xe9 des valeurs non bool\xe9ennes.")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let lateToWork = true;\nlet OppositionValue = !lateToWork;\n\nconsole.log(OppositionValue);\n// Imprime : false\n")),Object(i.mdx)("h3",{id:"op\xe9rateurs-de-comparaison"},"Op\xe9rateurs de comparaison"),Object(i.mdx)("p",null,"Les op\xe9rateurs de comparaison sont utilis\xe9s pour comparer deux valeurs et  retournent ",Object(i.mdx)("inlineCode",{parentName:"p"},"true")," ou ",Object(i.mdx)("inlineCode",{parentName:"p"},"false")," selon la validit\xe9 de la comparaison :"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"===")," strictement \xe9gal"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"!==")," strictement non \xe9gal"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},">")," plus grand que"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},">=")," sup\xe9rieur ou \xe9gal"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"<")," plus petit que"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"<=")," inf\xe9rieur ou \xe9gal"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"1 > 3       // false\n3 > 1       // true\n250 >= 250  // true\n1 === 1     // true\n1 === 2     // false\n1 === '1'   // false\n")),Object(i.mdx)("h3",{id:"clause-else-if"},"Clause ",Object(i.mdx)("inlineCode",{parentName:"h3"},"else if")),Object(i.mdx)("p",null,"Apr\xe8s un bloc ",Object(i.mdx)("inlineCode",{parentName:"p"},"if")," initial, les blocs ",Object(i.mdx)("inlineCode",{parentName:"p"},"else if")," peuvent chacun v\xe9rifier une condition suppl\xe9mentaire. Un bloc ",Object(i.mdx)("inlineCode",{parentName:"p"},"else")," optionnel peut \xeatre ajout\xe9 apr\xe8s  le(s) bloc(s) ",Object(i.mdx)("inlineCode",{parentName:"p"},"else if")," \xe0 ex\xe9cuter par d\xe9faut si aucune des conditions  n'a \xe9t\xe9 \xe9valu\xe9e comme vraies."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const taille = 10;\n\nif (taille < 100) {\n  console.log('Grand');\n} else if (taille > 20) {\n  console.log('Moyen');\n} else if (taille > 4) {\n  console.log('Petit');\n} else {\n  console.log('Minuscule');\n}\n// Imprime : petit\n")))}d.isMDXComponent=!0},214:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return d})),t.d(n,"MDXProvider",(function(){return m})),t.d(n,"mdx",(function(){return O})),t.d(n,"useMDXComponents",(function(){return p})),t.d(n,"withMDXComponents",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),u=function(e){return function(n){var t=p(n.components);return r.a.createElement(e,o({},n,{components:t}))}},p=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},x=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=x;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}x.displayName="MDXCreateElement"}}]);