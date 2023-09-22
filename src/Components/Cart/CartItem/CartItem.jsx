import React from 'react';
import {MdClose} from 'react-icons/md';
import imgcrt from '../../../assets/category/Grind10.jpg';

const imageSize = {
  width: '24px',  // You can use 'px', 'em', 'rem', '%' or any other valid CSS unit
  height: '24px', // Same unit as width
};

export default function CartItem() {
  return (
    <div className='cart-products' >
      <div className="cart-product">
        <div className="img-container">
          <img src={imgcrt} alt="" size={imageSize} />
        </div>
            <div className="prod-details">
                  <span className="name">Product name</span>
                  
                    <MdClose  className="close-btn" />

                      <div className="quantity-buttons">
                          <span>-</span>
                          <span>3</span>
                          <span>+</span>
                      </div>

                      <div className="text">
                          <span>3</span>
                          <span>x</span>
                          <span className='highlight'>2700</span>
                      </div>
            </div>
      </div>
    </div>
  )
}
