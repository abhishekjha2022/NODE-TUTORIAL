const EventEmitter = require("events");
const celebrity = new EventEmitter();

// subscribe to celebrity for observer1

celebrity.on("race win", () => {
  console.log("Congratulations! You are the best!");
});

// subscribe to celebrity for observer2

celebrity.on("race win", () => {
  console.log("Boo I could have done better than that!");
});

//subscribe to celebrity for observer3

celebrity.on("race lost", () => {
  console.log("Better luck next time!");
});

celebrity.emit("race win");
celebrity.emit("race lost");
celebrity.emit("race win");
