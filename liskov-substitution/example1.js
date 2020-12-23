class Animal {
	set Name(name) {
		this.name = name;
	}
	get Name() {
		return this.name;
	}
}

class Dog extends Animal {
	bark() {
		console.log("Woof!");
	}
}

function setNameToUpperCase(animal) {
	animal.name = animal.name.toUpperCase();
}

const dog = new Dog();
dog.Name = "snoopy";
setNameToUpperCase(dog);
console.log(dog.Name);

