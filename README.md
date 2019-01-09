#UNIT TEST CON MOCHA Y CHAI

En este ejercicio vamos a realizar test unitarios de funciones. Vamos a utilizar Mocha como framework
para realizar los test y Chai como librería de aserciones.

Puedes encontrar las funciones que van a ser testadas en el archivo index.js, mientras que los test se deben encontrar 
en los archivos de la carpeta test: 

- test_assert.js: Tendrá los test que utilicen la interface assert.
- test_expect.js: Tendrá los test que utilicen la interface expect.
- test_should.js: Tendrá los test que utilicen la interface should.

## Iteracion 1
 
Completa el archivo test_assert.js para probar las diferentes funciones declaradas en el
archivo index.js utilizando la interface assert, debes probar cosas como:

 - El resultado obtenido es igual al resultado esperado.
 - El caso en el que la función devuelve un error.
 - Caso de fallo, en el que se espera un valor y es devuelto otro diferente.
 - El tipo de valor retornado coincide con el que devuelve la función.

## Iteración 2

Repite la iteración 1 utilizando el archivo test_expect.js y la interface expect. Utiliza los mismos
casos de prueba que en la anterior iteración.
## Iteración 3

Repite la iteración 1 pero esta vez, utilizando el archivo test_should.js y la interface should. Realiza los mismos 
casos de prueba.

#Bonus
Añade una nueva función que reciba un número de grados (fahrenheit) y los convierta
a grados centígrados y realiza los test que creas convenientes para las diferentes interfaces.

Recuerda que 1ºC = 33,8 ºF
