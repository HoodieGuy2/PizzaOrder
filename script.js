document.getElementById("pizza-btn").addEventListener("click", orderPizza);

function orderPizza() {
  var size = prompt("What size do you want?");
  var topping1 = prompt("What is the first topping you want?");
  var topping2 = prompt("What is the second topping you want?");

  var output = `Your ${size} pizza with ${topping1} and ${topping2} will be done soon`;

  alert(output);
}

document.getElementById("greet-btn").addEventListener("click", greet);

function greet() {
  var userName = prompt("What is your name?");
  var userCity = prompt("What city do you live in?");

  var output = `Welcome ${userName} from ${userCity}`;

  alert(output);
}

document.getElementById("pet-btn").addEventListener("click", pets);
function pets() {
  var num1 = prompt("Give me a number");
  var num2 = prompt("Give me another number");
  var animal1 = prompt("Give me an animal");
  var animal2 = prompt("Give me another animal");
  var output = `I own ${num1} ${animal1}s and ${num2} ${animal2}s!`;
}
