const initialState = {
    products: [],
    loading: true,
    error: null,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.payload.products,
                loading: false,
            };
        case 'CREATE_PRODUCT_SUCCESS':
        case 'UPDATE_PRODUCT_SUCCESS':
            return {
                ...state,
                products: [...state.products, action.payload],
                loading: false,
            };
        case 'DELETE_PRODUCT_SUCCESS':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
                loading: false,
            };
        case 'FETCH_PRODUCTS_FAIL':
        case 'CREATE_PRODUCT_FAIL':
        case 'UPDATE_PRODUCT_FAIL':
        case 'DELETE_PRODUCT_FAIL':
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
