function Pizza(topping, size, price) {
  this.topping = topping;
  this.size = size;
  this.price = Pizza.pizzaPrice();
}

pizza = new Pizza([1,2,3],"teeny-tiny");

Pizza.prototype.pizzaSizePrice = function(size) {
  var cost = 0;
  if (this.size = "teeny-tiny") {
    cost = 10;
  } else if (this.size = "medi-yum") {
    cost = 14;
  } else if (this.size = "mondo") {
    cost = 20;
  } else if (this.size = "most-mondo") {
    cost = 25;
  }
  return cost;
  console.log(cost);
}

Pizza.prototype.pizzaPrice = function () {
  var cost = pizzaSizePrice();
  if (this.topping > 1) {
    cost += 0;
  } else if (this.topping > 2) {
    cost += 1;
  } else if (this.topping > 3); {
    cost += 2;
  }
  return cost;
}

//back end

$(document).ready(function() {
  $("form#new-pizza").submit(function(event){
    event.preventDefault();


  });
});
