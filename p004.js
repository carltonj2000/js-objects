/* new keyword */

function Person(saying) {
  this.saying = saying;
  //return { dumbObject: true }; // note this breaks the return value of new
}

Person.prototype.talk = function() {
  console.log("I say", this.saying);
};

const crockford = new Person("SEMICOLANS!!!1one1");
crockford.talk();

function new2(constructor1) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor1.prototype);
  console.log(Array.from(arguments).slice(1)); // es6 below uses es5
  const argsArray = Array.prototype.slice.apply(arguments); // to array
  console.log(argsArray);
  return constructor1.apply(obj, argsArray.slice(1)) || obj;
}

const crockford2 = new2(Person, "SEMICOLONS");
crockford2.talk();
