const cart = []
const handleCart = (state = cart, action) => {
    const bestseller = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === bestseller.id)
                if(exist) {
                    return state.map((x) => 
                    x.id === bestseller.id ? {...x, qty: x.qty + 1 } : x
                    );
                }else {
                    const bestseller = action.payload;
                    return[
                        ...state,
                        {
                            ...bestseller,
                            qty: 1,
                        }
                    ]
                }
            break;

            case "DELITEM" :
                const exist1 = state.find((x) => x.id === bestseller.id)
                if(exist1.qty === 1) {
                    return state.filter((x) => x.id !== exist1.id 
                    );
                }else {
                
                    return state.map((x) => 
                    x.id === bestseller.id ? {...x, qty: x.qty - 1 } : x
                    );
                }

        default:
            return state;
            break;
    }
}
export default handleCart

