import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Category from "./Components/Category/Category";
import SingleProduct from "./Components/Category/Category";
import Newsletter from "./Components/NewsLetter/NewsLetter";
import Footer from "./Components/Footer/Footer";
// import AppContext from "./utils/context";


function App() {
  return (

<BrowserRouter>
  
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:id" element={<Category/>} />
        <Route path="/SingleProduct/:id" element={<SingleProduct/>} />
      </Routes>
      <Newsletter/>
    <Footer/>
 
</BrowserRouter>

  );
}

export default App;
