const carts = []
const handlefavor = (states = carts, action) => {
    const bestsellers = action.payload;
    switch (action.type) {
        case "ADDITEMFAV":
            const exists = states.find((x) => x.id === bestsellers.id)
                if(exists) {
                    return states.map((x) => 
                    x.id === bestsellers.id ? {...x, qty: x.qty + 1 } : x
                    );
                }else {
                    const bestsellers = action.payload;
                    return[
                        ...states,
                        {
                            ...bestsellers,
                            qty: 1,
                        }
                    ]
                }
            break;

            case "DELITEMFAV" :
                const exist1s = states.find((x) => x.id === bestsellers.id)
                if(exist1s.qty === 1) {
                    return states.filter((x) => x.id !== exist1s.id 
                    );
                }else {
                
                    return states.map((x) => 
                    x.id === bestsellers.id ? {...x, qty: x.qty - 1 } : x
                    );
                }

        default:
            return states;
            break;
    }
}
export default handlefavor






