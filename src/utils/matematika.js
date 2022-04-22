export const matemSell = (products, count) => {
    let total = 0
    products.forEach(item => total += item.product.sell );
    return total
}

export const changeCountProduct = (count, id) => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (!cart) {
        return
    }
    cart.products = cart.products.map(item => {
        if (item.product.id === id) {
            item.count = count
            // item.pricePerCount = sumPricePerCount(item)
            // item.oldPricePerCount = sumOldPricePerCount(item)
        }
        return item
    })
    localStorage.setItem('cart', JSON.stringify(cart))
}