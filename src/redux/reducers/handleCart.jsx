const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDCART":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1) {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
            }
            return [
                ...state,
                {
                    ...product,
                    qty: 1,
                }
            ]
        case "DELCART":
            const exist = state.find((x) => x.id === product.id);
            if (exist.qty === 1) {
                return state.filter((x) => x.id !== exist.id);
            }
            else {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
            }
        default:
            return state;
    }
}

export default handleCart;