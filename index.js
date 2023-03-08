const EventEmitter = require("events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();//! để kế thừa thuộc tính của thằng cha 
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber=5;
    this.emit("order", size, topping);
  }

  displayOrderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}

class DrinkMachine {
  serveDrink(size) {
    if (size === "large") {
      console.log("Serving complimentary drink");
    }
  }
}

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
  drinkMachine.serveDrink(size);
});
pizzaShop.order("large", "mushrooms");
console.log(pizzaShop.displayOrderNumber());


