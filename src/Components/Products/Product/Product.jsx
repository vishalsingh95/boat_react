import React from 'react';
import "./Product.scss";
import prod from "../../../assets/air-buds-black.png";

export default function Product() {
  return (
    <div className='product-card'>
       <div className="thumbnail">
        <img src={prod} alt="" />
       </div>

             <div className="prod-details">
                   <span className="name"> Product Name</span>
                   <span className="price"> $24</span>
             </div>
       
    </div>
  )
}
