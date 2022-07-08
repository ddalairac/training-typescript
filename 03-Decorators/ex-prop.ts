console.log('%cPROP: ', 'color:white;');
//  Validator example

interface ValidatorConf {
  [prop: string]: {
    [validatableProp: string]: string[] // ['required','positive',...]
  }
}

const registeredValidators: ValidatorConf = {}

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required']
  }
}
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive']
  }
}
function NoFractionNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['noFraction']
  };
}

function validate(obj: any) {
  console.log(['[class]', obj.constructor.name])
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
        case 'noFraction':
          isValid = isValid && !isNaN(obj[prop]) && !(obj[prop] % 1)
          break;
      }
    }
  }
  return isValid;
}


class SomeForm {
  @Required title: string;
  @PositiveNumber price: number;
  @PositiveNumber @NoFractionNumber total: number;

  constructor(t: string, p: number, to: number) {
    this.title = t;
    this.price = p;
    this.total = to;
  }
}


const theForm = document.querySelector('form')!;
theForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;
  const totalEl = document.getElementById('total') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;
  const total = +totalEl.value;

  const createdCourse = new SomeForm(title, price, total);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }
  console.log(createdCourse);
});
