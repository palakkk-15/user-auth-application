import axios from 'axios';

// Define the API URL
const API_PRODUCTS_URL = 'https://dummyjson.com/products';

// Action to fetch products
export const fetchProducts = () => async (dispatch) => {
    try {
        const res = await axios.get(API_PRODUCTS_URL);
        dispatch({
            type: 'FETCH_PRODUCTS_SUCCESS',
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: 'FETCH_PRODUCTS_FAIL',
            payload: err.message,
        });
    }
};
// Create Product
export const createProduct = (product) => async (dispatch) => {
    try {
        const res = await axios.post(API_PRODUCTS_URL, product);
        dispatch({
            type: 'CREATE_PRODUCT_SUCCESS',
            payload: res.data,
        });
        dispatch(fetchProducts()); // Refresh the list
    } catch (err) {
        dispatch({
            type: 'CREATE_PRODUCT_FAIL',
            payload: err.message,
        });
    }
};

// Update Product
export const updateProduct = (id, product) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_PRODUCTS_URL}/${id}`, product);
        dispatch({
            type: 'UPDATE_PRODUCT_SUCCESS',
            payload: res.data,
        });
        dispatch(fetchProducts()); // Refresh the list
    } catch (err) {
        dispatch({
            type: 'UPDATE_PRODUCT_FAIL',
            payload: err.message,
        });
    }
};

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API_PRODUCTS_URL}/${id}`);
        dispatch({
            type: 'DELETE_PRODUCT_SUCCESS',
            payload: id,
        });
        dispatch(fetchProducts()); // Refresh the list
    } catch (err) {
        dispatch({
            type: 'DELETE_PRODUCT_FAIL',
            payload: err.message,
        });
    }
};
