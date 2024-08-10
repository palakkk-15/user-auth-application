import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../actions/productActions';

const DeleteProduct = ({ id, deleteProduct }) => {
    const onDelete = () => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            deleteProduct(id);
        }
    };

    return (
        <button onClick={onDelete} className="delete-button">
            Delete
        </button>
    );
};

export default connect(null, { deleteProduct })(DeleteProduct);
