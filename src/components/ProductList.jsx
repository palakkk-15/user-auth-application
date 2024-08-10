import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import DeleteProduct from './DeleteProduct';
import { Link } from 'react-router-dom';

const ProductList = ({ fetchProducts, products: { products, loading, error } }) => {
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="product-list">
            <h2>Product List</h2>
            <p>Total Products: {products.length}</p>
            <Link to="/create-product" className="create-button">Create New Product</Link>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <Link to={`/update-product/${product.id}`} className="update-button">
                                    Update
                                </Link>
                                <DeleteProduct id={product.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
