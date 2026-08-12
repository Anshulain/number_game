 import { useEffect, useState } from 'react'
import {Routes, Route, } from "react-router-dom";
import Navbar from './Navbar' 
import Footer from './Footer'
import Product from './Product'
import ProductList from './ProductList'
import Sidebar from './Sidebar'
import NoProduct from './NoProduct'
import ProductDetail from './ProductDetail'
import allData from "./DummyData"
import { getProductList } from "./api"





function ProductListPage() {
  const [productList, setProductList] = useState([]);
const [query, setQuery] = useState('');
const [sort, setSort] = useState('default');
 
const [data, setData] = useState([]);


 
useEffect(function () {
  const Tokan = getProductList();

Tokan.then(function (response) {
 setProductList(response.data.products);
 setData(response.data.products);
});

}, []);
 



function handleQueryChange(event) {
  const newQuery = event.target.value;

  let Data = productList.filter(function(product) {
    const lowerCaseTitle = product.title.toLowerCase();
    const lowerCaseQuery = newQuery.toLowerCase();    

    return lowerCaseTitle.indexOf
  (lowerCaseQuery) != -1;
});

  setQuery(newQuery);
  setData(Data);
}

function handleSortChange(event) {
  const value = event.target.value;
  setSort(value);

  let Data = [...data];

  if (value === "title") {
    Data.sort((a, b) => a.title.localeCompare(b.title));
  } 
  else if (value === "price-low-high") {
    Data.sort((a, b) => a.price - b.price);
  } 
  else if (value === "price-high-low") {
    Data.sort((a, b) => b.price - a.price);
  }

  setData(Data);
}
 return (

  <div className="flex min-h-screen"> 
    <Sidebar />
    <div className="flex flex-col flex-1">
      
      {/* Navbar */}
      <div className="bg-white shadow-md p-2 flex justify-between items-center">
        <input
          value={query}
          placeholder="Search products..."
          className="border px-3 py-2 rounded-md"
          onChange={handleQueryChange}
        />

        <select
          onChange={handleSortChange}
          value={sort}
          className="border px-3 py-2 rounded-md">
          <option value="default">Default Sort</option>
          <option value="title">Sort by title</option>
          <option value="price-low-high">Low to High</option>
          <option value="price-high-low">High to Low</option>
        </select>
               </div>

     <div className="m-6">
     {data.length > 0 &&  <ProductList products={data} />}
     {data.length == 0 && <NoProduct/>}
     </div>
     
           
  

 
 
  
 
 
    </div>
  </div>
);
}

export default ProductListPage; 








