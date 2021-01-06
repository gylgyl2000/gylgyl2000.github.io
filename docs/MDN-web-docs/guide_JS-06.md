---
id: guide_JS-06
title: Expressions et opérateurs
---



Ce chapitre décrit les expressions et les opérateurs en JavaScript, il inclut des notions sur les opérateurs d'affectation, de comparaison, les opérateurs arithmétiques, binaires, logiques, ceux qui s'appliquent sur les chaînes de caractères ainsi que les opérateurs spéciaux.

Une liste complète et détaillée des opérateurs JavaScript est disponible dans [la référence JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs).

------

## Opérateurs

JavaScript possède différents types d'opérateurs. Cette section décrit les opérateurs et certaines informations sur les priorités entre opérateurs.

- [Les opérateurs d'affectation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs#Opérateurs_d'affectation)
- [Les opérateurs de comparaison](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs#Opérateurs_de_comparaison)
- [Les opérateurs arithmétiques](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs#Opérateurs_arithmétiques)
- [Les opérateurs binaires](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs#Opérateurs_binaires)
- [Les opérateurs logiques](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs#Opérateurs_logiques)
- [Les opérateurs de chaînes](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs#Opérateurs_de_chaînes_de_caractères)
- [L'opérateur (ternaire) conditionnel](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs#Opérateur_conditionnel_ternaire)
- [L'opérateur virgule](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs#La_virgule_comme_opérateur)
- [Les opérateurs unaires](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs#Opérateurs_unaires)
- [Les opérateurs relationnels](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs#Opérateurs_relationnels)

JavaScript utilise des opérateurs *binaires* et *unaires*, ainsi qu'un opérateur ternaire spécial (l'opérateur conditionnel). Un opérateur binaire utilise deux opérandes, un précédant l'opérateur et un lui succédant :

```js
opérande1 opérateur opérande2
```

Par exemple : « `3+4` » ou « `x*y` ».

Un opérateur unaire ne nécessite qu'un opérande, avant ou après l'opérateur :

```
opérateur opérande
```

ou

```
opérande opérateur
```

Comme « `x++` » ou « `++x` ».



### Opérateurs d'affectation

Un [opérateur d'affectation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation) assigne une valeur à son opérande gauche, valeur basée sur celle de l'opérande droit. L'opérateur d'affectation simple est le signe égal (=), il assigne la valeur de l'opérande droit à l'opérande gauche. Autrement dit, avec « x = y » on affecte la valeur y à x.

D'autres opérateurs d'affectation sont des raccourcis correspondant à certaines opérations composées, ils sont énumérés dans le tableau qui suit :

| Nom                                                          | Opérateur composé | Signification |
| ------------------------------------------------------------ | ----------------- | ------------- |
| [Affectation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation#Affectation) | `x = y`           | `x = y`       |
| [Affectation après addition](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation#Affectation_après_addition) | `x += y`          | `x = x + y`   |
| [Affectation après soustraction](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation#Affectation_après_soustraction) | `x -= y`          | `x = x - y`   |
| [Affectation après multiplication](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation#Affectation_après_multiplication) | `x *= y`          | `x = x * y`   |
| [Affectation après division](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation#Affectation_après_division) | `x /= y`          | `x = x / y`   |
| [Affectation du reste](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation#Affectation_du_reste) | `x %= y`          | `x = x % y`   |
| [Affectation après exponentiation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation#Affectation_après_exponentiation) | `x **=y`          | `x = x ** y`  |
| [Affectation après décalage à gauche](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation#Affectation_après_décalage_à_gauche) | `x <<= y`         | `x = x << y`  |
| [Affectation après décalage à droite](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation#Affectation_après_décalage_à_droite) | `x >>= y`         | `x = x >> y`  |
| [Affectation après décalage à droite non signé](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation#Affectation_après_décalage_à_droite_non-signé) | `x >>>= y`        | `x = x >>> y` |
| [Affectation après ET binaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation#Affectation_après_ET_binaire) | `x &= y`          | `x = x & y`   |
| [Affectation après OU exclusif binaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation#Affectation_après_OU_exclusif_(XOR)_binaire) | `x ^= y`          | `x = x ^ y`   |
| [Affectation après OU binaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation#Affectation_après_OU_binaire) | `x |= y`          | `x = x | y`   |



#### Décomposition

Lors d'affectations plus complexes, on peut utiliser [l'affectation par décomposition](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition). C'est une expression qui permet d'extraire des données depuis des tableaux ou des objets avec une syntaxe symétrique de littéraux de tableaux ou d'objets pour affecter des variables.

```js
var toto = ["un", "deux", "trois"];

// sans décomposition
var un = toto[0];
var deux = toto[1];
var trois = toto[2];

// avec la décomposition
var [un, deux, trois] = toto;
```



### Opérateurs de comparaison

Un [opérateur de comparaison](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison) compare ses deux opérandes et renvoie un valeur booléenne correspondant au résultat de la comparaison (vraie ou fausse). Les opérandes peuvent être des nombres, des chaînes de caractères, des booléens ou des objets. Les chaînes de caractères sont comparées selon l'ordre lexicographique usuel en utilisant les valeurs Unicode. Dans la plupart des cas, si les deux opérandes ne sont pas du même type, JavaScript tentera de les convertir vers un type approprié. Cette méthode aboutira souvent à une comparaison numérique. Les seules exceptions à cette conversion implicite sont les opérateurs `===` et `!==` , qui testent des égalités et inégalités strictes. Ces opérateurs n'effectuent pas de conversion de type. Le tableau qui suit décrit les opérateurs de comparaisons relativement à ce fragment de code :

```js
var var1 = 3;
var var2 = 4;
```

| Opérateur                                                    | Description                                                  | Exemples qui renvoient `true`              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------ |
| [Égalité](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_simple_(.3D.3D)) (`==`) | Renvoie `true` si les opérandes sont égaux après conversion en valeurs de mêmes types. | `3 == var1`    `"3" == var1`    `3 == '3'` |
| [Inégalité](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#In.C3.A9galit.C3.A9_simple_(!.3D)) (`!=`) | Renvoie `true` si les opérandes sont différents.             | `var1 != 4    var2 != "3"`                 |
| [Égalité stricte ](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_stricte_(.3D.3D.3D))(`===`) | Renvoie `true` si les opérandes sont égaux et de même type. Voir [`Object.is()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/is) et [égalité de type en JavaScript](https://developer.mozilla.org/fr/docs/JavaScript/Guide/Égalité_en_JavaScript). | `3 === var1`                               |
| [Inégalité stricte](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#In.C3.A9galit.C3.A9_stricte_(!.3D.3D)) (`!==`) | Renvoie `true` si les opérandes ne sont pas égaux ou s'ils ne sont pas de même type. | `var1 !== "3"    3 !== '3'`                |
| [Supériorité stricte](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#Sup.C3.A9rieur_strict_(>)) (`>`) | Renvoie `true` si l'opérande gauche est supérieur (strictement) à l'opérande droit. | `var2 > var1    "12" > 2`                  |
| [Supériorité ou égalité](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#Sup.C3.A9rieur_ou_.C3.A9gal_(>.3D)) (`>=`) | Renvoie `true` si l'opérande gauche est supérieur ou égal à l'opérande droit. | `var2 >= var1    var1 >= 3`                |
| [Infériorité stricte](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#Inf.C3.A9rieur_strict_(<)) (`<`) | Renvoie `true` si l'opérande gauche est inférieur (strictement) à l'opérande droit. | `var1 < var2    "2" < "12"`                |
| [Infériorité ou égalité](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#Inf.C3.A9rieur_ou_.C3.A9gal_(<.3D)) (`<=`) | Renvoie `true` si l'opérande gauche est inférieur ou égal à l'opérande droit. | `var1 <= var2    var2 <= 5`                |

**Note :** `=>` n'est pas un opérateur. Il s'agit de la notation utilisée pour [les fonctions fléchées](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées).



### Opérateurs arithmétiques

Les [opérateurs arithmétiques](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques) ont pour opérandes des valeurs numériques (des littéraux ou des variables) et renvoient une valeur numérique. Les opérateurs arithmétiques standards sont l'addition (+), la soustraction (-), la multiplication (*), et la division (/). Ces opérateurs fonctionnent comme pour la plupart des langages de programmation lorsqu'ils sont utilisés avec des nombres décimaux (on notera que la division par zéro a pour résultat [`Infinity`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Infinity)). Ainsi :

```js
1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // true
```

En plus des opérations arithmétiques standards (+,-,*,/), JavaScript fournit également d'autres opérateurs arithmétiques, listés dans le tableau qui suit :

| Opérateur                                                    | Description                                                  | Exemple                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Reste](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Reste_(.25)) (`%`) | Opérateur binaire. Renvoie le reste entier de la division entre les deux opérandes. | 12 % 5 renvoie 2.                                            |
| [Incrément](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Incr.C3.A9ment_(.2B.2B)) (`++`) | Opérateur unaire. Ajoute un à son opérande. S'il est utilisé en préfixe (`++x`), il renvoie la valeur de l'opérande après avoir ajouté un, s'il est utilisé comme opérateur de suffixe (`x++`), il renvoie la valeur de l'opérande avant d'ajouter un. | Si `x` vaut 3, `++x` incrémente `x` à 4 et renvoie 4, `x++` renvoie 3 et seulement ensuite ajoute un à `x`. |
| [Décrément](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#D.C3.A9cr.C3.A9ment_(--)) (`--`) | Opérateur unaire. Il soustrait un à son opérande. Il fonctionne de manière analogue à l'opérateur d'incrément. | Si `x` vaut 3, `--x` décrémente `x` à 2 puis renvoie2, `x--` renvoie 3 puis décrémente la valeur de `x`. |
| [Négation unaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#N.C3.A9gation_unaire_(-)) (`-`) | Opérateur unaire. Renvoie la valeur opposée de l'opérande.   | Si `x` vaut 3, alors `-x` renvoie -3.                        |
| [Plus unaire ](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Plus_unaire_(.2B))(`+`) | Opérateur unaire. Si l'opérande n'est pas un nombre, il tente de le convertir en une valeur numérique. | `+"3"` renvoie `3`.     `+true` renvoie `1`.                 |
| [Opérateur d'exponentiation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Exponentiation) (**) (puissance) | Calcule un nombre (base) élevé à une puissance donnée (soit `basepuissance`) | `2 ** 3` renvoie `8`     `10 ** -1` renvoie `0.1`            |



### Opérateurs binaires

Les [opérateurs binaires](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires) voient leurs opérandes comme des ensembles de 32 bits (des zéros et des uns), et non pas comme des nombres décimaux, octaux ou hexadécimaux. Ainsi, le nombre décimal neuf aura une représentation binaire de 1001. Les opérateurs binaires effectuent des opérations sur des représentations binaires mais renvoies des valeurs numériques JavaScript standards.

Le tableau qui suit résume les opérateurs binaires JavaScript :

| Opérateur                                                    | Utilisation | Description                                                  |
| ------------------------------------------------------------ | ----------- | ------------------------------------------------------------ |
| [AND (ET) binaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#&_.28ET_binaire.29) | `a & b`     | Renvoie un 1 à chaque position binaire pour laquelle les bits des deux opérandes sont à 1. |
| [OR (OU) binaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#\|_.28OU_binaire.29) | `a | b`     | Renvoie un zéro à chaque position binaire pour laquelle au moins un des bits des deux opérandes est à 0. |
| [XOR (OU exclusif) binaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.5E_.28XOR_binaire.29) | `a ^ b`     | Renvoie un zéro à chaque position binaire pour laquelle les bits sont les mêmes (et un 1 pour chacun des bits qui est différent). |
| [NOT (NON) binaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.7E_.28NON_binaire.29) | `~ a`       | Inverse les bits de l'opérande.                              |
| [Décalage binaire à gauche](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.3C.3C_.28d.C3.A9calage_.C3.A0_gauche.29) | `a << b`    | Décale la représentation binaire de `b` bits sur la gauche et complète avec des zéros à droite. |
| [Décalage binaire à droite](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.3E.3E_.28d.C3.A9calage_.C3.A0_droite_avec_propagation_du_signe.29) | `a >> b`    | Décale la représentation binaire de `b` bits sur la droite en ignorant les bits perdus. |
| [Décalage binaire à droite en complétant avec des zéros](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.3E.3E.3E_.28d.C3.A9calage_.C3.A0_droite_avec_insertion_de_z.C3.A9ros.29) | `a >>> b`   | Décale la représentation binaire de `b` bits sur la droite en ignorant les bits perdus et ajoute des zéros sur la gauche. |



#### Opérateurs binaires logiques

Les opérateurs binaires logiques fonctionnent de cette façon :

- Les opérandes sont convertis en entiers sur 32 bits et exprimés comme une série de bits (des 1 et des 0). Les nombres sur plus de 32 bits voient leurs bits supplémentaires supprimés :  

  ```js
  Avant : 11100110111110100000000000000110000000000001
  Après :             10100000000000000110000000000001
  ```

-  
- Chaque bit du premier opérande est associé avec le bit correspondant du second opérande (le premier bit du premier opérande avec le premier bit du second opérande, le second avec le second et ainsi de suite)
- L'opérateur est appliqué pour chaque paire de bits ainsi constituée et le résultat est reconstruit sous forme binaire.

Le chiffre neuf est par exemple représenté comme 1001, et le nombre quinze comme 1111. Ainsi, quand les opérateurs binaires sont appliqués sur ces valeurs, on a les résultats qui suivent :

| Expression | Résultat | Description binaire                                          |
| ---------- | -------- | ------------------------------------------------------------ |
| `15 & 9`   | `9`      | `1111 & 1001 = 1001`                                         |
| `15 | 9`   | `15`     | `1111 | 1001 = 1111`                                         |
| `15 ^ 9`   | `6`      | `1111 ^ 1001 = 0110`                                         |
| `~15`      | `-16`    | `~``00000000...``00001111 = ``1111``1111``...``11110000`     |
| `~9`       | `-10`    | `~``00000000``...``0000``1001 = ``1111``1111``...``1111``0110` |

Il faut remarquer que tous les bits sont échangés lorsque l'opérateur binaire NOT est utilisé. Il est donc utile de savoir que les valeurs dont le bit le plus fort (le plus à gauche) vaut 1 sont des nombres négatifs (représentation en complément à deux). L'évaluation de `~x` aura le même résultat que l'évaluation de `-x - 1`.



#### Opérateurs binaires de décalage

Les opérateurs binaires de décalage utilisent deux opérandes : le premier indiquant la quantité à décaler et le second indiquant de combien de bits on décale le premier opérande. La direction du décalage est spécifiée grâce à l'opérateur.

Les opérateurs binaires de décalage convertissent leurs opérandes en entiers sur 32 bits et renvoient un résultat dont le type est le même que l'opérande gauche.

Les opérateurs de décalage sont énumérés dans le tableau qui suit.

| Opérateur                                                    | Description                                                  | Exemple                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Décalage à gauche (`<<`)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#<<_(décalage_à_gauche)) | Cet opérateur décale le premier opérande d'un nombre de bits donné sur la gauche. Les bits en trop sont ignorés et des bits à zéro sont introduits à droite. | `9<<2` renvoie 36, car 1001, décalé de 2 bits à gauche, devient 100100, dont la représentation en base 10 est 36. |
| [Décalage à droite avec propagation du signe (`>>`)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#>>_(décalage_à_droite_avec_propagation_du_signe)) | Cet opérateur décale le premier opérande d'un nombre de bits donné sur la droite. Les bits en trop sont ignorés et des bits correspondants au bit de signe sont introduits à gauche. | `9>>2` renvoie 2, car 1001, décalé de 2 bits à droite, devient 10 représentant 2. De même `-9>>2` renvoie -3, car le signe est préservé. |
| [Décalage à droite avec zéros (`>>>`)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#>>>_(décalage_à_droite_avec_insertion_de_zéros)) | Cet opérateur décale le premier opérande d'un nombre de bits donné sur la droite. Les bits en trop sont ignorés et des bits à 0 sont introduits à gauche. | `19>>>2` renvoie 4, car 10011, décalé de 2 bits, devient 100 qui représente 4. Pour les nombres positifs, cet opérateur et l'opérateur précédent renvoient les mêmes résultats. |



### Opérateurs logiques

Les [opérateurs logiques](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_logiques) sont généralement utilisés avec des valeurs booléennes. Dans ce cas, il renvoient une valeur booléenne. Les opérateurs `&&` et `||` renvoient en fait une valeurs d'un des opérandes et si ces opérateurs sont utilisés avec des valeurs non-booléennées, ils pourront renvoyer une valeur non-booléenne. Les opérateurs logiques sont décrits dans le tableau qui suit.

| Opérateur                                                    | Usage            | Description                                                  |
| ------------------------------------------------------------ | ---------------- | ------------------------------------------------------------ |
| [ET logique](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_logiques#Logical_AND_.28&&.29) (`&&`) | `expr1 && expr2` | Renvoie `expr1` s'il peut être converti à false, sinon renvoie `expr2`. Dans le cas où on utilise des opérandes booléens, `&&` renvoie `true` si les deux opérandes valent `true`, `false` sinon. |
| [OU logique](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_logiques#OU_logique_(.7C.7C)) (`||`) | `expr1 || expr2` | Renvoie `expr1` s'il peut être converti à `true`, sinon renvoie `expr2`. Dans le cas où on utilise des opérandes booléens, `||` renvoie `true` si l'un des opérandes vaut `true`, si les deux valent `false`, il renvoie `false`. |
| [NON logique ](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_logiques#Logical_NOT_.28.21.29)(`!`) | `!expr`          | Renvoie `false` si son unique opérande peut être converti en `true`, sinon il renvoie `true`. |

Les exemples d'expressions qui peuvent être converties à `false` sont celles qui sont évaluées à `null`, 0, `NaN`, la chaîne de caractères vide (""), ou `undefined`.

Le code qui suit montre des exemples de l'utilisation de l'opérateur logique ET (&&).

```js
var a1 =   true && true;     // t && t renvoie true
var a2 =   true && false;    // t && f renvoie false
var a3 =  false && true;     // f && t renvoie false
var a4 =  false && (3 == 4); // f && f renvoie false
var a5 = "Chat" && "Chien";  // t && t renvoie Chien
var a6 =  false && "Chat";   // f && t renvoie false
var a7 = "Chat" && false;    // t && f renvoie false
```

Les exemples suivants montrent l'utilisation de l'opérateur logique OU (||).

```js
var o1 =   true || true;     // t || t renvoie true
var o2 =  false || true;     // f || t renvoie true
var o3 =   true || false;    // t || f renvoie true
var o4 =  false || (3 == 4); // f || f renvoie false
var o5 = "Chat" || "Chien";  // t || t renvoie Chat
var o6 =  false || "Chat";   // f || t renvoie Chat
var o7 = "Chat" || false;    // t || f renvoie Chat
```

Les exemples suivants montrent l'utilisation de l'opérateur logique NON (!).

```js
var n1 = !true;   // !t renvoie false
var n2 = !false;  // !f renvoie true
var n3 = !"Chat"; // !t renvoie false
```



#### Evaluation rapide

Les expressions logiques sont évaluées de gauche à droite. Cette évaluation utilise des tests pour savoir s'il est possible d'utiliser des « raccourcis » correspondant aux règles suivantes :

- `false` && *n'importe quoi* sera évalué à `false`.
- `true` || *n'importe quoi* sera évalué à `true`.

Les règles logiques garantissent la validité de ces évaluations, il faut noter que le second opérande n'est pas du tout évalué, empêchant ainsi les effets de bords cachés, liés à cette évaluation.



### Opérateurs de chaînes de caractères

En plus des opérateurs de comparaisons qui peuvent être utilisés sur des chaînes de caractères, il existe l'opérateur de concaténation (+) permettant de concaténer deux chaînes de caractères. Le résultat de cette opération est la fusion des deux opérandes en une même chaîne de caractères. Ainsi :

```js
console.log("ma " + "chaîne"); // affichera "ma chaîne" dans la console
```

L'opérateur court += peut également être utilisé pour concaténer des chaînes. Par exemple :

```js
var maChaîne = "alpha";
maChaîne += "bet"; // l'expression sera évaluée en "alphabet"
                   // et cette valeur sera affectée à maChaîne
```



### Opérateur conditionnel ternaire

L'[opérateur conditionnel](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_conditionnel) est le seul opérateur JavaScript qui utilise trois opérandes. L'expression utilisant l'opérateur peut prendre une valeur parmi deux selon une condition donnée. Cet opérateur s'utilise avec la syntaxe suivante :

```
condition ? val1 : val2
```

Si `condition` vaut `true`, l'opérateur vaudra `val1`. Sinon il vaudra `val2`. Il est possible d'utiliser l'opérateur conditionnel aux mêmes endroits qu'un opérateur standard.

On peut par exemple avoir :

```js
var statut = (âge >= 18) ? "adulte" : "mineur";
```

Cette instruction assigne la valeur "adulte" à la variable `status` si la variable `âge` est supérieure ou égale à 18. Sinon, on lui affecte la valeur "mineur".



### La virgule comme opérateur

L'[opérateur virgule](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_virgule) (`,`) évalue ses deux opérandes et renvoie la valeur du second opérande. Cet opérateur est principalement utilisé dans les boucles for pour permettre à plusieurs variables d'être modifiées à chaque itération de la boucle.

Ainsi, si on a un tableau à 2 dimensions avec 10 lignes et colonnes, on peut utiliser la virgule comme opérateur pour incrémenter deux variables à la fois. Le code qui suit imprime les valeurs contenues sur la diagonale du tableau :

```js
var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);
```



### Opérateurs unaires

#### `delete`

L'opérateur [delete](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_delete) supprime un objet, une propriété d'un objet ou un élément d'un tableau à partir de sa position dans le tableau. La syntaxe de cet opérateur est la suivante :

```js
delete monObjet;
delete monObjet.propriété;
delete monObjet[index];
delete propriété; // uniquement valide au sein d'une instruction with
```

où on a `monObjet` qui est le nom de l'objet, `propriété` qui est une propriété existante et `index` un entier indiquant la position d'un élément dans un tableau.

La quatrième instruction n'est valide qu'au sein d'une instruction `with` et permet de supprimer une propriété d'un objet.

Il est possible d'utiliser l'opérateur `delete` pour supprimer les variables déclarées implicitement mais pas celles déclarées avec `var`. Si l'opérateur fonctionne correctement, il change la propriété ou l'élément vers la valeur `undefined`. L'opérateur `delete` renvoie `true` si l'opération de suppression est possible, `false` sinon.

```js
x = 42;
var y = 43;
monobj = new Number();
monobj.h = 4;    // création de la propriété h
delete x;        // renvoie true (suppression possible si déclaration implicite)
delete y;        // renvoie false (suppression impossible si déclaration avec var si la variable n'est pas une propriété)
delete Math.PI;  // renvoie false (suppression impossible pour les propriétés pré-définies)
delete monobj.h; // renvoie true (suppression possible des propriétés définies par l'utilisateur)
delete monobj;   // renvoie true (suppression possible si déclaration implicite)
```



##### Suppression d'éléments d'un tableau

Lorsqu'on supprime un élément d'un tableau, la longueur du tableau n'est pas modifiée. Ainsi, si on supprime `a[3]`, `a[4]` restera `a[4]` (même position et valeur) alors que `a[3]` sera `undefined`.

Lorsque l'opérateur `delete` supprime un élément d'un tableau, cet élément n'appartient plus au tableau. Dans l'exemple qui suit, `arbres[3]` est supprimé mais il est toujours accessible et renvoie `undefined`.

```js
var arbres = new Array("sequoia", "laurier", "cèdre", "chêne", "érable");
delete arbres[3];
if (3 in arbres) {
  // Ceci ne sera pas exécuté
}
```

Pour qu'un élément continue à exister mais qu'il vaille `undefined`, on utilisera le mot-clé` undefined` plutôt que l'opérateur `delete`. Dans l'exemple qui suit, arbres`[3]` est modifié pour valoir `undefined` et l'élément du tableau continue à exister :

```js
var arbres = new Array("sequoia", "laurier", "cèdre", "chêne", "érable");
arbres[3] = undefined;
if (3 in arbres) {
  // Ceci sera exécuté
}
```



#### `typeof`

L'[opérateur `typeof`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_typeof) peut être utilisé de deux façons distinctes :

1. ```
   typeof opérande
   ```

2. ```
   typeof (opérande)
   ```

L'opérateur `typeof` renvoie une chaîne de caractères indiquant le type de l'opérande (qui n'est pas évalué). `opérande` correspond à la chaîne de caractère, la variable, le mot-clé ou l'objet dont on souhaite renvoyer le type. L'utilisation des parenthèses est facultative.

Soient les définitions de variables suivantes :

```js
var maFonction = new Function("5 + 2");
var forme = "round";
var taille = 1;
var toto = ["Pomme", "Poire", "Orange"];
var jour = new Date();
```

L'opérateur `typeof` renverra les résultats suivants :

```js
typeof maFonction; // renvoie "function"
typeof forme;      // renvoie "string"
typeof taille;     // renvoie "number"
typeof toto;       // renvoie "object"
typeof jour;       // renvoie "object"
typeof inexistant; // renvoie "undefined"
```

En ce qui concerne les mots-clés `true` et `null`, l'opérateur `typeof` renvoie les résultats suivants :

```js
typeof true; // renvoie "boolean"
typeof null; // renvoie "object"
```

Pour une chaîne de caractères ou un nombre, `typeof` renvoie les résultats suivants :

```js
typeof 62;            // renvoie "number"
typeof 'Hello world'; // renvoie "string"
```

L'opérateur `typeof`, lorsqu'il est utilisé avec des propriétés, renvoie le type de valeur contenue dans la propriété :

```js
typeof document.lastModified; // renvoie "string"
typeof window.length;         // renvoie "number"
typeof Math.LN2;              // renvoie "number"
```

Pour les méthodes et les fonctions, l'opérateur `typeof` renvoie les résultats suivants :

```js
typeof blur;        // renvoie "function"
typeof eval;        // renvoie "function"
typeof parseInt;    // renvoie "function"
typeof shape.split; // renvoie "function"
```

Pour les objets pré-définis, l'opérateur `typeof` fonctionne ainsi :

```js
typeof Date;     // renvoie "function"
typeof Function; // renvoie "function"
typeof Math;     // renvoie "object"
typeof Option;   // renvoie "function"
typeof String;   // renvoie "function"
```



#### `void`

L'[opérateur `void`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_void) peut être utilisé de deux façons :

1. ```
   void (expression)
   ```

2. ```
   void expression
   ```

L'opérateur `void` indique qu'une expression doit être évaluée sans retourner de valeur. `expression` étant une expression JavaScript à évaluer. Les parenthèses sont facultatives mais les utiliser permet d'avoir une meilleur lisibilité du code.

L'opérateur `void` peut être utilisé pour spécifier une expression comme un lien hypertexte, l'expression est évaluée mais n'est pas chargée à la place du document actuel.

Le fragment de code qui suit crée un lien hypertexte qui ne fait rien lorsque l'utilisateur clique dessus. Lorsqu'on clique sur le lien, `void(0)` est évalué à `undefined`, n'ayant aucun effet.

```html
<A HREF="javascript:void(0)">Cliquer ici pour ne rien faire</A>
```

Le code suivant crée un lien hypertexte qui envoie un formulaire lorsque l'utilisateur clique dessus.

```html
<A HREF="javascript:void(document.form.submit())">
Cliquer ici pour envoyer</A>
```



### Opérateurs relationnels

Un opérateur relationnel compare ses opérandes et renvoie une valeur booléenne selon que le résultat de la comparaison est vrai ou faux.



#### `in`

L'[opérateur `in`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_in) renvoie `true` si la propriété indiquée fait partie de l'objet donné. Cet opérateur s'utilise avec la syntaxe suivante :

```
nomOuNumeroPropriete in monObjet
```

avec `nomOuNumeroPropriete` qui est une chaîne de caractères, une expression numérique ou un symbole correspondant au nom d'une propriété ou un indice de tableau, `monObjet` est le nom d'un objet.

Les exemples qui suivent utilisent cet opérateur `in`.

```js
// Tableaux
var arbres = new Array("sequoia", "laurier", "cèdre", "chêne", "érable");
0 in arbres;         // renvoie true
3 in arbres;         // renvoie true
6 in arbres;         // renvoie false
"laurier" in arbres; // renvoie false (l'opérateur se base sur l'indice et pas
                     // sur la valeur)
"length" in arbres;  // renvoie true (length est une propriété d'un objet Array)

// Objets pré-définis
"PI" in Math;         // renvoie true
var myString = new String("coral");
"length" in myString; // renvoie true

// Objets définis par l'utilisateur
var maVoiture = {fabricant: "Honda", modèle: "Accord", year: 1998};
"fabricant" in maVoiture; // renvoie true
"modèle" in maVoiture;    // renvoie true
```



#### `instanceof`

L'[opérateur instanceof](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/instanceof) renvoie `true` si l'objet donné est du type spécifié. Cet opérateur s'utilise avec la syntaxe suivante :

```
nomObjet instanceof typeObjet
```

avec `nomObjet` qui est le nom de l'objet dont on souhaite comparer le type à `typeObjet`, `typeObjet` étant un type d'objet tel que [`Date`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date) ou [`Array`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array).

`instanceof` peut être utilisé pour confirmer le type d'un objet pendant l'exécution. Ainsi, on peut gérer les exceptions en prévoyant différents cas pour différents types d'exception éventuellement levées.

Dans l'exemple qui suit, le code utilise l'opérateur `instanceof` afin de déterminer si `jour` est un objet `Date`. C'est le cas, les instructions contenues dans le bloc après l'instruction `if` sont donc exécutées.

```js
var jour = new Date(2007, 01, 22);
if (jour instanceof Date) {
  // instructions à exécuter
}
```



### Précédence des opérateurs

La *précédence* des opérateurs indique l'ordre dans lequel ils sont appliqués lors de l'évaluation d'une expression. L'utilisation de parenthèses permet de surcharger la relation de précédence.

Le tableau qui suit décrit les précédences des opérateurs, dans l'ordre décroissant.

| Type d'opérateur          | Opérateurs individuels                   |
| ------------------------- | ---------------------------------------- |
| membre                    | `. []`                                   |
| appel/création d'instance | `() new`                                 |
| négation/incrémentation   | `! ~ - + ++ -- typeof void delete`       |
| multiplication/division   | `* / %`                                  |
| addition/soustraction     | `+ -`                                    |
| décalage binaire          | `<< >> >>>`                              |
| relationnel               | `< <= > >= in instanceof`                |
| égalité                   | `== != === !==`                          |
| ET binaire                | `&`                                      |
| OU exclusif binaire       | `^`                                      |
| OU binaire                | `|`                                      |
| ET logique                | `&&`                                     |
| OU logique                | `||`                                     |
| conditionnel              | `?:`                                     |
| assignation               | `= += -= *= /= %= <<= >>= >>>= &= ^= |=` |
| virgule                   | `,`                                      |

Une version plus détaillée de cette table peut être trouvée dans la [référence JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Précédence_des_opérateurs#Table).

------

## Expressions

Un expression correspond à une unité de code valide qui est résolue en une valeur.

D'un point de vue syntaxique, toute expression valide se résout en une valeur. D'un point de vue conceptuel cependant, il y a deux types d'expressions : celles avec des effets de bord (qui, par exemple, affectent une valeur à une variable) et celles qui, d'une certaine façon, sont évaluées et sont résolues en une valeur.

L'expression `x = 7` affecte une valeur (premier type). Dans celle-ci, on utilise l'opérateur `=` pour affecter la valeur 7 à la variable `x`. L'expression elle-même est évaluée à 7.

Le code `3 + 4` correspond au second type d'expression. On utilise ici l'opérateur `+` pour ajouter trois à quatre sans affecter le résultat (7) à une variable.

Les expressions JavaScript peuvent être rangées selon différentes catégories :

- Arithmétiques : l'expression est évaluée en un nombre (par exemple 3.14159)
- Textuelles : l'expression est évaluée en une chaîne de caractères
- Logiques : l'expression est évaluée en `true` ou `false`
- Primaires : Les mots-clés basiques et les expressions générales en JavaScript
- Expressions vers la gauche : Les valeurs à gauche sont la cible d'une affectation



### Expressions primaires

Ces expressions correspondent aux mots-clés et aux expressions générales en JavaScript.

#### `this`

Le [mot-clé `this`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this) permet de faire référence à l'objet courant. En général, on l'utilise au sein d'une méthode pour faire référence à l'objet qui a utilisé la méthode. Il s'utilise de cette façon :

```
this["nomPropriété"]
this.nomPropriété
```

Soit une fonction qui valide un objet si sa propriété `value` est comprise entre deux valeurs :

```js
function valide(obj, valMin, valMax){
  if ((obj.value < valMin) || (obj.value > valMax))
    console.log("Valeur incorrecte !");
}
```

Il est possible d'appeler `valide` pour chaque gestionnaire d'événement `onChange` des éléments du formulaire, et d'utiliser le mot-clé `this` pour passer l'élément même en argument :

```html
<p>Entrez un nombre entre 18 et 99 :</p>
<input type="text" nom="age" size=3 onChange="valide(this, 18, 99);">
```



#### Opérateur de groupement

L'opérateur de groupement `( )` permet de contrôler la précédence de l'évaluation dans les expressions. On peut ainsi forcer l'évaluation d'une addition avant l'évaluation d'une multiplication ou d'une division.

```js
var a = 1;
var b = 2;
var c = 3;

// précédence par défaut
a + b * c;   // 7
// ce qui correspond à :
a + (b * c); // 7

// on peut utiliser l'opérateur
// pour effectuer l'addition en premier
(a + b) * c;   // 9

// ce qui équivaut à :
a * c + b * c; // 9
```



### Expressions vers la gauche

Les valeurs à gauches de ces expressions sont la cible d'une affectation.

#### `new`

L'[opérateur `new`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new) permet de créer une instance d'un objet défini par l'utilisateur ou d'un objet dont le type est un des types d'objets natifs. Cet opérateur utilise la syntaxe suivante :

```js
var nomObjet = new typeObjet([param1, param2, ..., paramN]);
```



#### `super`

Le [mot-clé `super`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/super) est utilisé afin d'appeler des fonctions disponibles sur un objet parent. Il peut notamment être utilisé avec les [classes](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes) pour appeler le constructeur parent.

```js
super([arguments]); // invoque le constructeur parent
super.functionParent([arguments]);
```



#### Opérateur de décomposition

L'[opérateur de décomposition](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateur_de_décomposition) permet de développer une expression là où plusieurs argument (pour les appels de fonction) ou plusieurs éléments (pour les littéraux de tableaux) sont attendus.

Par exemple, si on a tableau et qu'on souhaite créer un nouveau tableau qui contient l'ancien, on peut soit utiliser une combinaison des méthodes `push`, `splice`, `concat`, soit utiliser la syntaxe de décomposition qui s'avère plus concise :

```js
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
```

L'opérateur de décomposition fonctionne de façon semblable avec les appels de fonction :

```js
function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);
```