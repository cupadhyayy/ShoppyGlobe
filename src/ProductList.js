// Importing necessary modules from React and other components
import React, { useState, useEffect } from "react";
import './ProductList.css'; // Importing the CSS file for styling
import ProductItem from "./ProductItem"; // Importing the ProductItem component to display individual products

// ProductList component is responsible for displaying a list of products
const ProductList = () => {
    // State to store products data fetched from the API
    const [products, setProducts] = useState([]);
    // State to track if the data is still loading
    const [loading, setLoading] = useState(true);
    // State to store any error that may occur during the fetch process
    const [error, setError] = useState(null);
    // State to store the search query entered by the user
    const [searchQuery, setSearchQuery] = useState(""); 

    // useEffect hook to fetch product data when the component mounts
    useEffect(() => {
        // Fetch data from the external API
        fetch("https://dummyjson.com/products")
            .then((response) => response.json()) // Parse the response as JSON
            .then((data) => {
                // Set the fetched product data to the state
                setProducts(data.products);
                // Set loading to false as data has been fetched
                setLoading(false);
            })
            .catch((error) => {
                // Handle any error during the fetch operation
                setError(error.message);
                setLoading(false);
            });
    }, []); // Empty dependency array means this effect runs only once, when the component mounts

    // Filter products based on the search query
    const filteredProducts = products.filter((product) => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search for product title
    );

    // Handle changes in the search input field
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value); // Update the search query state with the input value
    };

    // If the data is still loading, display a loading message
    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    // If there was an error during the fetch operation, display the error message
    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    // Render the product list along with search functionality
    return (
        <div className="app-container">
            {/* Title of the page */}
            <h1 className="title">Product List</h1>

            {/* Search Input for filtering products */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for products..." // Placeholder text in the search box
                    value={searchQuery} // Controlled input using searchQuery state
                    onChange={handleSearchChange} // Update searchQuery state when the input changes
                />
            </div>

            {/* Displaying the list of products */}
            <div className="product-list">
                {/* Conditional rendering based on the filtered products length */}
                {filteredProducts.length > 0 ? (
                    // If there are filtered products, map over them and render a ProductItem for each one
                    filteredProducts.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                ) : (
                    // If no products match the search, display a message
                    <div>No products found</div>
                )}
            </div>
        </div>
    );
};

export default ProductList; // Exporting the ProductList component for use in other parts of the app
