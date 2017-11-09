"use strict";
//******** Types ****************/
var power;
(function (power) {
    power["batman"] = "Madly Rich";
    power["joker"] = "Insanely crazy";
    power["pinguin"] = "swindler & manipulator";
    power["riddler"] = "Good with riddles";
    power["commissioner"] = "The strength of the police department";
    power["ra"] = "lead a legion of bad ass ninjas";
})(power || (power = {}));
//******** Characters List ****************/
var characters = [
    {
        alive: true,
        name: "Bruce Wayne",
        alias: "batman",
        isGood: true,
        data: {
            age: 35,
            backgroundStory: "As a child, he falls down into a dry well and attacked by a swarm of bats, subsequently developing a phobia of the creatures. Bruce's parents where murder in front of him. Orphaned Bruce grows to become a vigilante, using his worst nightmare to terrorize criminals.",
            superPoder: power.batman
        }
    }, {
        alive: true,
        name: "Jack Napier",
        alias: "joker",
        isGood: false,
        data: {
            age: 37,
            backgroundStory: "unknown",
            superPoder: power.joker
        }
    }, {
        alive: true,
        name: "James Gordon",
        isGood: true,
        data: {
            age: 42,
            backgroundStory: "Gordon is the police commissioner in Gotham City. He share Batman commitment to rid the city crime & corruption.",
            superPoder: power.commissioner
        }
    }, {
        alive: false,
        name: "Unknown",
        alias: "Ra's al Ghul",
        isGood: false,
        data: {
            age: "Unknown",
            backgroundStory: "unknown",
            superPoder: power.ra
        }
    }
];
//******** Some code ****************/
function characterInfo(character) {
    var description;
    description = "<h1>Name: " + character.name + "</h1>";
    if (character.alias) {
        description += "<h3>know as: " + character.alias + "</h3>";
    }
    description += "<p>age: " + character.data.age + "</p>";
    if (character.isGood) {
        description += "<p>is a good person</p>";
    }
    else {
        description += "<p>is a realy bad person</p>";
    }
    description += "<p>background story: " + character.data.backgroundStory + "</p>";
    description += "<p>superPoder: " + character.data.superPoder + "</p>";
    return description;
}
function setList(characters) {
    var characterList = "";
    for (var _i = 0, characters_1 = characters; _i < characters_1.length; _i++) {
        var character = characters_1[_i];
        characterList += characterInfo(character);
        characterList += "<br><br>";
    }
    return characterList;
}
document.body.innerHTML = setList(characters);
