//******** Types ****************/

let someString: string = 'characters'
let someNumber: number = 1234
let someBoolean: boolean = true
let somenObject: object = {}
let someArray: string[] = ['a', 'b', 'c']
let someTouple: [number, string] = [1, 'a'] // specific array content
let someUnion: string | number = 1 // 'a'
let someLiteral: 'first' | 'second' = 'first'
let someLiteral2: { name: string; age: number } = { name: 'Max', age: 30 }// liteal custom type

enum eEnumDefault { Batman, Jocker, Gordon, AlGhul }
let someEnum: eEnumDefault = eEnumDefault.AlGhul

enum eEnumValue { Batman = 'Batman', Jocker = 'Jocker', Gordon = 'James Gordon', AlGhul = `Ra's al Ghul` }
let someEnumString: eEnumValue = eEnumValue.AlGhul

console.log('eEnumDefault:', someEnum)
console.log('eEnumValue:', someEnumString)

// Union |
type tStrNum = string | number
type tPrimitive = string | boolean | number;
let someTypeAlias: tStrNum = 'some custom type'

type tUser = { name: string; age: number };
const user1: tUser = { name: 'Max', age: 30 };

type tFunc = (val: number) => string
let func: tFunc
func = (val: number) => { return val > 5 ? 'High' : 'low' }

interface iHero {
  alive: boolean;
  name: string;
  alias?: string;
  useMask: boolean;
  data: {
    age: number | string;
    backgroundStory: string;
    superPoder: string;
  };
}

// Object not complety defined
type tSemiDefined = Record<string, tPrimitive>;
interface iSemiDefined {
  [prop: string]: tPrimitive;
}

const semiDefT: tSemiDefined = {
  alive: true,
  name: 'Bob',
  age: 39,
}
const semiDefI: iSemiDefined = {
  alive: true,
  name: 'Bob',
  age: 39,
}

//******** Characters List ****************/

let characters: iHero[] = [
  {
    alive: true,
    name: "Bruce Wayne",
    alias: "batman",
    useMask: true,
    data: {
      age: 35,
      backgroundStory: "As a child, he falls down into a dry well and attacked by a swarm of bats, subsequently developing a phobia of the creatures. Bruce's parents where murder in front of him. Orphaned Bruce grows to become a vigilante, using his worst nightmare to terrorize criminals.",
      superPoder: "Madly Rich"
    }
  }, {
    alive: true,
    name: "Jack Napier",
    alias: "joker",
    useMask: false,
    data: {
      age: 37,
      backgroundStory: "unknown",
      superPoder: "Insanely crazy"
    }
  }, {
    alive: true,
    name: "James Gordon",
    useMask: false,
    data: {
      age: 42,
      backgroundStory: "Gordon is the police commissioner in Gotham City. He share Batman commitment to rid the city crime & corruption.",
      superPoder: "The strength of the police department"
    }
  }, {
    alive: false,
    name: "Unknown",
    alias: "Ra's al Ghul",
    useMask: false,
    data: {
      age: "Unknown",
      backgroundStory: "unknown",
      superPoder: "lead a legion of bad ass ninjas"
    }
  }
]


//******** Some code ****************/
function characterInfo(character: iHero) {
  let description

  description = "<h1>Name: " + character.name + "</h1>"
  if (character.alias) { description += "<h3>know as: " + character.alias + "</h3>" }
  description += "<p>age: " + character.data.age + "</p>"
  if (character.useMask) {
    description += "<p>is a good person</p>"
  } else { description += "<p>is a realy bad person</p>" }
  description += "<p>background story: " + character.data.backgroundStory + "</p>"
  description += "<p>superPoder: " + character.data.superPoder + "</p>"

  return description
}


function setList(characters: iHero[]) {
  let characterList = ""
  for (let character of characters) {
    characterList += characterInfo(character);
    characterList += "<br><br>"
  }
  return characterList
}


document.body.innerHTML = setList(characters);