import STOCK from '../../data';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: STOCK
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.DEC_SHOP_ITEM_QTY:

            const { products } = state;
            const updatedProducts = products.map(product => {
                if (product.id === action.id) {
                    return {
                        ...product,
                        quantity: --product.quantity,
                    }
                }
                return product;
            })
            return {
                products: updatedProducts,
            }

        case actionTypes.INC_CART_ITEM_QUANTITY:
            {
                let { products } = state;
                const id = action.payload.id;
                let sameItem = products.filter(item => (id === item.id));

                if (sameItem.length) {
                    let quantity = sameItem[0].quantity - 1;
                    products = products.map((item) => {
                        if (item.id === id) {
                            return { ...item, quantity }
                        } else {
                            return item;
                        }
                    });
                }
                return {
                    products
                };
            }

        case actionTypes.DEC_CART_ITEM_QUANTITY:
            {
                let { products } = state;
                const id = action.payload.id;
                let sameItem = products.filter(item => (id === item.id));

                if (sameItem.length) {
                    let quantity = sameItem[0].quantity + 1;
                    products = products.map((item) => {
                        if (item.id === id) {
                            return { ...item, quantity }
                        } else {
                            return item;
                        }
                    });
                }
                return {
                    products
                };
            }

        case actionTypes.DELETE_ITEM_FROM_CART:
            {
                let { products } = state;
                const id = action.payload.id;
                let quantity = action.payload.quantity;
                let availableQty = action.availableQty;

                let sameItem = products.filter(item => (id === item.id));
                if (sameItem.length) {
                    quantity = quantity + availableQty;
                    products = products.map((item) => {
                        if (item.id === id) {
                            return { ...item, quantity }
                        } else {
                            return item;
                        }
                    });
                }
                return {
                    products
                };
            }

        default:
            return state;
    }
}

export default productReducer;