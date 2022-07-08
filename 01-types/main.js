"use strict";
//******** Types ****************/
var someString = 'characters';
var someNumber = 1234;
var someBoolean = true;
var somenObject = {};
var someArray = ['a', 'b', 'c'];
var someTouple = [1, 'a']; // specific array content
var someUnion = 1; // 'a'
var someLiteral = 'first';
var someLiteral2 = { name: 'Max', age: 30 }; // liteal custom type
var eEnumDefault;
(function (eEnumDefault) {
    eEnumDefault[eEnumDefault["Batman"] = 0] = "Batman";
    eEnumDefault[eEnumDefault["Jocker"] = 1] = "Jocker";
    eEnumDefault[eEnumDefault["Gordon"] = 2] = "Gordon";
    eEnumDefault[eEnumDefault["AlGhul"] = 3] = "AlGhul";
})(eEnumDefault || (eEnumDefault = {}));
var someEnum = eEnumDefault.AlGhul;
var eEnumValue;
(function (eEnumValue) {
    eEnumValue["Batman"] = "Batman";
    eEnumValue["Jocker"] = "Jocker";
    eEnumValue["Gordon"] = "James Gordon";
    eEnumValue["AlGhul"] = "Ra's al Ghul";
})(eEnumValue || (eEnumValue = {}));
var someEnumString = eEnumValue.AlGhul;
console.log('eEnumDefault:', someEnum);
console.log('eEnumValue:', someEnumString);
var someTypeAlias = 'some custom type';
var user1 = { name: 'Max', age: 30 };
var func;
func = function (val) { return val > 5 ? 'High' : 'low'; };
//******** Characters List ****************/
var characters = [
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
];
//******** Some code ****************/
function characterInfo(character) {
    var description;
    description = "<h1>Name: " + character.name + "</h1>";
    if (character.alias) {
        description += "<h3>know as: " + character.alias + "</h3>";
    }
    description += "<p>age: " + character.data.age + "</p>";
    if (character.useMask) {
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
