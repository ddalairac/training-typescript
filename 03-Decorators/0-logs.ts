console.log('%cLOGS: ', 'color:white;');
// * class Decorator *********************************************************************************************
/** Los decoradores de clase se ejecutan cuando se define la clase, no cuando se instancia */

function DecoClass(target: Function) {
  console.log(' * DecoClass2 target: ', target);
}

// Se pasa el puntero a la funcion 'Decorator'
@DecoClass
class SomeClass {
  name = 'max';
  constructor() {
    console.log('- SomeClass constructor()');
  }
}

// FACTORY: De esta forma el 'Decorator' puede recibir parametros custom
function DecoClass2(customParam: string) {
  return function (target: Function) {
    console.log(' * DecoClass2 - customParam: ', customParam);
    console.log(' * DecoClass2 - target: ', target);
  }
}

// Los parentesis, en realidad son para la funcion contenedora. El decorador en si, es el puntero a funcion que se retorna.
@DecoClass2('custom param')
class SomeClass2 {
  constructor() {
    console.log('- SomeClass2 constructor()');
  }
}

// El objetivo del decorador es modificar la clase. Por eso retorna una nueva clase (suggar for: constructor function) con modificaciones.
function DecoClass3(customParam: string) {
  // FACTORY -> FACTORY: Retorna una nueva clase, que reemplaza a la que usa el decorador.
  return function <T extends { new(...arg: any[]): {} }>(target: T) {
    return class extends target {
      constructor(..._args: any[]) { // _ es para que typescript entienda que no voy a usarlos, pero tengo que pasarlos.
        super(..._args);
        console.log(' * DecoClass3 - customParam: ', customParam);
        console.log(' * DecoClass3 - new class: ', this);
      }
    }
  }
}
@DecoClass3('Class mutation')
class SomeClass3 {
  constructor(classParam: string) {
    console.log('- SomeClass3 constructor(' + classParam + ')');
  }
}

new SomeClass();
new SomeClass2();
new SomeClass3('class param');

// * Prop Setters Methods Decorators **************************************************************
/** target: 
   * Si es de instancia, es el 'prototipo' del objeto 
   * Si es estatica, es la 'funcion constructora'  */
function DecoProp(target: any, propName: string) {
  console.log(' * DecoProp: ', { target, propName });
}

function DecoSetGet(target: any, propName: string, descriptor: PropertyDescriptor) {
  console.log(' * DecoSetGet: ', { target, propName, descriptor });
}

function DecoMethod(target: any, propName: string, descriptor: PropertyDescriptor) {
  console.log(' * DecoMethod: ', { target, propName, descriptor });
}

function DecoMeParam(target: any, methodName: string, paramPosition: number) {
  console.log(' * DecoMeParam: ', { target, methodName, paramPosition });
}


class SomeClass4 {
  @DecoProp prop!: string;
  @DecoProp static staticProp: string;

  private _age: number = 15;
  @DecoSetGet set setAge(value: number) {
    if (value >= 0) {
      this._age = value;
    } else {
      throw new Error('Age must be a positive number');
    }
  };
  private static _price: number = 15;
  @DecoSetGet static set staticSetPrice(value: number) {
    if (value >= 0) {
      SomeClass4._price = value;
    } else {
      throw new Error('price must be a positive number');
    }
  };

  @DecoMethod
  doStuff(@DecoMeParam numA: number, @DecoMeParam numB: number) {
    console.log('doSrtuff:', numA + numB);
  }

  @DecoMethod
  static staticDoStuff(@DecoMeParam staticNumA: number, @DecoMeParam staticNumB: number) {
    console.log('staticDoSrtuff:', staticNumA + staticNumB);
  }

  constructor() {
    console.log('- SomeClass4 constructor()');
  }
}
const someClass4 = new SomeClass4();
someClass4.doStuff(5, 5);
