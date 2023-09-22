import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
// import { Context } from "../utils/context";
import Cart from "../Cart/Cart";
 
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
  
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };


    useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Correct the event name to "scroll"
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, []); // Add an empty dependency array


    return (
        <>
            
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`} >

                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li> {/* Add the correct navigation path */}
                        <li>Categories</li>
                    </ul>
                    <div className="center">
                        Skull Candy
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={()=> setShowCart(true)}>
                            <CgShoppingCart/>
                         <span></span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {searchModal && <Search setSearchModal={setSearchModal} />}
            
        </>
    );
};

export default Header;
