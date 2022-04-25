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

export const deleteCart = (product, color) => {
    let trash = JSON.parse(localStorage.getItem('trash'))

    const index = trash.products.findIndex(item => item.product.id === product.id && item.color === color);
    if (index !== -1) {
        trash.products.splice(index, 1);
        localStorage.setItem('trash', JSON.stringify(trash))
    }
}


export const addAndDeleteProductInTrash = (product, color, count = 1) => {
    let trash = JSON.parse(localStorage.getItem('trash'))
    let trashProduct = {
        product: product,
        count: count,
        color: color
    }

    let existItem = trash.products.find(item => item.product.id === product.id && item.color === color);
    if (existItem) {
        existItem.count = count;

    } else {
        trash.products.push(trashProduct)
    }

    /*
    if (newTrash.length) {
        trash.products = trash.products.filter(item => item.product.id !== product.id)
    } else {
        trash.products.push(trashProduct)
    }
    localStorage.setItem('trash', JSON.stringify(trash))


    let newTrash = trash.products.filter(item => item.product.id === product.id)
    if (newTrash.length) {
        trash.products = trash.products.filter(item => item.product.id !== product.id)
    } else {
        trash.products.push(trashProduct)
    }
    */
    localStorage.setItem('trash', JSON.stringify(trash))
}