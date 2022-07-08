"use strict";
// * class Decorator *********************************************************************************************
/** Los decoradores de clase se ejecutan cuando se define la clase, no cuando se instancia */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function DecoClass(target) {
    console.log(' * DecoClass2 target: ', target);
}
// Se pasa el puntero a la funcion ' * Decorator'
var SomeClass = /** @class */ (function () {
    function SomeClass() {
        this.name = 'max';
        console.log('- SomeClass constructor()');
    }
    SomeClass = __decorate([
        DecoClass
    ], SomeClass);
    return SomeClass;
}());
// De esta forma el ' * Decorator' puede recibir parametros custom
function DecoClass2(customParam) {
    return function (target) {
        console.log(' * DecoClass2 - customParam: ', customParam);
        console.log(' * DecoClass2 - target: ', target);
    };
}
// Los parentesis, en realidad son para la funcion contenedora. El decorador en si, es el puntero a funcion que se retorna.
var SomeClass2 = /** @class */ (function () {
    function SomeClass2() {
        console.log('- SomeClass2 constructor()');
    }
    SomeClass2 = __decorate([
        DecoClass2('custom param')
    ], SomeClass2);
    return SomeClass2;
}());
// El objetivo del decorador es modificar la clase. Por eso retorna una nueva clase (suggar for: constructor function) con modificaciones.
function DecoClass3(customParam) {
    // Retorna una nueva clase, que reemplaza a la que usa el decorador.
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, _args) || this;
                console.log(' * DecoClass3 - customParam: ', customParam);
                console.log(' * DecoClass3 - new class: ', _this);
                return _this;
            }
            return class_1;
        }(target));
    };
}
var SomeClass3 = /** @class */ (function () {
    function SomeClass3(classParam) {
        console.log('- SomeClass3 constructor(' + classParam + ')');
    }
    SomeClass3 = __decorate([
        DecoClass3('Class mutation')
    ], SomeClass3);
    return SomeClass3;
}());
new SomeClass();
new SomeClass2();
new SomeClass3('class param');
// * Prop Setters Methods Decorators **************************************************************
/** target:
   * Si es de instancia, es el 'prototipo' del objeto
   * Si es estatica, es la 'funcion constructora'  */
function DecoProp(target, propName) {
    console.log(' * DecoProp: ', { target: target, propName: propName });
}
function DecoSetGet(target, propName, descriptor) {
    console.log(' * DecoSetGet: ', { target: target, propName: propName, descriptor: descriptor });
}
function DecoMethod(target, propName, descriptor) {
    console.log(' * DecoMethod: ', { target: target, propName: propName, descriptor: descriptor });
}
function DecoMeParam(target, methodName, paramPosition) {
    console.log(' * DecoMeParam: ', { target: target, methodName: methodName, paramPosition: paramPosition });
}
var SomeClass4 = /** @class */ (function () {
    function SomeClass4() {
        this._age = 15;
        console.log('- SomeClass4 constructor()');
    }
    Object.defineProperty(SomeClass4.prototype, "setAge", {
        set: function (value) {
            if (value >= 0) {
                this._age = value;
            }
            else {
                throw new Error('Age must be a positive number');
            }
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SomeClass4, "staticSetPrice", {
        set: function (value) {
            if (value >= 0) {
                SomeClass4._price = value;
            }
            else {
                throw new Error('price must be a positive number');
            }
        },
        enumerable: false,
        configurable: true
    });
    ;
    SomeClass4.prototype.doStuff = function (numA, numB) {
        console.log('doSrtuff:', numA + numB);
    };
    SomeClass4.staticDoStuff = function (staticNumA, staticNumB) {
        console.log('staticDoSrtuff:', staticNumA + staticNumB);
    };
    SomeClass4._price = 15;
    __decorate([
        DecoProp
    ], SomeClass4.prototype, "prop", void 0);
    __decorate([
        DecoSetGet
    ], SomeClass4.prototype, "setAge", null);
    __decorate([
        DecoMethod,
        __param(0, DecoMeParam), __param(1, DecoMeParam)
    ], SomeClass4.prototype, "doStuff", null);
    __decorate([
        DecoProp
    ], SomeClass4, "staticProp", void 0);
    __decorate([
        DecoSetGet
    ], SomeClass4, "staticSetPrice", null);
    __decorate([
        DecoMethod,
        __param(0, DecoMeParam), __param(1, DecoMeParam)
    ], SomeClass4, "staticDoStuff", null);
    return SomeClass4;
}());
var someClass4 = new SomeClass4();
someClass4.doStuff(5, 5);
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
