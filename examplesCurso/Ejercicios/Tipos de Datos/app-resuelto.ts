// Tipos
var batman:string = "Bruce";
var superman:string = "Clark";

var existe:boolean = false;

// Tuplas
var parejaHeroes:[string] = [batman,superman];
var villano:[string,number,boolean] = ["Lex Lutor",5,true];

// Arreglos
var aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza {
  acuaman=0,
  batman=1,
  flash=5,
  superman=100
}

var fuerzaFlash:number = Fuerza.flash;
var fuerzaSuperman:number = Fuerza.superman;
var fuerzaBatman:number = Fuerza.batman;
var fuerzaAcuaman:number = Fuerza.acuaman;

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
var poderMax:number = 100;
var largoDelPoder:number = poderMax.toString().length;
console.log( largoDelPoder );