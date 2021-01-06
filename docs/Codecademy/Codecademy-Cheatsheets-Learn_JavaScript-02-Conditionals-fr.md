---
id: Codecademy-Cheatsheets-Learn_JavaScript-02-Conditionals-fr
title: Conditionnelles
---



[Learn JavaScript: Conditionals Cheatsheet | Codecademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow/cheatsheet)



### Contrôle du flux

Le flux de contrôle est l'ordre dans lequel les  instructions sont exécutées dans un programme. Le flux de contrôle par  défaut concerne les instructions à lire et à exécuter dans l'ordre de  gauche à droite et de haut en bas dans un fichier programme.

Les  structures de contrôle telles que les conditions (instructions `if` et  autres) modifient le flux de contrôle en exécutant uniquement des blocs  de code si certaines conditions sont remplies. Ces structures permettent essentiellement à un programme de prendre des décisions sur le code qui sera exécuté pendant l'exécution du programme.



### Opérateur logique `||`

L'opérateur logique OR `||` vérifie deux valeurs et renvoie un booléen. Si une ou les deux valeurs sont véridiques, elle renvoie `true`. Si les deux valeurs  sont fausses, il renvoie `false`.
| A     | B     | A \|\| B |
| ----- | ----- | -------- |
| false | false | false    |
| false | true  | true     |
| true  | false | true     |
| true  | true  | true     |

```js
true || false;        // true
10 > 5 || 10 > 20;    // true
false || false;       // false
10 > 100 || 10 > 20;  // false
```



### Opérateur ternaire

L'opérateur ternaire permet une syntaxe compacte dans le cas de décisions binaires  (choix entre deux choix). Il accepte une condition suivie d'un opérateur `?`, puis deux expressions séparées par un `:`. Si la condition est  évaluée comme véridique, la première expression est exécutée, sinon la  deuxième expression est exécutée.

```js
let price = 10.5;
let day = "Monday";

day === "Monday" ? price -= 1.5 : price += 1.5;
```



### Déclaration `else`

Un bloc `else` peut être ajouté à un bloc `if` ou à une série de blocs `if` - `else if`. Le bloc `else` ne sera exécuté que si la condition `if` échoue.

```js
const isTaskCompleted = false;

if (isTaskCompleted) {
    console.log('Task completed');
} else {
    console.log('Task incomplete');
}
```



### Opérateur logique `&&`

L'opérateur logique AND `&&` vérifie deux valeurs et renvoie un booléen. Si *les deux* valeurs sont vraies, alors il renvoie `true`. Si l'une des  valeurs, ou les deux, est fausse, alors elle renvoie la valeur `false`.

```js
true && true;      // true
1 > 2 && 2 > 1;    // false
true && false;     // false
4 === 4 && 3 > 1;  // true
```



### Instruction `switch`

Les instructions `switch` fournissent un moyen de vérifier une expression par rapport à plusieurs clauses `case`. Si un cas correspond, le code à  l'intérieur de cette clause est exécuté.
La clause `case` doit se  terminer par un mot-clé `break`. Si aucun cas ne correspond mais qu'une clause `default` est incluse, le code à l'intérieur de `default` sera  exécuté.
**Remarque :** Si `break` est omis du bloc d'un `case`,  l'instruction `switch` continuera à vérifier les valeurs `case` jusqu'à ce qu'une interruption soit rencontrée ou que le flux soit interrompu.

```js
const food = 'salade';

switch (nourriture) {
  case 'huître':
    console.log('Le goût de la mer 🦪');
    break;
  case 'pizza':
    console.log('Une délicieuse tarte 🍕');
    break;
  default:
    console.log('Profitez de votre repas');
}

// Imprime : profitez de votre repas
```



### Déclaration `if`

Une instruction `if` accepte une expression avec un ensemble de parenthèses :

- Si l'expression est évaluée à une valeur de vérité, le code dans son corps de code s'exécute.
- Si l'expression est évaluée à une valeur erronée, son corps de code ne s'exécutera pas.

```js
const isMailSent = true;

if (isMailSent) {
  console.log('Mail envoyé au destinataire');
}
```



### Vrai ou faux

En JavaScript, les valeurs sont évaluées à `true` ou `false` lorsqu'elles sont évaluées en tant que booléens.

- Les valeurs qui évaluent à `true` sont appelées vérité
- Les valeurs évaluées à `false` sont appelées fausses

Les valeurs fausses incluent `false`, `0`, des chaînes vides, `null`, `undefined` et `NaN`. Toutes les autres valeurs sont vraies.



### Opérateur logique `!`

L'opérateur logique NOT `!` peut être utilisé pour effectuer l'une des opérations suivantes :

- Inversez une valeur booléenne.
- Inversez la véracité des valeurs non booléennes.

```js
let lateToWork = true;
let OppositionValue = !lateToWork;

console.log(OppositionValue);
// Imprime : false
```



### Opérateurs de comparaison

Les opérateurs de comparaison sont utilisés pour comparer deux valeurs et  retournent `true` ou `false` selon la validité de la comparaison :

`===` strictement égal

`!==` strictement non égal

`>` plus grand que

`>=` supérieur ou égal

`<` plus petit que

`<=` inférieur ou égal

```js
1 > 3       // false
3 > 1       // true
250 >= 250  // true
1 === 1     // true
1 === 2     // false
1 === '1'   // false
```



### Clause `else if`

Après un bloc `if` initial, les blocs `else if` peuvent chacun vérifier une condition supplémentaire. Un bloc `else` optionnel peut être ajouté après  le(s) bloc(s) `else if` à exécuter par défaut si aucune des conditions  n'a été évaluée comme vraies.

```js
const taille = 10;

if (taille < 100) {
  console.log('Grand');
} else if (taille > 20) {
  console.log('Moyen');
} else if (taille > 4) {
  console.log('Petit');
} else {
  console.log('Minuscule');
}
// Imprime : petit
```

