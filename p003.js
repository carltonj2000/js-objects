/* Prototype basics */

function talk() {
  console.log(this.sound);
}

talk();

const animal = { talk };

animal.talk();

const cat = { sound: "meow" };

// cat.talk(); // error due to no function talk or prototype having talk

Object.setPrototypeOf(cat, animal);

cat.talk();

const dog = { sound: "woof" };
Object.setPrototypeOf(dog, cat);
dog.talk();

const prarieDog = {
  howl: function() {
    console.log(this.sound.toUpperCase());
  }
};
Object.setPrototypeOf(prarieDog, dog);
prarieDog.howl();

animal.talk = function() {
  console.log("i am a little teapot");
};
dog.talk();
prarieDog.howl();
