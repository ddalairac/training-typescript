//******************************************//
// HOLA MUNDO
//
function holaMundo(nombre:String){
	return "Hola Mundo!! Soy " + nombre;
}

var nombre = "El Chino";

//console.log(holaMundo(nombre));













//******************************************//
// Variables y tipos de datos
//

var nombre:string = "El Chino";
var edad:number = 27;
let programador:boolean = true;
let langs:string[] = ["PHP" , "MySQL", "Js"];
let años:Array<number> = [1 , 3, 5];

// Tuplas
var jose:string = "Jose";
var juan:string = "Juan";

var nombres:[string] = [jose,juan]; // Le ponemos tipo string, porque las 2 variables que estamos llamando son de ese tipo -.
var estudiante:[string,number,boolean] = ["Marcelo",25,true]; // Declaramos en orden los tipos de datos que tiene el arreglo -.

// Void
function holaDeNuevo():void{ // Void es para indicar que un metodo no devuelve ninguna informacion
  console.log("Como andas?");
}

// Enumeraciones
enum Edad {
  sergio=49,
  cristina=61,
  mauricio=56 // Si lo cambiamos a string, va a arrojar error en la variable porque cambia el tipo de dato
}

// Le asigna un tipo 'Edad' a cada uno ya que estamos usando el objeto 'enum' para definir los valores
var Sergio:Edad = Edad.sergio;
var Cristina:Edad = Edad.cristina;
var Mauricio:number = Edad.mauricio; // Si le ponemos tipo number no da error porque coincide el tipo de dato

//console.log(holaMundo(nombre + " - " + edad));

//nombre = 12 //--> Esto dará un error por querer asignar un atributo de distinto tipo

















//******************************************//
// Diferencias entre VAR y LET - ES6
//


var a = 7;
var b = 12;

if (a === 7) {
	let a = 4; // Ésta variable declarada con LET sólo va a tener un alcance en este bloque if
	var b = 1;
	//console.log('Dentro del if: '+a+'--'+b); // a = 4 -- b = 1 // Aqui solo 'A' cambia porque let tiene alcance solo dentro de este bloque
}

//console.log('Fuera del if: '+a+'--'+b); // a = 7 -- b = 1 // Aqui vemos que 'A' mantiene el mismo valor del principio, y 'B' siempre mantuvo el ultimo valor asignado (1)








//******************************************//
// FUNCIONES Y TIPADO
//

function devuelveNumero(num:number):string{
	return "El numero es: "+num;
}

//console.log(devuelveNumero(34));

//////////////

function devuelveString(texto:string):number{
	if(texto == "hola"){
		var num = 10;
	}else{
		var num = 99;
	}
	return num;
}

//console.log(devuelveString("num"));

//////////////

function devuelveBoolean(texto:string):boolean{
	if(texto == "hola"){
		var num = true;
	}else{
		var num = false;
	}
	return num;
}

//console.log(devuelveBoolean("hola"));

//******************************************//
// CLASES, PROPIEDADES Y MÉTODOS
//

class Coche{
	public color:string;
	public modelo:string;
	public velocidad:number = 1;

	public getColor(){
		return this.color;
	}

	public setColor(color:string){
		this.color = color;
	}

	// Agregamos metodos a nuestra clase
	public acelerar(){
		this.velocidad = this.velocidad + 1;
	}

	public getVelocidad():number{
		return this.velocidad;
	}

}

// Instanciar o crear el objeto
let coche = new Coche;
coche.setColor('Rojo');

// Modificamos el comportamiento de nuestro objeto mediante metodos
coche.acelerar();
coche.acelerar();

//console.log('El color del auto es: '+coche.getColor()+' Y su velocidad es: '+coche.getVelocidad());

let coche_dos = new Coche;
coche_dos.setColor('Verde');
//console.log('El color del auto 2 es: '+coche_dos.getColor());

let coche_tres = new Coche;
coche_tres.setColor('Azul');
//console.log('El color del auto 3 es: '+coche_tres.getColor());


//******************************************//
// CONSTRUCTORES
//

class CocheConst {
	public color:string;
	public modelo:String;
	public velocidad:number;

	constructor(modelo = "") {
		this.color = "Blanco";
		this.velocidad = 0;
		if (modelo == ""){
			this.modelo = "Modelo Generico";
		}else{
			this.modelo = modelo;
		}
	}
	public getModelo(){
		return this.modelo;
	}
}

//let CocheConstructor = new CocheConst(); // Primero probamos instanciar el objeto sin pasarle el parametro de modelo
let CocheConstructor = new CocheConst("Volvo S90"); // Luego pasamos parametro de modelo y vemos como toma este dato -.
//console.log("El modelo del auto es " + CocheConstructor.getModelo());

//******************************************//
// TEMPLATES LITERALES
//

class Heroe {

     public name: string;

    constructor(theName: string) { this.name = theName; }
        public mostrar() {
        	//console.log(`Hola, yo soy ${this.name}.`);
    }
}

let imBatman = new Heroe('Batman');
imBatman.mostrar();

//******************************************//
// HERENCIA
//

class Animal {

     public name: string;

     constructor(theName: string) { this.name = theName; }

	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);

    }
}

class Snake extends Animal {

	constructor(name: string) { 
		super(name); // super: llama al constructor del padre
	}

	move(distanceInMeters = 5) {
		console.log("Slithering...");
		super.move(distanceInMeters);

	}

}

class Rhino extends Animal {

     constructor(name: string) { super(name); }

         move(distanceInMeters = 10) {
         console.log("Slithering...");
         super.move(distanceInMeters);

     }
}

class Elephant extends Animal {

     constructor(name: string) { super(name); }

         move(distanceInMeters = 20) {
         console.log("Slithering...");
         super.move(distanceInMeters);

     }

}

// Para poder Crear un array con este typo de objetos tenemos que utilizar la clase Padre Ej:

let array : Animal[] = [ new Rhino('Rinocerator'), new Snake("Serpentina"), new Elephant("Elefanton") ];

// El acceso a este ejemplo sería muchisimo más sencillo
let ej2 = {Rhino: new Rhino('Rinocerator'), Snake: new Snake("Serpentina"), Elephant: new Elephant("Elefanton")};

//console.log(array);


//******************************************//
// VISIBILIDAD
//

class CocheVis{
	public color:string;
	public velocidad:number = 1;

	public getColor(){
		return this.color;
	}

	private setColor(color:string){
		this.color = color;
	}

	protected getVelocidad():number{
		return this.velocidad;
	}

}

let visibilidad = new CocheVis();
//visibilidad.getVelocidad(); Esto arrojará un error porque este metodo es protegido y solo se puede acceder desde el mismo objeto o sus herencias -.
//visibilidad.setColor("Rojo"); Esto arrojará un error porque este metodo es privado y solo se puede acceder desde el objeto -.

//******************************************//
// INTERFACES
//

interface CocheBase{
	getModelo():String;
	getVelovidadMax():Number;
}

class CocheInter implements CocheBase {
	public modelo:String;
	public velocidad:Number;

	constructor(modelo:String,velocidad:Number){
		this.modelo = modelo;
		this.velocidad = velocidad;
	}

	public getModelo():String{
		return this.modelo;
	}

	public getVelovidadMax():Number{
		return this.velocidad;
	}
}

let cocheIn = new CocheInter("BmW",220);
//console.log("Mi auto es un " + cocheIn.getModelo() + ". Y tiene una velocidad maxima de " + cocheIn.getVelovidadMax() + "km/h.");


//******************************************//
// 
//