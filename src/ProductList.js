import React, { useState, useEffect } from "react";
import './ProductList.css';
import ProductItem from "./ProductItem";
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // Fetch data from the url
        fetch("https://dummyjson.com/products")
            .then((response) => {

                return response.json();
            })
            .then((data) => {
                // Update  products array
                setProducts(data.products);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="app-container">
            <h1 className="title">Product List</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductItem product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
