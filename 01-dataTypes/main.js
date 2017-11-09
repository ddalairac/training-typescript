"use strict";
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
        alias: "Batman",
        age: 35,
        isGoodPerson: true,
        backgroundStory: "As a child, he falls down into a dry well and attacked by a swarm of bats, subsequently developing a phobia of the creatures. Bruce's parents where murder in front of him. Orphaned Bruce grows to become a vigilante, using his worst nightmare to terrorize criminals.",
        superPoder: power.batman
    }, {
        name: "Jack Napier",
        alias: "Joker",
        age: 0,
        isGoodPerson: false,
        backgroundStory: "unknown",
        superPoder: power.joker
    }
];
function introduction(person) {
    var isGoodMessaje;
    if (person.isGoodPerson) {
        isGoodMessaje = "Is a good person.";
    }
    else {
        isGoodMessaje = "Is a realy bad person!";
    }
    var description;
    description = "Name:  " + person.name + "<br>\n\tKnown as: " + person.alias + "<br>\n\tAge: " + person.age + "<br>\n\t" + isGoodMessaje + "<br>\n\tBackground story: " + person.backgroundStory + "<br>\n\tSuper Poder: " + person.superPoder;
    return description;
}
document.body.innerHTML = introduction(characters[1]);
