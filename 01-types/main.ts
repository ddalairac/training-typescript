

//******** Types ****************/

//******** Characters List ****************/

let characters = [
	{
		alive:true,
		name: "Bruce Wayne",
		alias: "batman",
		isGood: true,
		data: {	
			age: 35,
			backgroundStory: "As a child, he falls down into a dry well and attacked by a swarm of bats, subsequently developing a phobia of the creatures. Bruce's parents where murder in front of him. Orphaned Bruce grows to become a vigilante, using his worst nightmare to terrorize criminals.",
			superPoder: "Madly Rich"
		}
	}, {
		alive:true,
		name: "Jack Napier",
		alias: "joker",
		isGood: false,
		data: {	
			age: 37,
			backgroundStory: "unknown",
			superPoder: "Insanely crazy"
		}
	}, {
		alive:true,
		name: "James Gordon",
		isGood: true,
		data: {	
			age: 42,
			backgroundStory: "Gordon is the police commissioner in Gotham City. He share Batman commitment to rid the city crime & corruption.",
			superPoder: "The strength of the police department"
		}
	},{
		alive:false,
		name:"Unknown",
		alias: "Ra's al Ghul",
		isGood: false,
		data: {	
			age: "Unknown",
			backgroundStory: "unknown",
			superPoder: "lead a legion of bad ass ninjas"
		}
	}
]


//******** Some code ****************/
function characterInfo(character) {
	let description

	description = "<h1>Name: " + character.name + "</h1>"
	if (character.alias){	description += "<h3>know as: " + character.alias + "</h3>"	}
	description += "<p>age: " + character.data.age + "</p>"
	if (character.isGood) {	description += "<p>is a good person</p>"
	} else { description += "<p>is a realy bad person</p>"	}
	description += "<p>background story: " + character.data.backgroundStory + "</p>"
	description += "<p>superPoder: " + character.data.superPoder + "</p>"

	return description
}


function setList(characters ) {
	let characterList = ""
	for (let character of characters) {
		characterList += characterInfo(character);
		characterList += "<br><br>"
	}
	return characterList
}

document.body.innerHTML = setList(characters);