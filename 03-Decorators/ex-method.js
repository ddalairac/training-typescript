"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('%cMETHOD: ', 'color:white;');
// Scope ejemplo ---------
/* _ el guion es para que typecript entienda que debo recibirlos aunque no este usandolos (evitar el error o warn) */
function DecoAutobind(_target, _propName, descriptor) {
    var originalMethod = descriptor.value;
    var newDescriptor = {
        configurable: true,
        enumerable: true,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return newDescriptor;
}
var Printer = /** @class */ (function () {
    function Printer() {
        this._message = "Display some string";
    }
    Printer.prototype.message = function () {
        console.log('message:', this._message, this);
    };
    Printer.prototype.message2 = function () {
        console.log('deco message:', this._message, this);
    };
    __decorate([
        DecoAutobind
    ], Printer.prototype, "message2", null);
    return Printer;
}());
var printer = new Printer();
var btn = document.getElementById('btn');
// Va a imprimir el mensaje en consola
printer.message();
// Va a ser undefined, porque el scope de 'this.' no es la clase.
btn.addEventListener('click', printer.message);
// .bind() se utiliza justamente para solucionar este problema.
btn.addEventListener('click', printer.message.bind(printer));
// mismo resultado, pero sin tener que hacer el fix en la implementacion
btn.addEventListener('click', printer.message2);
btn.addEventListener('click', function () { return console.log(' '); });
