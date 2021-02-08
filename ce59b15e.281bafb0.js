(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{185:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),o=(t(0),t(214)),s=(t(222),t(223),{id:"Codewars-javascript_basic-fr",title:"Formation JavaScript"}),c={unversionedId:"Codewars/Codewars-javascript_basic-fr",id:"Codewars/Codewars-javascript_basic-fr",isDocsHomePage:!1,title:"Formation JavaScript",description:"1. Cr\xe9ez votre premi\xe8re fonction JS helloWorld",source:"@site/docs/Codewars/Codewars-javascript_basic-fr.mdx",slug:"/Codewars/Codewars-javascript_basic-fr",permalink:"/docs/Codewars/Codewars-javascript_basic-fr",editUrl:"https://github.com/gylgyl2000/laloutre.github.io/edit/main/docs/Codewars/Codewars-javascript_basic-fr.mdx",version:"current",sidebar:"docs",previous:{title:"Kata Codewars",permalink:"/docs/Codewars/codewars-kata-fr.mdx"},next:{title:"A Complete Guide to Grid",permalink:"/docs/CSS-Tricks/css-tricks-A_Complete_Guide_to_Grid"}},i=[{value:"1. Cr\xe9ez votre premi\xe8re fonction JS <code>helloWorld</code>",id:"1-cr\xe9ez-votre-premi\xe8re-fonction-js-helloworld",children:[]},{value:"2. Types de donn\xe9es de base - Nombre",id:"2-types-de-donn\xe9es-de-base---nombre",children:[]},{value:"3. Types de donn\xe9es de base - Cha\xeene de caract\xe8res",id:"3-types-de-donn\xe9es-de-base---cha\xeene-de-caract\xe8res",children:[]},{value:"18. Les m\xe9thodes de l\u2019objet String : <code>concat()</code>, <code>split()</code> et leur bon ami <code>join()</code>",id:"18-les-m\xe9thodes-de-lobjet-string--concat-split-et-leur-bon-ami-join",children:[]}],l={rightToc:i};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h2",{id:"1-cr\xe9ez-votre-premi\xe8re-fonction-js-helloworld"},"1. Cr\xe9ez votre premi\xe8re fonction JS ",Object(o.mdx)("inlineCode",{parentName:"h2"},"helloWorld")),Object(o.mdx)("p",null,Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8/train/javascript"}),'Training on Training JS #1: create your first JS function and print "Helloworld!" | Codewars')),Object(o.mdx)("div",{className:"admonition admonition-info alert alert--info"},Object(o.mdx)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.mdx)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.mdx)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"instructions")),Object(o.mdx)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.mdx)("p",{parentName:"div"},"En JavaScript, votre code s'ex\xe9cute dans une fonction, compl\xe9tons pas \xe0 pas votre premi\xe8re fonction JS."),Object(o.mdx)("p",{parentName:"div"},"Regardez cet exemple :"),Object(o.mdx)("pre",{parentName:"div"},Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'  --------mot-cl\xe9 "function"\n  |       ----le nom de votre fonction  \n  |       |    ---si n\xe9cessaire, certains arguments appara\xeetront entre parenth\xe8ses\n  |       |    |\nfunction myfunc(){  ---------votre code de fonction commencera par "{"\n  // vous devez taper votre code ici\n}----------------------------se terminant par "}"\n')),Object(o.mdx)("p",{parentName:"div"},"Si nous voulons en afficher \xe0 l'\xe9cran, nous pouvons peut-\xeatre utiliser ",Object(o.mdx)("inlineCode",{parentName:"p"},"Document.write()")," sur le Web, ou utiliser ",Object(o.mdx)("inlineCode",{parentName:"p"},"alert()")," pop votre message, mais Codewars ne prend pas en charge ces m\xe9thodes, nous devrions  utiliser ",Object(o.mdx)("inlineCode",{parentName:"p"},"console.log()")," dans votre fonction. Voir cet exemple :"),Object(o.mdx)("pre",{parentName:"div"},Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function printWordToScreen(){\n  var somewords="This is an example."\n  console.log(somewords)\n}\n')),Object(o.mdx)("p",{parentName:"div"},"Si nous ex\xe9cutons cette fonction, ",Object(o.mdx)("inlineCode",{parentName:"p"},"This is an example.")," sera visible \xe0  l'\xe9cran. Comme vous le voyez, ",Object(o.mdx)("inlineCode",{parentName:"p"},"console.log()")," est une m\xe9thode utile pour aider votre travail, vous deviendrez de plus en plus comme elle."))),Object(o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.mdx)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.mdx)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.mdx)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"missions")),Object(o.mdx)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.mdx)("p",{parentName:"div"},"Veuillez vous r\xe9f\xe9rer aux deux exemples ci-dessus et \xe9crivez votre premi\xe8re fonction JS."),Object(o.mdx)("ul",{parentName:"div"},Object(o.mdx)("li",{parentName:"ul"},"utilisez le mot-cl\xe9 ",Object(o.mdx)("inlineCode",{parentName:"li"},"function")," pour d\xe9finir votre fonction, le nom de la fonction doit \xeatre ",Object(o.mdx)("inlineCode",{parentName:"li"},"helloWorld")," (n'oubliez pas les () et {})."),Object(o.mdx)("li",{parentName:"ul"},"utilisez le mot-cl\xe9 ",Object(o.mdx)("inlineCode",{parentName:"li"},"var")," pour d\xe9finir une variable ",Object(o.mdx)("inlineCode",{parentName:"li"},"str"),", la valeur de ",Object(o.mdx)("inlineCode",{parentName:"li"},"str"),' doit  \xeatre une cha\xeene : "Hello World!"  (n\'oubliez pas le =).'),Object(o.mdx)("li",{parentName:"ul"},"tapez le ",Object(o.mdx)("inlineCode",{parentName:"li"},"console.log()")," dans la ligne suivante (n'oubliez pas de mettre la cha\xeene entre crochets).")),Object(o.mdx)("pre",{parentName:"div"},Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"//refer to the example and write your first JS function\n")))),Object(o.mdx)("nav",{class:"code-col"},Object(o.mdx)("div",{class:"code-col__item"},Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="javascript"',title:'"javascript"'}),'function helloWorld() {\n   let str = "Hello World!";\n   console.log(str);\n};\n'))),Object(o.mdx)("div",{class:"code-col__item"},Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-sh",metastring:'title="console"',title:'"console"'}),"\n\nHello World!\n\n")))),Object(o.mdx)("p",null,Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8/solutions"}),"solutions")),Object(o.mdx)("hr",null),Object(o.mdx)("h2",{id:"2-types-de-donn\xe9es-de-base---nombre"},"2. Types de donn\xe9es de base - Nombre"),Object(o.mdx)("p",null,Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript"}),"Training on Training JS #2: Basic data types--Number | Codewars")),Object(o.mdx)("div",{className:"admonition admonition-info alert alert--info"},Object(o.mdx)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.mdx)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.mdx)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"instructions")),Object(o.mdx)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.mdx)("p",{parentName:"div"},"En javascript, Number est l'un des types de donn\xe9es de base. Il peut \xeatre positif : ",Object(o.mdx)("inlineCode",{parentName:"p"},"1, 2, 3"),", n\xe9gatif : ",Object(o.mdx)("inlineCode",{parentName:"p"},"-1, -100"),", entier : ",Object(o.mdx)("inlineCode",{parentName:"p"},"123 456"),", d\xe9cimal : ",Object(o.mdx)("inlineCode",{parentName:"p"},"3,1415926, -8,88")," etc.",Object(o.mdx)("br",null),"\nLes nombres peuvent utiliser des op\xe9rateurs tels que ",Object(o.mdx)("inlineCode",{parentName:"p"},"+ - * / %")))),Object(o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.mdx)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.mdx)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.mdx)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"missions")),Object(o.mdx)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.mdx)("p",{parentName:"div"},"J'ai \xe9crit cinq fonctions ",Object(o.mdx)("inlineCode",{parentName:"p"},"equal1 equal2 equal3 equal4 equal5"),", d\xe9finit six variables globales ",Object(o.mdx)("inlineCode",{parentName:"p"},"v1 v2 v3 v4 v5 v6"),", chaque fonction a deux variables locales ",Object(o.mdx)("inlineCode",{parentName:"p"},"a b"),", veuillez d\xe9finir la valeur appropri\xe9e pour les deux variables (s\xe9lectionnez dans v1--v6), ce qui rend la valeur de retour de ces fonctions \xe9gale \xe0 100. La fonction ",Object(o.mdx)("inlineCode",{parentName:"p"},"equal1")," est compl\xe9t\xe9e, veuillez vous r\xe9f\xe9rer \xe0 cet exemple pour compl\xe9ter les fonctions suivantes."),Object(o.mdx)("pre",{parentName:"div"},Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var v1 = 50, v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250\nfunction equal1(){\n  var a = v1   \n  var b = v1   \n  return a + b;\n}\n//Please refer to the example above to complete the following functions\nfunction equal2(){\n  var a=   //set number value to a\n  var b=   //set number value to b\n  return a - b;\n}\nfunction equal3(){\n  var a=   //set number value to a\n  var b=   //set number value to b\n  return a * b;\n}\nfunction equal4(){\n  var a=   //set number value to a\n  var b=   //set number value to b\n  return a / b;\n}\nfunction equal5(){\n  var a=   //set number value to a\n  var b=   //set number value to b\n  return a % b;\n}\n")))),Object(o.mdx)("nav",{class:"code-col"},Object(o.mdx)("div",{class:"code-col__item"},Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="javascript"',title:'"javascript"'}),"let v1 = 50; v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250\nfunction equal1(){\n  let a = v1;\n  let b = v1;\n  return a + b;\n}\nfunction equal2(){\n  let a = v3;\n  let b = v1;\n  return a - b;\n}\nfunction equal3(){\n  let a = v1;\n  let b = v5;\n  return a * b;\n}\nfunction equal4(){\n  let a = v4;\n  let b = v5;\n  return a / b;\n}\nfunction equal5(){\n  let a = v6;\n  let b = v3;\n  return a % b;\n}\n\nconsole.log(equal1());\nconsole.log(equal2());\nconsole.log(equal3());\nconsole.log(equal4());\nconsole.log(equal5());\n"))),Object(o.mdx)("div",{class:"code-col__item"},Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-sh",metastring:'title="console"',title:'"console"'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n100\n100\n100\n100\n100\n")))),Object(o.mdx)("p",null,Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.codewars.com/kata/571edd157e8954bab500032d/solutions"}),"solutions")),Object(o.mdx)("hr",null),Object(o.mdx)("h2",{id:"3-types-de-donn\xe9es-de-base---cha\xeene-de-caract\xe8res"},"3. Types de donn\xe9es de base - Cha\xeene de caract\xe8res"),Object(o.mdx)("p",null,Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.codewars.com/kata/571edea4b625edcb51000d8e/train/javascript"}),"Training on Training JS #3: Basic data types--String | Codewars")),Object(o.mdx)("div",{className:"admonition admonition-info alert alert--info"},Object(o.mdx)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.mdx)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.mdx)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"instructions")),Object(o.mdx)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.mdx)("p",{parentName:"div"},"En javascript, String est l'un des types de donn\xe9es de base. Utilisez ",Object(o.mdx)("inlineCode",{parentName:"p"},'""')," ou ",Object(o.mdx)("inlineCode",{parentName:"p"},"''")," pour d\xe9clarer une variable cha\xeene. Il peut s'agir de lettres : ",Object(o.mdx)("inlineCode",{parentName:"p"},"a, b, c, A, B, C"),", nombres : ",Object(o.mdx)("inlineCode",{parentName:"p"},"123..."),", symboles divers : ",Object(o.mdx)("inlineCode",{parentName:"p"},"@ # $ % ^ & *"),", symbole de contr\xf4le : ",Object(o.mdx)("inlineCode",{parentName:"p"},"\\n, \\t")," etc.",Object(o.mdx)("br",null),"\nLa cha\xeene peut utiliser les op\xe9rateurs ",Object(o.mdx)("inlineCode",{parentName:"p"},"+"),", pour connectez deux cha\xeenes ou plus ensemble."))),Object(o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.mdx)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.mdx)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.mdx)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"missions")),Object(o.mdx)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.mdx)("ul",{parentName:"div"},Object(o.mdx)("li",{parentName:"ul"},"J'ai cr\xe9\xe9 trois fonctions, et d\xe9fini quelques variables globales, veuillez s\xe9lectionner quelques variables qui peuvent constituer le nom de la fonction, et les renvoyer (veuillez noter que les lettres majuscules et minuscules sont diff\xe9rentes).")),Object(o.mdx)("pre",{parentName:"div"},Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'var a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n"\nfunction Dad(){\n  // s\xe9lectionnez des variable pour combiner "Dad"\n  return ? + ? + ?;\n}\nfunction Bee(){\n  // s\xe9lectionnez des variable pour combiner "Bee"\n  return ? + ? + ?;\n}\nfunction banana(){\n  // s\xe9lectionnez des variable pour combiner "banana"\n  return ? + ? + ?;\n}\n// r\xe9pondez \xe0 quelques questions si vous avez termin\xe9 les travaux ci-dessus\nfunction answer1(){\n  // la r\xe9ponse devrait \xeatre "yes" ou "no"\n  return "";\n}\nfunction answer2(){\n  // la r\xe9ponse devrait \xeatre "yes" ou "no"\n  return "";\n}\nfunction answer3(){\n  // la r\xe9ponse devrait \xeatre "yes" ou "no"\n  return "";\n}\n')))),Object(o.mdx)("nav",{class:"code-col"},Object(o.mdx)("div",{class:"code-col__item"},Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="javascript"',title:'"javascript"'}),'let a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n"\nfunction Dad(){\n  return d1 + a2 + d2;\n}\nfunction Bee(){\n  return b1 + e2 + e2;\n}\nfunction banana(){\n  return b2 + a2 + n2 + a2 + n2 + a2;\n}\nfunction answer1(){\n  return "no";\n}\nfunction answer2(){\n  return "no";\n}\nfunction answer3(){\n  return "yes";\n}\n\nconsole.log(Dad());\nconsole.log(Bee());\nconsole.log(banana());\nconsole.log(answer1());\nconsole.log(answer2());\nconsole.log(answer3());\n'))),Object(o.mdx)("div",{class:"code-col__item"},Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-sh",metastring:'title="console"',title:'"console"'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDad\nBee\nbanana\nno\nno\nyes\n")))),Object(o.mdx)("p",null,Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.codewars.com/kata/571edea4b625edcb51000d8e/solutions"}),"solutions")),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const Dad = () => d1 + a2 + d2\nconst Bee = () => b1 + e2 + e2\nconst banana = () => b2 + a2 + n2 + a2 + n2 + a2\nconst answer1 = () => "no"\nconst answer2 = () => "no"\nconst answer3 = () => "yes"\n')),Object(o.mdx)("hr",null),Object(o.mdx)("h2",{id:"18-les-m\xe9thodes-de-lobjet-string--concat-split-et-leur-bon-ami-join"},"18. Les m\xe9thodes de l\u2019objet String : ",Object(o.mdx)("inlineCode",{parentName:"h2"},"concat()"),", ",Object(o.mdx)("inlineCode",{parentName:"h2"},"split()")," et leur bon ami ",Object(o.mdx)("inlineCode",{parentName:"h2"},"join()")),Object(o.mdx)("p",null,Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript"}),"Train: Training JS #18: Methods of String object--concat() split() and its good friend join() | Codewars")),Object(o.mdx)("p",null,"Cette fois, nous apprenons deux m\xe9thodes pour diviser ou fusionner une cha\xeene de caract\xe8res : ",Object(o.mdx)("inlineCode",{parentName:"p"},"split()")," et ",Object(o.mdx)("inlineCode",{parentName:"p"},"concat()"),". \xc9tudions \xe9galement un bon ami de la m\xe9thode ",Object(o.mdx)("inlineCode",{parentName:"p"},"split()")," : ",Object(o.mdx)("inlineCode",{parentName:"p"},"join()"),". C'est une ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array"}),"m\xe9thode Array"),". Leur utilisation :"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"StringObject.indexOf(searchvalue,fromindex)\nStringObject.lastIndexOf(searchvalue,fromindex)\nStringObject.search(searchvalue/regexp)\n")),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"split()")," peut diviser une cha\xeene en plusieurs parties par un s\xe9parateur sp\xe9cifi\xe9. Le r\xe9sultat est un tableau de cha\xeene de caract\xe8res. La cha\xeene fractionn\xe9e n'inclut pas le s\xe9parateur lui-m\xeame. L'une de ses utilisations  classiques est de diviser une phrase en un tableau de mots :"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var str=\"My name is John\";\nvar words=str.split(\" \");\nconsole.log(words);\n//output:\n[ 'My', 'name', 'is', 'John' ]\n")),Object(o.mdx)("p",null,"Dans l'exemple ci-dessus, nous utilisons l'espace comme s\xe9parateur, divisant une phrase en 4 mots. Si nous sp\xe9cifions les seconds param\xe8tres, ce sera comme ceci :"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var str=\"My name is John\";\nvar words1=str.split(\" \",3);\nconsole.log(\"words1:\",words1);\nvar words2=str.split(\" \",5);\nconsole.log(\"words2:\",words2);\n\n//output:\nwords1:[ 'My', 'name', 'is' ]\nwords2:[ 'My', 'name', 'is', 'John' ]\n")),Object(o.mdx)("p",null,"Lorsque nous sp\xe9cifions un nombre inf\xe9rieur \xe0 4, le r\xe9sultat sera un nombre sp\xe9cifi\xe9 de cha\xeenes ; si le num\xe9ro de la partition est trop grand, les r\xe9sultats seront seulement les m\xeames que les r\xe9sultats par d\xe9faut."),Object(o.mdx)("p",null,"Si nous utilisons la cha\xeene vide comme s\xe9parateur, nous obtiendrons un tableau de cha\xeenes contenant chaque caract\xe8re :"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var str=\"My name is John\";\nvar words=str.split(\"\");\nconsole.log(words);\n\n//output:\n[ 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n' ]\n")),Object(o.mdx)("p",null,"Split peut utiliser des expressions r\xe9guli\xe8res pour fractionner la cha\xeene. Mais parce que nous n'avons pas appris l'utilisation des expressions r\xe9guli\xe8res, nous n'avons donc pas \xe0 apprendre cet usage."),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"concat()")," peut fusionner plusieurs cha\xeenes en une cha\xeene comme celle-ci :"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'var str="My".concat("name","is","John");\nconsole.log(str);\n\n//output:\nMynameisJohn\n')),Object(o.mdx)("p",null,"En fait, nous voyons rarement l'utilisation r\xe9elle de ",Object(o.mdx)("inlineCode",{parentName:"p"},"concat()"),", car nous avons un moyen plus simple qui utilise l'op\xe9rateur + :"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'var str="My"+"name"+"is"+"John";\nconsole.log(str);\n\n//output:\nMynameisJohn\n')),Object(o.mdx)("p",null,"Mais m\xeame en utilisant l'op\xe9rateur +, les quatre mots ne sont pas la combinaison parfaite d'une phrase, car il n'y a pas de s\xe9parateur d'espace. Que devrions-nous faire ? Utiliser ",Object(o.mdx)("inlineCode",{parentName:"p"},"join()")," est le meilleur  choix."),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"join()")," est l'op\xe9ration inverse de la m\xe9thode ",Object(o.mdx)("inlineCode",{parentName:"p"},"split()"),". Nous pouvons voir beaucoup de code dans l'utilisation r\xe9elle :"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'var str="My name is John";\nvar words=str.split(" ");\nconsole.log("use split():",words);\nvar s=words.join(" ");\nconsole.log("use join():",s);\nconsole.log("use split() and join():",str.split(" ").join(" "))\n//output:\nuse split():[ \'My\', \'name\', \'is\', \'John\' ]\nuse join():My name is John\nuse split() and join():My name is John\n')),Object(o.mdx)("p",null,"Ok, la le\xe7on est termin\xe9e, faisons une t\xe2che."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"T\xe2che"),"\nImpl\xe9mentez une fonction qui accepte 2 arguments : ",Object(o.mdx)("inlineCode",{parentName:"p"},"string")," et ",Object(o.mdx)("inlineCode",{parentName:"p"},"separator"),"."),Object(o.mdx)("p",null,"L'algorithme attendu : divisez la cha\xeene en mots par des espaces, divisez chaque mot  en caract\xe8res s\xe9par\xe9s et rejoignez-les avec le ",Object(o.mdx)("inlineCode",{parentName:"p"},"separator")," sp\xe9cifi\xe9,  joignez tous les 'mots' r\xe9sultants en une phrase avec des espaces."),Object(o.mdx)("p",null,"Par exemple :"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"\nsplitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"\nsplitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"\nsplitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"\n')),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function splitAndMerge(str, sp) {\n  return str.split(" ").map(word => word.split("").join(sp)).join(" ");\n}\n///////////\nfunction splitAndMerge(str,sp){\n  var words = str.split(" ");\n  var arr =[];\n  var res = []\n  for(i=0;i<words.length;i++){\n   arr.push(words[i].split("").join(sp));\n  }\n  res = arr.join(" ");\n  return res;\n}\n')),Object(o.mdx)("hr",null))}d.isMDXComponent=!0},214:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return d})),t.d(n,"MDXProvider",(function(){return u})),t.d(n,"mdx",(function(){return v})),t.d(n,"useMDXComponents",(function(){return p})),t.d(n,"withMDXComponents",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),m=function(e){return function(n){var t=p(n.components);return r.a.createElement(e,s({},n,{components:t}))}},p=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},j=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,u=d["".concat(s,".").concat(m)]||d[m]||b[m]||o;return t?r.a.createElement(u,i(i({ref:n},c),{},{components:t})):r.a.createElement(u,i({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=j;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"},215:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},218:function(e,n,t){"use strict";var a=t(0),r=t(219);n.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},219:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)(void 0);n.a=r},222:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(218),s=t(215),c=t(53),i=t.n(c);const l=37,d=39;n.a=function(e){const{lazy:n,block:t,children:c,defaultValue:m,values:p,groupId:u,className:b}=e,{tabGroupChoices:j,setTabGroupChoices:v}=Object(o.a)(),[O,x]=Object(a.useState)(m);if(null!=u){const e=j[u];null!=e&&e!==O&&p.some((n=>n.value===e))&&x(e)}const f=e=>{x(e),null!=u&&v(u,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},b)},p.map((({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(s.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case d:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case l:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(h,e.target,e)},onFocus:()=>f(e),onClick:()=>{f(e)}},n)))),n?Object(a.cloneElement)(c.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},c.map(((e,n)=>Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}},223:function(e,n,t){"use strict";var a=t(3),r=t(0),o=t.n(r);n.a=function({children:e,hidden:n,className:t}){return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:t}),e)}}}]);