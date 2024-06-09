import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const ProductList = ({products,setproducts}) => {
  
  const [loaded, setloaded] = useState(false)
  useEffect(() => {
  axios.get('http://localhost:3001/api')
  .then(res => {
    setproducts(res.data);
    setloaded(true);

  })
  
  
  }, [setproducts,products])
  
  const handleDeleteProduct = (id)=>{
    axios.delete(`http://localhost:3001/api/${id}`)
      .then(res => console.log(res));
    const productFilter = products.filter((product)=> product._id !== id)
    setproducts(productFilter);
    setloaded(true);
    
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
        <button className="delete-btn" onClick={()=>handleDeleteProduct(product._id)}>Eliminar</button>
        </div>
      );
      })}
    </ul>

  </div>
  );
};
