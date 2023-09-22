import React from 'react';
import {MdClose} from 'react-icons/md';
import prod from '../../../assets/category/Jib-True-2_True-Black_S1JTW-N740_S1JTW-P740_Buds-Case-Open-Hero_v005-1.jpg';
import './Search.scss';

export default function Search({setSearchModal}) {
  return (
    <>
          <div className='search-modal'>
            <div className="form-field">
                <input type="text" autoFocus placeholder="enter the item name"/>
                <MdClose onClick={() => { setSearchModal(false) }} />
            </div>


                <div className="search-result-content">
                  <div className="search-results">
                    <div className="search-result-item">
                      <div className="img-container">
                          <img src={prod} alt="product" />
                      </div> 
                          <div className="prod-details">
                                <span className="name">product name </span>
                                <span className="desc">product details</span>
                          </div>
                    </div>
                  </div>

                </div>
          </div>
          </>
  )
}
