const EventEmitter = require("events");
const celebrity = new EventEmitter();

// subscribe to celebrity for observer1

celebrity.on("race win", () => {
  console.log("Congratulations! You are the best!");
});

// subscribe to celebrity for observer2

celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Boo I could have done better than that!");
  }
});

//subscribe to celebrity for observer3

celebrity.on("race", () => {
  console.log("Better luck next time!");
});

process.on("exit", (code) => {
  console.log("Process exit event with code:", code);
});

celebrity.emit("race win");
celebrity.emit("race lost");
