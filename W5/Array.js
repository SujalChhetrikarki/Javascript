// Create an array
let fruits = ["Apple", "Banana", "Orange"];

// Access array elements
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana

// Add an item
fruits.push("Mango");
console.log(fruits);

// Remove last item
fruits.pop();
console.log(fruits);

// Array length
console.log("Total items:", fruits.length);

// Check if item exists
console.log(fruits.includes("Apple")); // true
console.log(fruits.includes("Grapes")); // false
