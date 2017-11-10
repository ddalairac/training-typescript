class Hello {
	constructor(public messaje: string) { }
	getMessage() {
			return "<h1>" + this.messaje + "</h1>";
	}
};

var hello = new Hello("hello world?");

document.body.innerHTML = hello.getMessage();