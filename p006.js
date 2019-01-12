/* Object.create */

const cat = {
  makeSound: function() {
    console.log(this.sound);
  }
};

const mark = Object.create(cat);
mark.sound = "mewufff";
mark.makeSound();

const waffles = Object.create(cat);
waffles.sound = "mrrow";
waffles.makeSound();

console.log("is mark a cat", cat.isPrototypeOf(mark));

function objectCreate(proto) {
  const obj = {};
  Object.setPrototypeOf(obj, proto); // bad for performance
  return obj;
}

const mark2 = objectCreate(cat);
mark2.sound = "mewufff2";
mark2.makeSound();

const waffles2 = objectCreate(cat);
waffles2.sound = "mrrow2";
waffles2.makeSound();

console.log("is mark2 a cat", cat.isPrototypeOf(mark2));

const cat2 = {
  init: function(sound) {
    this.sound = sound;
    return this;
  },
  makeSound: function() {
    console.log(this.sound);
  }
};

Object.create(cat2)
  .init("mewufff3")
  .makeSound();

Object.create(cat2)
  .init("mrrow3")
  .makeSound();
