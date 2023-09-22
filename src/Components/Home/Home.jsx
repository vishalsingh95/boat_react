import { useEffect } from "react";

import "./Home.scss";
import Banner from "../Home/Banner/Banner";
import Category from "../Category/Category";
import Products from "../Products/Products";

import {fetchDataFromApi} from "../../utils/api";
const Home = () => {


    useEffect(() =>{
        getCategories()
    }, []
    )

    const getCategories=()=>{
        fetchDataFromApi("/api/categories/").then ( res => console.log(res, "hello this aakash") )
    }

    return  <div>
                    <Banner/>
                    <div className="main-content">
                        <div className="layout">
                                <Category/>
                                <Products headingText="Trending Products"/>
                        </div>
                    </div>
            </div>
    };


export default Home;