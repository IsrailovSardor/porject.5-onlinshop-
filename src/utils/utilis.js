export const addAndDeleteProductInFavorites = (product) => {
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    let favoriteProduct = {
        product: product,
    }
    let newFavorites = favorites.products.filter(item => item.product.id === product.id)
    if (newFavorites.length) {
        favorites.products = favorites.products.filter(item => item.product.id !== product.id)
    } else {
        favorites.products.push(favoriteProduct)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
}
export const addAndDeleteProductInTrash = (product, color) => {
    let trash = JSON.parse(localStorage.getItem('trash'))
    let trashProduct = {
        product: product,
        count: 1,
        color: color
    }
    let newTrash = trash.products.filter(item => item.product.id === product.id)
    if (newTrash.length) {
        trash.products = trash.products.filter(item => item.product.id !== product.id)
    } else {
        trash.products.push(trashProduct)
    }
    localStorage.setItem('trash', JSON.stringify(trash))
}