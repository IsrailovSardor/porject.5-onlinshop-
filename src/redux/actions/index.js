export const addCart = (bestseller) => { 
    return {
        type : "ADDITEM",
        payload: bestseller
    }
}
export const delCart = (bestseller) => { 
    return {
        type : "DELITEM",
        payload: bestseller
    }
}

export const addCarFav = (bestsellers) => { 
    return {
        type : "ADDITEMFAV",
        payload: bestsellers
    }
}
export const delCartFav = (bestsellers) => { 
    return {
        type : "DELITEMFAV",
        payload: bestsellers
    }
}