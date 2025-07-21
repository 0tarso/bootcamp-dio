const product = require('./services/products');
const config = require('./services/config');


async function main() {
  console.log("hello woooorld")

  product.getFullName("1232", "Massinhaaaa")
  product.getPrice("1232", 10.99)

  console.log(`Config Version: ${config.version}`);
}

main()