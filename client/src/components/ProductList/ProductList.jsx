import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeleteButton } from "./components/DeleteButton/DeleteButton";


export const ProductList = ({products,setproducts}) => {
  
  const [loaded, setloaded] = useState(false)
  useEffect(() => {
  axios.get('https://administrador-productos-api-mf6c.onrender.com/api')
  .then(res => {
    setproducts(res.data);
    setloaded(true);

  })
  
  
  }, [setproducts,products])
  
  const handleDeleteProduct = (id)=>{
    
    const productFilter = products.filter((product)=> product._id !== id)
    setproducts(productFilter);
    
    
  }

  return (
  <div>
    <h1>Todos los productos</h1>
    <ul className="ul-product">
    {loaded && products.map((product,index)=>{
      return (
        <div className="productos-container">
        <Link to={`/${product._id}`} key={index} className="link">
        <li>{product.title}</li>
        </Link>
        <DeleteButton  id={product._id} callbackSuccess={()=>handleDeleteProduct(product._id)}/>
        </div>
      );
      })}
    </ul>

  </div>
  );
};



