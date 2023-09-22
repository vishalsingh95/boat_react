import React from 'react';
import Products from '../../Products/Products';

import './RelatedProducts.scss';

export default function RelatedProducts() {
  return (
    <div className='related-products'> 
        <Products headingText="Related Products"/>
    </div>
  )
}
