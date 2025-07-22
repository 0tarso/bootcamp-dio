// Ações que o carrinho pode realizar

// ==== Casos de uso ====
// -> Adicionar item ao carrinho - f()
// -> Remover item do carrinho - f()
// -> Listar itens do carrinho - f()
// -> Calcular total do carrinho - f()


export async function addItem(userCart, item) {

  // Adiciona o novo item ao final do array
  userCart.push(item)
}


export async function deleteItem(userCart, itemName) {

  // Busca o index do item que tiver o mesmo 'name' passado na função
  const itemIndex = userCart.findIndex(item => item.name === itemName)

  // Caso encontre
  if (itemIndex !== -1) {
    console.log(`\nDeletando -> ${userCart[itemIndex].name}`)

    // Deleta do array
    userCart.splice(itemIndex, 1)
  }

}


export async function removeItem(userCart, itemIndex) {

  // Verfica o index passado na função
  if (itemIndex > 0 && itemIndex <= userCart.length) {

    // Adicionamos o item  a uma variável
    const item = userCart[itemIndex - 1]

    // Se esse item tiver quantidade maior que 1x
    if (item.quantity > 1) {
      console.log(`\nRemovendo 1x ${item.name}`)

      // Remove 1 da chave 'quantity'
      userCart[itemIndex - 1].quantity = userCart[itemIndex - 1].quantity - 1
    }

    // Se não, chama a função para deletar o item do carrinho
    else {
      console.log(`\nRemovendo 1x ${item.name}`)
      await deleteItem(userCart, item.name)
    }
  }

  // Se o index não passar na verificação, retorna msg de não encontrado
  else {
    console.log("IndexItem not found")
  }
}


export async function calculateTotal(userCart) {
  const total = `🛒 Total: R$ ${userCart.reduce((total, item) => total + item.subtotal(), 0).toFixed(2)}`
  console.log(total)
}


export async function show(userCart) {
  console.log("\n======= > Itens in cart < ==========")

  if (userCart.length === 0) {
    console.log("________ Empty cart ________")
    return
  }

  userCart.forEach((item, index) => {
    const itemLog = `${index + 1}.${item.name} | ${item.quantity}x | ${item.price.toFixed(2)} | Subtotal: R$ ${item.subtotal()}`
    console.log(itemLog)
  })
}