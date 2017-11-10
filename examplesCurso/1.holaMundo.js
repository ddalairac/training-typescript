"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//******************************************//
// HOLA MUNDO
//
function holaMundo(nombre) {
    return "Hola Mundo!! Soy " + nombre;
}
var nombre = "El Chino";
//console.log(holaMundo(nombre));
//******************************************//
// Variables y tipos de datos
//
var nombre = "El Chino";
var edad = 27;
var programador = true;
var langs = ["PHP", "MySQL", "Js"];
var años = [1, 3, 5];
// Tuplas
var jose = "Jose";
var juan = "Juan";
var nombres = [jose, juan]; // Le ponemos tipo string, porque las 2 variables que estamos llamando son de ese tipo -.
var estudiante = ["Marcelo", 25, true]; // Declaramos en orden los tipos de datos que tiene el arreglo -.
// Void
function holaDeNuevo() {
    console.log("Como andas?");
}
// Enumeraciones
var Edad;
(function (Edad) {
    Edad[Edad["sergio"] = 49] = "sergio";
    Edad[Edad["cristina"] = 61] = "cristina";
    Edad[Edad["mauricio"] = 56] = "mauricio"; // Si lo cambiamos a string, va a arrojar error en la variable porque cambia el tipo de dato
})(Edad || (Edad = {}));
// Le asigna un tipo 'Edad' a cada uno ya que estamos usando el objeto 'enum' para definir los valores
var Sergio = Edad.sergio;
var Cristina = Edad.cristina;
var Mauricio = Edad.mauricio; // Si le ponemos tipo number no da error porque coincide el tipo de dato
//console.log(holaMundo(nombre + " - " + edad));
//nombre = 12 //--> Esto dará un error por querer asignar un atributo de distinto tipo
//******************************************//
// Diferencias entre VAR y LET - ES6
//
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4; // Ésta variable declarada con LET sólo va a tener un alcance en este bloque if
    var b = 1;
    //console.log('Dentro del if: '+a+'--'+b); // a = 4 -- b = 1 // Aqui solo 'A' cambia porque let tiene alcance solo dentro de este bloque
}
//console.log('Fuera del if: '+a+'--'+b); // a = 7 -- b = 1 // Aqui vemos que 'A' mantiene el mismo valor del principio, y 'B' siempre mantuvo el ultimo valor asignado (1)
//******************************************//
// FUNCIONES Y TIPADO
//
function devuelveNumero(num) {
    return "El numero es: " + num;
}
//console.log(devuelveNumero(34));
//////////////
function devuelveString(texto) {
    if (texto == "hola") {
        var num = 10;
    }
    else {
        var num = 99;
    }
    return num;
}
//console.log(devuelveString("num"));
//////////////
function devuelveBoolean(texto) {
    if (texto == "hola") {
        var num = true;
    }
    else {
        var num = false;
    }
    return num;
}
//console.log(devuelveBoolean("hola"));
//******************************************//
// CLASES, PROPIEDADES Y MÉTODOS
//
var Coche = /** @class */ (function () {
    function Coche() {
        this.velocidad = 1;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    // Agregamos metodos a nuestra clase
    Coche.prototype.acelerar = function () {
        this.velocidad = this.velocidad + 1;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
// Instanciar o crear el objeto
var coche = new Coche;
coche.setColor('Rojo');
// Modificamos el comportamiento de nuestro objeto mediante metodos
coche.acelerar();
coche.acelerar();
//console.log('El color del auto es: '+coche.getColor()+' Y su velocidad es: '+coche.getVelocidad());
var coche_dos = new Coche;
coche_dos.setColor('Verde');
//console.log('El color del auto 2 es: '+coche_dos.getColor());
var coche_tres = new Coche;
coche_tres.setColor('Azul');
//console.log('El color del auto 3 es: '+coche_tres.getColor());
//******************************************//
// CONSTRUCTORES
//
var CocheConst = /** @class */ (function () {
    function CocheConst(modelo) {
        if (modelo === void 0) { modelo = ""; }
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == "") {
            this.modelo = "Modelo Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    CocheConst.prototype.getModelo = function () {
        return this.modelo;
    };
    return CocheConst;
}());
//let CocheConstructor = new CocheConst(); // Primero probamos instanciar el objeto sin pasarle el parametro de modelo
var CocheConstructor = new CocheConst("Volvo S90"); // Luego pasamos parametro de modelo y vemos como toma este dato -.
//console.log("El modelo del auto es " + CocheConstructor.getModelo());
//******************************************//
// TEMPLATES LITERALES
//
var Heroe = /** @class */ (function () {
    function Heroe(theName) {
        this.name = theName;
    }
    Heroe.prototype.mostrar = function () {
        //console.log(`Hola, yo soy ${this.name}.`);
    };
    return Heroe;
}());
var imBatman = new Heroe('Batman');
imBatman.mostrar();
//******************************************//
// HERENCIA
//
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino(name) {
        return _super.call(this, name) || this;
    }
    Rhino.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 10; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Rhino;
}(Animal));
var Elephant = /** @class */ (function (_super) {
    __extends(Elephant, _super);
    function Elephant(name) {
        return _super.call(this, name) || this;
    }
    Elephant.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 20; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Elephant;
}(Animal));
// Para poder Crear un array con este typo de objetos tenemos que utilizar la clase Padre Ej:
var array = [new Rhino('Rinocerator'), new Snake("Serpentina"), new Elephant("Elefanton")];
// El acceso a este ejemplo sería muchisimo más sencillo
var ej2 = { Rhino: new Rhino('Rinocerator'), Snake: new Snake("Serpentina"), Elephant: new Elephant("Elefanton") };
//console.log(array);
//******************************************//
// VISIBILIDAD
//
var CocheVis = /** @class */ (function () {
    function CocheVis() {
        this.velocidad = 1;
    }
    CocheVis.prototype.getColor = function () {
        return this.color;
    };
    CocheVis.prototype.setColor = function (color) {
        this.color = color;
    };
    CocheVis.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return CocheVis;
}());
var visibilidad = new CocheVis();
var CocheInter = /** @class */ (function () {
    function CocheInter(modelo, velocidad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    CocheInter.prototype.getModelo = function () {
        return this.modelo;
    };
    CocheInter.prototype.getVelovidadMax = function () {
        return this.velocidad;
    };
    return CocheInter;
}());
var cocheIn = new CocheInter("BmW", 220);
//console.log("Mi auto es un " + cocheIn.getModelo() + ". Y tiene una velocidad maxima de " + cocheIn.getVelovidadMax() + "km/h.");
//******************************************//
// 
// 
