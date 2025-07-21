// todas as funções que lidam com produto

async function getFullName(codeId, productName) {
  console.log(`${codeId} ->> ${productName}`);
  return `${codeId} -> ${productName}`;

}

async function getPrice(codeId, price) {
  console.log(`Price for ${codeId} is ${price}`);
  return `Price for ${codeId} is ${price}`;
}

module.exports = {
  getFullName,
  getPrice
};