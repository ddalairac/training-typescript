// Source: https://www.typescriptlang.org/play/

// * Encapsulación ******************************************************************
/* public, private, protected
permite que todo lo referente a un objeto quede aislado dentro de éste.
*/

// 
// * Abstraccion ******************************************************************
/* Clases 
Nos abstrae de la complejidad que haya dentro dándonos una serie de atributos y comportamientos (propiedades y funciones) 
que podemos usar sin preocuparnos de qué pasa por dentro cuando lo hagamos.
*/

class Greeter {
  private greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  public greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
  alert(greeter.greet());
}
document.body.appendChild(button);


// * Herencia ******************************************************************

abstract class Animal {
  constructor(public name: string) { }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

/* Tipo Genérica */

class GenGreeter<T> {
  greeting: T;
  constructor(message: T) {
    this.greeting = message;
  }
  greet() {
    return this.greeting;
  }
}

let genGreeter = new GenGreeter<string>("Hello, world");

let genButton = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
  alert(greeter.greet());
}

document.body.appendChild(button);




// * Polimorfismo ******************************************************************
/* "polys" (muchos) y "morfo" (forma), cualidad de tener muchas formas. 
 varios objetos de diferentes clases, pero con una base común, se pueden usar de manera indistinta, 
 sin tener que saber de qué clase exacta son para poder hacerlo.

 En el siguiente ejemplo, puede haber diferentes clases, pero todas tendran el metodo "move"
*/

const poli: Animal[] = [
  new Snake('Cobra'),
  new Horse("Mustang"),
  // new Greeter("Hello") // Error, porque no deciende de animal
]
poli[0].move(10);



/* Sobrecarga 
Es un tipo de Poliformismo, donde un mismo metodo cambia su funcion dependiendo de los parametros de entrada. 
Esta caracteristica no existe en JS, pero Typescript nos permite especificar el tipo de salida del metodos.
*/

function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: number, b: string): string
function add(a: string, b: number): string
function add(a: number | string, b: number | string) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

// Con parametro opcional
function isAdd(a: number): number;
function isAdd(a: number, b: number): number
function isAdd(a: number, b: string): string
function isAdd(a: number, b?: string | number) {
  if (b) {
    if (typeof b === 'number') {
      return a + b;
    }
    else {
      return `${a} and ${b}`;
    }
  }
  return a
}

// Solo si el tipo de salida va a cambiar, en estos casos no aria falta.
function createName(name: string | string[]): string {
  if (typeof name === "string") {
    return name;
  }
  else {
    return name.join(" ");
  }
}

var greetingMessage = `Greetings, ${createName(["Sam", "Smith"])}`;
alert(greetingMessage);