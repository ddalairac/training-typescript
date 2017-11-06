
interface CharacterModel {
	name: string
	alias: string
	age: number
	isGoodPerson: boolean
	backgroundStory:string
	superPoder: power
}

enum power {
	batman = "Madly Rich",
	joker = "Insanely crazy",
	pinguin = "swindler & manipulator",
	riddler = "Good with riddles"
}


let characters:CharacterModel[] = [
	{
		name: "Bruce Wayne", 
		alias: "batman",
		age: 35,
		isGoodPerson: true,
		backgroundStory:"As a child, he falls down into a dry well and attacked by a swarm of bats, subsequently developing a phobia of the creatures. Bruce's parents where murder in front of him. Orphaned Bruce grows to become a vigilante, using his worst nightmare to terrorize criminals.",
		superPoder: power.batman
	},{
		name: "Jack Napier", 
		alias: "joker",
		age: undefined,
		isGoodPerson: false,
		backgroundStory: "unknown",
		superPoder:power.joker
	}
]

function introduction(person: CharacterModel):string {
	let isGoodMessaje:string
	if(person.isGoodPerson){
		isGoodMessaje = "is a good person" 
	} else {
		isGoodMessaje = "is a realy bad person" 
	}
	let description:string
	description = "Name: " + person.name 
	description +="<br>know as: "+ person.alias 
	description +="<br>age: " + person.age 
	description +="<br>" + isGoodMessaje 
	description +="<br>background story: "+ person.backgroundStory
	description +="<br>superPoder:"+person.superPoder
	
	return description
	
}

document.body.innerHTML = introduction(characters[0]);