/* class Hello {
	constructor(public messaje: string) { }
	getMessage() {
			return "<h1>" + this.messaje + "</h1>";
	}
};

var hello = new Hello("hello world?");

document.body.innerHTML = hello.getMessage();

 */


interface Heroes {
		name: string;
		weapon: string;
		posicion: number;
} 
let heroes = [
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
]
