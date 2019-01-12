/* __proto__ vs prototype */

const cat = { breed: "munchkin" };

const myCat = { name: "Fluffykins" };

Object.setPrototypeOf(myCat, cat);
console.log(myCat.breed);
console.log(myCat.__proto__);

cat.tailLength = 15;
console.log(myCat.tailLength);
console.log(myCat.__proto__);

function Dog() {}
Dog.prototype.breed = "Bulldog";
console.log("\nDog");
console.log(Dog);
console.log(Dog.__proto__);
console.log(Dog.prototype);

const myDog = new Dog();
console.log("\nmyDog");
console.log(myDog);
console.log(myDog.__proto__);
console.log(myDog.prototype);

function Fish() {}
console.log("\nFish");
console.log(Fish);
console.log(Fish.__proto__);
console.log(Fish.prototype);

const myFish = new Fish();
console.log("\nmyFish");
console.log(myFish);
console.log(myFish.__proto__);
console.log(myFish.prototype);

const obj = {};
console.log("\nobj");
console.log(obj);
console.log(obj.__proto__); // for browsers this is the global Object
console.log(obj.prototype);

console.log("\nObject");
console.log(Object);
console.log({});
