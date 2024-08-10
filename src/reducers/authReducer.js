const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null, // Add error to the state
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                error: null, // Clear error on success
            };
        case 'AUTH_ERROR':
        case 'LOGOUT':
        case 'REGISTER_FAIL':
        case 'LOGIN_FAIL':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                error: 'Login failed. Please check your credentials and try again.', // Set error message
            };
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload,
            };
        default:
            return state;
    }
}
