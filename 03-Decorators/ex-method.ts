console.log('%cMETHOD: ', 'color:white;');
// Scope ejemplo ---------
/* _ el guion es para que typecript entienda que debo recibirlos aunque no este usandolos (evitar el error o warn) */
function DecoAutobind(_target: any, _propName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return newDescriptor;
}

class Printer {
  private _message = "Display some string";

  message() {
    console.log('message:', this._message, this)
  }
  @DecoAutobind message2() {
    console.log('deco message:', this._message, this)
  }
}
const printer = new Printer();
const btn = document.getElementById('btn')!;

// Va a imprimir el mensaje en consola
printer.message()

// Va a ser undefined, porque el scope de 'this.' no es la clase.
btn.addEventListener('click', printer.message)

// .bind() se utiliza justamente para solucionar este problema.
btn.addEventListener('click', printer.message.bind(printer))

// mismo resultado, pero sin tener que hacer el fix en la implementacion
btn.addEventListener('click', printer.message2)
btn.addEventListener('click', () => console.log(' '))
