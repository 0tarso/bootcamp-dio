import { createItem } from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = []
const myWishList = []

console.log('Welcome to Shopee Cart!')


const item1 = await createItem('Camiseta', 100, 2)
const item2 = await createItem('Tênis', 50, 1)
const item3 = await createItem('Boné', 90, 3)
const item4 = await createItem('Bicicleta', 1250, 1)

await cartService.addItem(myCart, item1)
await cartService.addItem(myWishList, item2)
await cartService.addItem(myCart, item3)
await cartService.addItem(myCart, item4)


await cartService.show(myCart)
console.log('Items in wish list:', myWishList.map(item => item.name))

await cartService.calculateTotal(myCart)

await cartService.deleteItem(myCart, "Boné")

await cartService.show(myCart)
await cartService.calculateTotal(myCart)

await cartService.removeItem(myCart, 1)
await cartService.show(myCart)
await cartService.calculateTotal(myCart)

await cartService.removeItem(myCart, 1)
await cartService.show(myCart)

await cartService.calculateTotal(myCart)

