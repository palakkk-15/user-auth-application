import axios from 'axios';

// Define the API URLs
const API_LOGIN_URL = 'https://dummyjson.com/auth/login';
const API_REGISTER_URL = 'https://dummyjson.com/auth/register';
const API_USER_URL = 'https://dummyjson.com/auth/user'; // Update this if needed

// Load User
export const loadUser = () => async (dispatch) => {
    try {
        const res = await axios.get(API_USER_URL, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        dispatch({
            type: 'USER_LOADED',
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: 'AUTH_ERROR',
        });
    }
};

// Register User
export const register = (formData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const res = await axios.post(API_REGISTER_URL, formData, config);
        dispatch({
            type: 'REGISTER_SUCCESS',
            payload: res.data,
        });
        // Log in the user after registration
        dispatch(login(formData.email, formData.password));
    } catch (err) {
        dispatch({
            type: 'REGISTER_FAIL',
        });
    }
};

// Log In User
export const login = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(API_LOGIN_URL, body, config);
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data,
        });

        // Store the JWT token in local storage
        localStorage.setItem('token', res.data.token);

        // Load user after successful login
        dispatch(loadUser());
    } catch (err) {
        dispatch({
            type: 'LOGIN_FAIL',
        });
    }
};

// Log Out User
export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
};
