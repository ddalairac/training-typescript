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
