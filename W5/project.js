let cart = [];

// Add item to cart
function addItem(item) {
    cart.push(item);
    console.log(`${item} added to cart`);
}

// Remove item from cart
function removeItem(item) {
    const index = cart.indexOf(item);

    if (index !== -1) {
        cart.splice(index, 1);
        console.log(`${item} removed from cart`);
    } else {
        console.log(`${item} not found in cart`);
    }
}

// Show total items in cart
function totalItems() {
    console.log(`Total items: ${cart.length}`);
    return cart.length;
}

// Clear the cart
function clearCart() {
    cart.length = 0;
    console.log("Cart cleared");
}

// Check if item exists
function itemExists(item) {
    return cart.includes(item);
}

// Example usage
addItem("Apple");
addItem("Banana");
addItem("Orange");

removeItem("Banana");

totalItems();

console.log(itemExists("Apple"));   // true
console.log(itemExists("Banana"));  // false

clearCart();
totalItems();
