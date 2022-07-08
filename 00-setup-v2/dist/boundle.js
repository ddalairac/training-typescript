"use strict";
var Hello = /** @class */ (function () {
    function Hello(messaje) {
        this.messaje = messaje;
    }
    Hello.prototype.getMessage = function () {
        return "<h1>" + this.messaje + "</h1>";
    };
    return Hello;
}());
;
var hello = new Hello("Why we always say hello world?");
document.body.innerHTML = hello.getMessage();
var heroes = [
    {
        name: "Luke Skywalker",
        weapon: "Saber laser ",
        posicion: 4
    },
    {
        name: "Aragon",
        weapon: "Andúril",
        posicion: 1
    },
    {
        name: "Marty McFly",
        weapon: "Skate board",
        posicion: 2
    },
    {
        name: "Guybrush Threepwood",
        weapon: "none",
        posicion: 3
    }
];
