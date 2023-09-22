import React from "react";
import "./Banner.scss";
import Bannerimg from '../../../assets/banner-img.png';


const Banner = () => {


    return ( 
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
            <h1> Mini And Mighty </h1>
                
                
                    <p>
                        Meet our newest (and smallest) true wireless earbuds: Dime™. With exceptional sound quality, simple controls and a super-affordable price point, these little buds are poised to create some big noise in the market.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta"> Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
            </div>
            <img className="banner-img" src={Bannerimg} alt="" />
        </div>
    </div>
  );  };


export default Banner;