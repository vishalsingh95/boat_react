import "./Newsletter.scss";

import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";

const Newsletter = () => {


    return  <div className="newsletter-section">
                 <div className="newsletter-content">
                    <span className="small-text">Newsletter</span>
                    <span className="big-text">Sign up for the latest updates and offers</span>
                    <div className="form">
                        <input type="text" name="" id="" placeholder="Enter Email" />
                        <button type="submit">Subscribe</button>
                    </div>
                    <div className="text">will be used in accordance with our privacy policy</div>
                    <div className="social-icons">
                        <div className="icon">
                            <FaFacebook size={14} />
                        </div>

                        <div className="icon">
                            <FaInstagram size={14} />
                        </div>

                        <div className="icon">
                            <FaTwitter size={14} />
                        </div>
                       
                    </div>
                 </div>
            </div>
    };


export default Newsletter;