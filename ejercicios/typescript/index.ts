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

// Funciones
function sum(a: number, b: number): number {
   return a + b;
}

const result = add(3, 3);

function createAdder(a: number): (number) => number {
   return function(b: number): number {
      return a + b;
   }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string): string {
   return `${firstName} ${lastName}`;
}

const carlosFull = fullName('Carlos', 'Eduardo');
// const carlosFirst = fullName('Carlos'); // Error
function fullNameOctional(firstName: string, lastName?: string): string {
   return `${firstName} ${lastName}`;
}

const carlosFirst = fullNameOctional('Carlos'); // Carlos undefined

function fullNameInic(firstName: string, lastName: string = 'Eduardo'): string {
   return `${firstName} ${lastName}`;
}

const carlosCompl = fullNameInic('Carlos'); // Carlos Eduardo

// Interfaces
interface Rectangulo {
   ancho: number;
   alto: number;
   color?: Color;
}

let rect: Rectangulo = {
   ancho: 4,
   alto: 6,
   // color: Color.Rojo,
}

function area(r: Rectangulo): number {
   return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
   return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());