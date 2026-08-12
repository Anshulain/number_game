import React from "react";
import Product from "./Product";

function ProductList({products = []}) {
    return( 
    <div className="flex flex-wrap gap-4 justify-start items-start object-cover ">

          {products.map((product ) => (<Product
              key={product.sku}
              {...product}
            />
          ))}
 
    
        </div>
    );
}

export default ProductList; 