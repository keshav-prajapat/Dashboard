// src/NewProduct.js
import React, { useState } from 'react';
import './NewProduct.css';

const NewProduct = () => {
    const [discounts, setDiscounts] = useState([
        { name: '', value: '' },
        { name: '', value: '' },
        { name: '', value: '' },
    ]);

    const handleDiscountChange = (index, field, value) => {
        const newDiscounts = [...discounts];
        newDiscounts[index][field] = value;
        setDiscounts(newDiscounts);
    };

    return (
        <div className="new-product-container">
            <div className="form-container">
                <h2 className="new-product-title">New Product</h2>
                <form className="new-product-form">
                    <div className="form-group">
                        <label className="form-label">Product Name</label>
                        <input type="text" placeholder="Enter product name" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Buying Price</label>
                        <input type="text" placeholder="Enter Buying Price" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Category</label>
                        <input type="text" placeholder="Select Product Category" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">No Of Discount</label>
                        <input type="number" placeholder="Enter Number" className="form-input" />
                    </div>
                    {/* <h3 className="discount-title">Discounts</h3> */}
                    {discounts.map((discount, index) => (
                        <div key={index} className="discount-group">
                            <input
                                type="text"
                                placeholder="Discount Name"
                                className="form-input discount-input"
                                value={discount.name}
                                onChange={(e) => handleDiscountChange(index, 'name', e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Discount Value"
                                className="form-input discount-input"
                                value={discount.value}
                                onChange={(e) => handleDiscountChange(index, 'value', e.target.value)}
                            />
                        </div>
                    ))}
                    
                    <div className="button-container">
                        <button type="button" className="discard-btn">Discard</button>
                        <button type="submit" className="add-product-btn">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewProduct;
