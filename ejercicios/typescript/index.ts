console.log('Hello, typescript');

function add(a: number, b: number) {
   return a + b;
}

const c = add(2, 3);

//Boolean
let muted: boolean = true;
muted = false;

//Number
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

//String
let nombre: string =  'Carlos';
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people =  ['kene', 'carlos'];
people.push('tres');

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Carlos');
peopleAndNumbers.push(3);

//Enum
enum Color {
   Verde,
   Rojo,
   Azul,
}

// enum ColorLiteral {
//    Verde = 'Verde',
//    Rojo = 'Rojo',
//    Azul = 'Azul',
// }

// let colorFavorito: Color = 'rojo';
let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard'};

//Object
let someObject: object = { type: 'Wildcard'};