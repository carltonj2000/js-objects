/* Composition over Inheritance */

const barker = state => ({
  bark: () => console.log("Woof, I am " + state.name)
});

const driver = state => ({
  driver: () => (state.position = state.position + state.speed)
});

const killer = state => ({
  kill: () => console.log("bang bang")
});

barker({ name: "karo" }).bark();

const murderRobotDog = name => {
  let state = {
    name,
    speed: 100,
    position: 0
  };
  return Object.assign({}, barker(state), driver(state), killer(state));
};

murderRobotDog("sniffles").bark();
