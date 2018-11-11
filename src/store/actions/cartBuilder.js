import * as actionTypes from './actionTypes';

export const incCartItemQty = (item) => {

    return {
        type: actionTypes.INC_CART_ITEM_QUANTITY,
        payload: item
    };

}

export const decCartItemQty = (item) => {

    return {
        type: actionTypes.DEC_CART_ITEM_QUANTITY,
        payload: item
    };

}

export const deleteFromCart = (item) => {

    return {
        type: actionTypes.DELETE_ITEM_FROM_CART,
        payload: item,
        availableQty: item.availableQty
    };

}

export const addToCart = (item) => {

    return {
        type: actionTypes.ADD_TO_CART,
        payload: item
    };
    
}

export const decShopItemQty = (id) => {

    return {
        type: actionTypes.DEC_SHOP_ITEM_QTY,
        id
    };
}