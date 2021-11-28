/*
case sensitive
*/




//Utilizando objetos
var expression1 = new RegExp('abc'); //patron
expression1.test('abcdel'); // verifica si existe la expression dentro del string que recibe test



//usando literales
var expression2 = /abc/;

var parrafo = /text1 \/n text2/

//verifica que existe alguno de los numeros de la expresion en el texto
var expresion3 = /[0123456789]/
expresion3.test('Sucedio en 1996') // retorna true

//verifica el rango 0 a 9
var expresion4 = /[0-9]/
expresion4.test('Sucedio en 1996') // devuelve true

//verifica el rango 0a9 y el rango a hasta z
var expresion5 = /[0-9a-z]/
expresion5.test('Sucedio en 1996') //retorna true

//verifica el rango 0a9 y el rango a hasta z y A hasta Z
var expresion5 = /[0-9a-zA-Z]/
expresion5.test('Sucedio en 1996') //retorna true


/*Shorcuts*/
// con \d busca un numero
var expresion6 = /\d\d-\d\d-\d\d\d\d/
expresion6.test('Sucedio el 29-06-1996') //retorna true

// con \d busca si existe un numero
var expresion7 = /[\d]/
expresion7.test('Sucedio el 29-06-1996') //retorna true

/*Negacion*/
// con \d busca si NO existe un numero
var expresion8 = /[^\d]/
expresion8.test('Sucedio el 29-06-1996') //retorna true


/*Repeticiones*/
/*
+ : puede haber uno o mas
* : puede haber cero o mas
*/
var expresion9 = /[\d+]/
expresion9.test('Sucedio el 29-06-1996') //retorna true
expresion9 = /[\d*]/
expresion9.test('Sucedio el 29-06-1996') //retorna true

/*Opcionales*/
//verifica si existe o no la letra n
var expresion10 = /Hola mun?do/ 
expresion10.test('Hola mudo') //retorna true

/*Conteo de patrones*/
var expresion11 = /\d{1,2}-\d{1,2}-\d{4}/
expresion11.test('Sucedio el 29-06-1996') //retorna true
expresion11 = /\d{1,2}-\d{1,2}-\d{4}/

/*Patrones No case sensitive*/
 //verifica el patron sin importar si es mayusculas o minusculas
var expresion12 = /Hola mundo/i 
expresion12.test('Hola Mundo') //retorna true

/*Agrupado de expresiones-*/
var expresion13 = /Woo+(hoo+)+/i 
expresion13.test('Whoooooohoooo') //retorna true

/*Otros metodos*/

//exec devuelve un array con info
var expresion14 = /\d+/.exec('Del año 2021') 

//match devuelve un array con info
var expresion15 = "Del año 2021".match(/\d+/)

/*Limitadores*/
