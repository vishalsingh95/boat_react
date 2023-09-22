import React from 'react';
import Products from '../Products/Products';

export default function Category() {
  return (
    <div className='category-main-content'>
        <div className="layout">
            <div className="category-title">
                Category Title
            </div>
                <Products innerPage={true} />
        </div>
    </div>
  )
}
