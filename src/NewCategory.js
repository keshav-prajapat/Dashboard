import React from 'react';
import './NewCategory.css';

const NewCategory = () => {
    return (
        <div className="new-category-container">
            <h2 className="new-category-title">New Category</h2>
            <div className="new-category-box">
            <label className="category-label">Category Name</label>
                <input type="text" placeholder="Enter category name" className="category-input" />
            </div>
            <div className="button-container">
                <button className="discard-btn">Discard</button>
                <button className="add-category-btn">Add Category</button>
            </div>
        </div>
    );
};

export default NewCategory;
