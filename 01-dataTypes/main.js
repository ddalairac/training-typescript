/* class Person {
    //description: string;
    constructor(public name: string, public alias:string, public age: number, public isGoodPerson: boolean) {
            //this.description = "name: "+name + " age: "+age + " is a good person" + isGoodPerson;
    }
} */
var power;
(function (power) {
    power["batman"] = "Madly Rich";
    power["joker"] = "Insanely crazy";
    power["pinguin"] = "swindler & manipulator";
    power["riddler"] = "Good with riddles";
})(power || (power = {}));
var characters = [
    {
        name: "Bruce Wayne",
        alias: "batman",
        age: 35,
        isGoodPerson: true,
        backgroundStory: "As a child, he falls down into a dry well and attacked by a swarm of bats, subsequently developing a phobia of the creatures. Bruce's parents where murder in front of him. Orphaned Bruce grows to become a vigilante, using his worst nightmare to terrorize criminals.",
        superPoder: power.batman
    }, {
        name: "Jack Napier",
        alias: "joker",
        age: undefined,
        isGoodPerson: false,
        backgroundStory: "unknown",
        superPoder: power.joker
    }
];
function introduction(person) {
    var isGoodMessaje;
    if (person.isGoodPerson) {
        isGoodMessaje = "is a good person";
    }
    else {
        isGoodMessaje = "is a realy bad person";
    }
    var description;
    description = "Name: " + person.name;
    description += "<br>know as: " + person.alias;
    description += "<br>age: " + person.age;
    description += "<br>" + isGoodMessaje;
    description += "<br>background story: " + person.backgroundStory;
    description += "<br>superPoder:" + person.superPoder;
    return description;
}
document.body.innerHTML = introduction(characters[1]);
