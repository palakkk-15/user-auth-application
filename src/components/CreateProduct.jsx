import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../actions/productActions';

const CreateProduct = ({ createProduct }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
    });

    const { name, price, description } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        createProduct(formData);
        setFormData({
            name: '',
            price: '',
            description: '',
        });
    };

    return (
        <div className="create-product">
            <h2>Create Product</h2>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="Product Name"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={onChange}
                    placeholder="Product Price"
                    required
                />
                <textarea
                    name="description"
                    value={description}
                    onChange={onChange}
                    placeholder="Product Description"
                    required
                ></textarea>
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default connect(null, { createProduct })(CreateProduct);
