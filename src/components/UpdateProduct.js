import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../actions/productActions';

const UpdateProduct = ({ match, updateProduct, products: { products } }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
    });

    const { name, price, description } = formData;

    useEffect(() => {
        const product = products.find((prod) => prod.id === parseInt(match.params.id, 10));
        if (product) {
            setFormData({
                name: product.name,
                price: product.price,
                description: product.description,
            });
        }
    }, [match.params.id, products]);

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        updateProduct(match.params.id, formData);
    };

    return (
        <div className="update-product">
            <h2>Update Product</h2>
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
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
});

export default connect(mapStateToProps, { updateProduct })(UpdateProduct);
