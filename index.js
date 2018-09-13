var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 99) + 1;
  cart.push({itemName: item,
            itemPrice: price 
  });
  return (`${item} has been added to your cart.`);
}



function viewCart() {
  if (cart.length === 0){
    return ("Your shopping cart is empty.");
  } else{
    var MyCart = (`In your cart, you have `);
  for (var i = 0; i < cart.length ; i ++){
  }
  }
  
}

function total() {
  var t = 0;
  for (var i = 0; i < cart.length; i ++){
  t += cart[i].itemPrice; 
  }
return t;
}

function removeFromCart(item) {
  var repeat = "";
  for (var i = 0; i < cart.length; i++){
    if (item === cart[i]){
      repeat = cart;
      cart.splice(i, 1);
    }
  }
  if (repeat.length > 0){
    return cart;
  }else{
    return("That item is not in your cart.");
  } 
}

function placeOrder(cardNumber) {
   if (cardNumber === undefined){
     return ("Sorry, we don't have a credit card on file for you.");
   }else{
    var value = (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
     return value;
  }
}
