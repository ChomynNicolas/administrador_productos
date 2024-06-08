import { useState } from "react";
import { ProductManager } from "../ProductForm/ProductManager";
import { ProductList } from "../ProductList/ProductList";


export const Main = () => {
  const [products, setproducts] = useState()
  return (
  
  
  <>

  <ProductManager products={products} setproducts={setproducts}/>
  <br/>
  <ProductList products={products} setproducts={setproducts}/>

  </>


);
};
