const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a listener
emitter.on("order-pizza", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

// Register another listener
emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("vao day chua");
    console.log("Serving complimentary drink");
  }
});

// Emit an event
emitter.emit("order-pizza", "normal", "mushrooms");
//! khi gọi event nó có thể chạy song song các sự kiện lắng nghe của và cùng nhận các đối số đã truyền vào


