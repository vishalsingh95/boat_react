import "./SingleProduct.scss";
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCartPlus, FaPinterest } from 'react-icons/fa';

import Single from '../../assets/music-on-mission-desctop.jpg';
import RelatedProducts from "./RelatedProducts/RelatedProducts";


const SingleProduct = () => {


    return  <div className="single-product-main-content">SingleProduct
         <div className="layout">
            <div className="single-product-page">
                <div className="left">
                        <img src={Single} alt="" />
                </div>
                <div className="right">
                        <div className="name">Product Name </div>
                        <div className="price">Price</div>
                        <div className="desc">Description</div>

                        <div className="carrt-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>3</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus/>
                                Add to cart
                            </button>
                        </div>
                        <span className="divider"></span>

                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                               <span>Headphones</span>
                            </span>
                            

                            <span className="text-bold">
                                Share:
                               <span className="social-icons" >
                                 <FaFacebook/>
                                 <FaInstagram/>
                                 <FaTwitter/>
                                 <FaLinkedin/>
                                 <FaPinterest/>
                               </span>
                            </span>


                        </div>
                </div>
            </div>



            <RelatedProducts/>
         </div>
    </div>
    };


export default SingleProduct;


