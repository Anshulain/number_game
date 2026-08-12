import axios from 'axios';


export function getProductData(id) {
console.log("getProductData");
}

 export function getProductList() {
return axios.get("https://dummyjson.com/products");
 
}