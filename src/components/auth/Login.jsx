import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = ({ login, auth: { error } }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={onSubmit}>
                <h2>Login</h2>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
                {error && <p className="error-message">{error}</p>} {/* Display error message */}
                <p>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
};

// Map state to props to get error messages
const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
