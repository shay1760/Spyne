import React, { createContext, useState } from "react";
import { products as initialProducts } from "../assets/assets.js";

// Create context
export const CarContext = createContext();

// CarContextProvider component
const CarContextProvider = (props) => {
    const currency = '₹';
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [products, setProducts] = useState(initialProducts); // Added state for products

    // Function to update a product
    const updateProduct = (id, updatedData) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product._id === id ? { ...product, ...updatedData } : product
            )
        );
    };

    const value = {
        products,
        currency,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        updateProduct, // Added updateProduct to context value
    };

    return (
        <CarContext.Provider value={value}>
            {props.children}
        </CarContext.Provider>
    );
};

export default CarContextProvider;
