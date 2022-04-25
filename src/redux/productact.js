import axios from "axios"
// BESTSELLER
export function getProdcutBestLimit(page, limit) {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/products?_page=${page}&_limit=${limit}`)
        dispatch({
            type: "ALL_BESTSELLERLIMIT",
            data
        })
    }
}
export function getProdcutBestG ( page, limitq ) {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/products?_page=${page}&_limit=${limitq}`)
        dispatch({ 
            type : "ALL_BESTSELLERLIMITG",
            data  
        })
    }
}
export function getProdcutBest() {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/products`)
        dispatch({
            type: "ALL_BESTSELLER",
            data
        })
    }
}
export function getProdcutBestValue(value) {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/products?q=${value}`)
        dispatch({
            type: "ALL_BESTSELLERVALUE",
            data
        })
    }
}
export function getProdcutBestId(id) {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/products/${id}`)
        dispatch({
            type: "ALL_BESTSELLERID",
            data
        })
    }
}
// COLLECTION
export function getProdcutColLim(limit) {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/collection/?_limit=${limit}`)
        dispatch({
            type: "ALL_COLLECTIONLIMIT",
            data
        })
    }
}

export function getProdcutCollectionId(id) {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/collection/${id}`)
        dispatch({
            type: "ALL_COLLECTIONID",
            data
        })
    }
}
export function getProdcutCollection() {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/collection`)
        dispatch({
            type: "ALL_COLLECTION",
            data
        })
    }
}
// FAVORITES
export function getFavorites() {
    return (dispatch) => {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (!favorites) {
            favorites = {
                products: []
            }
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
        dispatch({
            type: "GET_FAVORITES",
            data: favorites.products
        })
    }
}
// TRASH
export function getTrash() {
    return (dispatch) => {
        let trash = JSON.parse(localStorage.getItem('trash'))
        if (!trash) {
            trash = {
                products: []
            }
        }
        localStorage.setItem('trash', JSON.stringify(trash))
        dispatch({
            type: "GET_TRASH",
            data: trash.products
        })
    }
}

// ADVANTAGE
export function getProdcutAdvantage() {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/advantage`)
        dispatch({
            type: "ALL_ADVANTAGE",
            data
        })
    }
}
// ABOUT
export function getProdcutAbout() {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/about`)
        dispatch({
            type: "ALL_ABOUT",
            data
        })
    }
}
// slider
export function getProdcutSlider() {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/slider`)
        dispatch({
            type: "ALL_SLIDER",
            data
        })
    }
}
// NUMBER
export function getProdcutNumber() {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/nomer`)
        dispatch({
            type: "ALL_NUMBER",
            data
        })
    }
}
// help
export function getProdcutHelp() {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/help`)
        dispatch({
            type: "ALL_HELP",
            data
        })
    }
}
// public
export function getProdcutPublic() {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/publuch`)
        dispatch({
            type: "ALL_PUBLIC",
            data
        })
    }
}
// inform
export function getProdcutInform() {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/informat`)
        dispatch({
            type: "ALL_INFORM",
            data
        })
    }
}
// CART
export function getCart() {
    return (dispatch) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                products: []
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: "GET_CART",
            payload: cart.products
        })
    }
}