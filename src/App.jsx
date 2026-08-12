import ProductListPage from "./ProductListPage"    
import {Routes, Route, } from "react-router-dom";
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import Product from "./Product"
import Footer from "./Footer"

function App() {


  return ( <>
  

  

      <Routes>
        <Route  index element={<ProductListPage />}></Route>
        <Route path="/ProductDetail/:sku" element={<ProductDetail />}></Route>
      </Routes>


      <div>
      <Footer />


      </div>


    

  </>
    
 
  );
 
}
export default App; 






// Base URL : https://discord.com/api

//SEND MESSAGE
// hannels/{channel.id}/messages
//method -> GET, POST, PUT, PATCH, DELETE








// https://dummyjson.com/products

