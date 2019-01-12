/* examples of bind and this */

function talk(sound) {
  console.log(sound);
}

talk("woof");

function talk2() {
  console.log(this.sound);
}

talk2();

const boundTalk2 = talk2.bind({ sound: "wolf 2" });
boundTalk2();

const boromir = {
  sound: "one does not simple walk into mordor"
};

const talkBoromir = talk2.bind(boromir);
talkBoromir();

const boromir2 = {
  speak: talk2,
  sound: "One does not simple walk into mordor!"
};

boromir2.speak();
talk2();

const blabber = boromir2.speak;
blabber();

const boromir3 = {
  sound: "One does not simple walk into mordor!!!!!!!"
};
boromir3.speak = talk2.bind(boromir3);

const blabber2 = boromir3.speak;
blabber2();

const boromir4 = {
  blabber: talk2,
  sound: "One does not simple walk into MORDOR!"
};

const gollum = {
  jabber: boromir4.blabber,
  sound: "my precious"
};

gollum.jabber();
