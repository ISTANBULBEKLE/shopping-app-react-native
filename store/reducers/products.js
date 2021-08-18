import PRODUCTS from "../../data/dummy-data";

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === "u1")
};

export default (state = initialState, action) => {
    // switch (action.type) {
    //     case 'ADD_PRODUCT':
    //         return {
    //             ...state,
    //             availableProducts: [
    //                 ...state.availableProducts,
    //                 action.product
    //             ]
    //         };
    //     case 'REMOVE_PRODUCT':
    //         return {
    //             ...state,
    //             availableProducts: state.availableProducts.filter(product => product.id !== action.product.id)
    //         };
    //     case 'ADD_USER_PRODUCT':
    //         return {
    //             ...state,
    //             userProducts: [
    //                 ...state.userProducts,
    //                 action.product
    //             ]
    //         };
    //     case 'REMOVE_USER_PRODUCT':
    //         return {
    //             ...state,
    //             userProducts: state.userProducts.filter(product => product.id !== action.product.id)
    //         };
    //     default:
    //         return state;
    // }
    return state;
};