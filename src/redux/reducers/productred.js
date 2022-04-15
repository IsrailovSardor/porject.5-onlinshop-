const inistialState = {
    // BEST
    bestsellerlimit: [],
    bestsellerId: [],
    bestsellerlimitg: [],
    // COLL
    collectionlimit: [],
    collection: [],
    collectionId: [],
}
export const productsReducer = (state = inistialState, action) => {

    switch (action.type) {
        // BEST
        case "ALL_BESTSELLERLIMIT":
            return {
                ...state,
                bestsellerlimit: action.data
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
        default: return state
    }


}