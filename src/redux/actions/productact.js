import axios from "axios"
// BESTSELLER
export function getProdcutBest ( limit ) {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/bestseller/?_limit=${limit}`)
        dispatch({ 
            type : "ALL_BESTSELLERLIMIT",
            data  
        })
    }
}
export function getProdcutBestG ( limitg ) {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/bestseller/?_limit=${limitg}`)
        dispatch({ 
            type : "ALL_BESTSELLERLIMITG",
            data  
        })
    }
}
export function getProdcutBestId ( id ) {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/bestseller/${id}`)
        dispatch({ 
            type : "ALL_BESTSELLERID",
            data  
        })
    }
}
// COLLECTION
export function getProdcutColLim ( limit ) {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/collection/?_limit=${limit}`)
        dispatch({ 
            type : "ALL_COLLECTIONLIMIT",
            data  
        })
    }
}

export function getProdcutCollectionId ( id ) {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/collection/${id}`)
        dispatch({ 
            type : "ALL_COLLECTIONID",
            data  
        })
    }
}
export function getProdcutCollection (  ) {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/collection`)
        dispatch({ 
            type : "ALL_COLLECTION",
            data  
        })
    }
}