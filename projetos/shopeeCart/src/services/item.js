// === Casos de uso ===
// -> Item com subtotal calculado - f()


export async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal() { return this.price * this.quantity }
  }
}