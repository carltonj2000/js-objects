/* class keyword */

class Mammal {
  constructor(sound) {
    this.sound = sound;
  }
  talk() {
    return this.sound;
  }
}

const fluffykings = new Mammal("woof!");

console.log(fluffykings);
console.log(fluffykings.talk());

class Dog extends Mammal {
  constructor() {
    super("wofferliwoff");
  }
}

const fluffy = new Dog();
console.log(fluffy.talk());

const y = fluffy.talk();

console.log(typeof Dog);
console.log(Dog.prototype.talk);
console.log(Dog.prototype.talk());

console.log(Dog.prototype.talk.bind({ sound: "w" })());

console.log(Dog.prototype.isPrototypeOf(fluffy));
