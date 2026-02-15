// inventory dataset
const products = [
  { name: "Wireless Headphones", category: "electronics", price: 79.99, inventory: 12 },
  { name: "Hoodie", category: "apparel", price: 39.99, inventory: 20 },
  { name: "Redbull Peach", category: "groceries", price: 2.99, inventory: 60 },
  { name: "Bleach", category: "household", price: 7.99, inventory: 35 },
  { name: "Scissors", category: "stationery", price: 5.99, inventory: 100 },
];

function getCategoryRate(category) {
  switch (category) {
    case "electronics":
      return 0.20;
    case "apparel":
      return 0.15;
    case "groceries":
    case "household":
      return 0.10;
    default:
      return 0.00;
  }
}

