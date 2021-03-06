const inistialState = {
    bestsellerlimit: [],
    bestsellerId: [],
    bestsellerlimitg: [],
    bestseller: [],
    bestsellervalue: [],
    collectionlimit: [],
    collection: [],
    collectionId: [],
    advantage: [],
    slider: [],
    about: [],
    help: [],
    public: [],
    inform: [],
    value: "",
    basket: [],
    favorites: [],
    cart: [],
    nuber: []
}
export const productsReducer = (state = inistialState, action) => {

    switch (action.type) {
        // BEST
        case "ALL_BESTSELLERLIMIT":
            return {
                ...state,
                bestsellerlimit: action.data
            }
        case "ALL_BESTSELLER":
            return {
                ...state,
                bestseller: action.data
            }
        case "ALL_BESTSELLERVALUE":
            return {
                ...state,
                bestsellervaleu: action.data
            }
        case "ALL_BESTSELLERLIMITG":
            return {
                ...state,
                bestsellerlimitg: action.data
            }
        case "ALL_BESTSELLERID":
            return {
                ...state,
                bestsellerId: action.data
            }
        // COLL
        case "ALL_COLLECTION":
            return {
                ...state,
                collection: action.data
            }
        case "ALL_COLLECTIONID":
            return {
                ...state,
                collectionId: action.data
            }
        case "ALL_COLLECTIONLIMIT":
            return {
                ...state,
                collectionlimit: action.data
            }
        case "SET_VALUE":
            return {
                ...state,
                value: action.data
            }
        // advantage
        case "ALL_ADVANTAGE":
            return {
                ...state,
                advantage: action.data
            }
        // help
        case "ALL_HELP":
            return {
                ...state,
                help: action.data
            }
        // about
        case "ALL_ABOUT":
            return {
                ...state,
                about: action.data
            }
        // SLIDER
        case "ALL_SLIDER":
            return {
                ...state,
                slider: action.data
            }
        // FAVOR
        case "GET_FAVORITES":
            return {
                ...state,
                favorites: action.data
            }
        // basket
        case "GET_basket":
            return {
                ...state,
                basket: action.data
            }
        // PUBLC
        case "ALL_PUBLIC":
            return {
                ...state,
                public: action.data
            }
        // INFOR
        case "ALL_INFORM":
            return {
                ...state,
                inform: action.data
            }
        // CART
        case "GET_CART":
            return {
                ...state,
                cart: action.data
            }
        // NUMBER
        case "ALL_NUMBER":
            return {
                ...state,
                number: action.data
            }
        default: return state
    }
}