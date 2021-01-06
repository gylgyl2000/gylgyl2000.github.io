---
id: Codecademy-Cheatsheets-Learn_JavaScript-04-Scope-fr
title: Portée
---



[Learn JavaScript: Scope Cheatsheet | Codecademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-scope/cheatsheet)



### Portée

La *portée* est un concept qui fait référence à l'endroit où les valeurs et les fonctions sont accessibles.
Les diverses portées comprennent :

- Portée *globale* (une valeur / fonction dans la portée globale peut être utilisée n'importe où dans l'ensemble du programme)
- Portée du *fichier* ou du *module* (la valeur / la fonction n'est accessible qu'à partir du fichier)
- Portée de la *fonction* (visible uniquement dans la fonction),
- Portée du *bloc de code* (visible uniquement dans un bloc de code `{...}`)



```js
function maFonction() {
  
  var pizzaName = 'Volvo';
  // Le code ici peut utiliser pizzaName
  
}

// Le code ici ne peut pas utiliser pizzaName
```



### Variables à portée de bloc

`const` et `let` sont des variables à *portée de bloc*, ce qui signifie qu'elles ne sont accessibles que dans leur bloc ou blocs imbriqués. Dans le bloc de code donné, essayer d'imprimer le `statusMessage` à l'aide de la méthode `console.log()` entraînera une `ReferenceError`. Il n'est accessible qu'à  l'intérieur du bloc `if`.

```js
const isLoggedIn = true;

if (isLoggedIn == true) {
  const statusMessage = 'L\'utilisateur est connecté.';
}

console.log(statusMessage);

// Uncaught ReferenceError: statusMessage n'est pas défini
```



### Variables globales

Les variables JavaScript déclarées en dehors des blocs ou des fonctions  peuvent exister dans la *portée globale*, ce qui signifie qu'elles sont  accessibles dans tout un programme. Les variables déclarées en dehors  des étendues de bloc ou de fonction plus petites sont accessibles à  l'intérieur de ces étendues plus petites.
**Remarque :** il est recommandé de réduire au minimum les variables globales.

```js
// Variable déclarée globalement
const color = 'bleu';

function printColor() {
  console.log(color);
}

printColor(); // Imprime : bleu
```

