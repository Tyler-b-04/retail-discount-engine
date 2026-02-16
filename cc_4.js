// inventory dataset
const products = [
  { name: "Wireless Headphones", category: "electronics", price: 79.99, inventory: 12 },
  { name: "Hoodie", category: "apparel", price: 39.99, inventory: 20 },
  { name: "Redbull Peach", category: "groceries", price: 2.99, inventory: 60 },
  { name: "Bleach", category: "household", price: 7.99, inventory: 35 },
  { name: "Scissors", category: "stationery", price: 5.99, inventory: 100 },
];

console.log("Products:", products);

function round2(n) {
  return Math.round(n * 100) / 100;
}

// category discounts
function getCategoryRate(category) {
  switch (category) {
    case "electronics":
      return 0.2;
    case "apparel":
      return 0.15;
    case "groceries":
    case "household":
      return 0.1;
    default:
      return 0.0;
  }
}

// apply discounted price
for (const p of products) {
  const rate = getCategoryRate(p.category);
  p.promoPrice = round2(p.price * (1 - rate)); // keep original price
}

console.log("After category discounts:", products);

// customer type discount
function getCustomerRate(customerType) {
  if (customerType === "student") {
    return 0.05;
  } else if (customerType === "senior") {
    return 0.07;
  } else {
    return 0.0;
  }
}

const customerTypes = ["regular", "student", "senior"];

// customer carts
const carts = [
  [1, 1, 4, 2, 3], // customer 1
  [0, 2, 6, 1, 5], // customer 2
  [1, 0, 2, 3, 4], // customer 3
];

// simulated checkout
for (let i = 0; i < 3; i++) {
  const customerNumber = i + 1;
  const customerType = customerTypes[i];
  const extraRate = getCustomerRate(customerType);

  let subtotal = 0;

  for (let idx = 0; idx < products.length; idx++) {
    const p = products[idx];
    const qty = carts[i][idx];

    if (qty <= 0) continue;

    const purchQty = Math.min(qty, p.inventory); // limit to stock
    p.inventory -= purchQty;

    subtotal += purchQty * p.promoPrice;
  }

  const total = round2(subtotal * (1 - extraRate));

  console.log(
    `Customer ${customerNumber} (${customerType}) | subtotal: $${round2(subtotal)} | extra: ${(extraRate * 100).toFixed(
      0
    )}% | total: $${total}`
  );
}

console.log("After checkout inventory:", products);

// for...in log one product
const sample = products[0];
console.log("for...in on one product");
for (const key in sample) {
  console.log(`${key}:`, sample[key]);
}

// object entries
console.log("Object.entries() for all products");
for (const p of products) {
  console.log("---- PRODUCT ----");
  for (const [key, value] of Object.entries(p)) {
    console.log(`${key}:`, value);
  }
}
