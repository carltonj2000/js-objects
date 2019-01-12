/* bind and this */

const dog = {
  sound: "woof",
  talk: function() {
    console.log(this.sound);
  }
};

dog.talk();
const talkFunction = dog.talk;
talkFunction();
const sound = "bark";
talkFunction();

const boundTalk = talkFunction.bind(dog);
boundTalk();

const boundTalk2 = talkFunction.bind({ sound: "wooff" });
boundTalk2();
