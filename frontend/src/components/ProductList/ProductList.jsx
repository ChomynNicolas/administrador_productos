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
  


  return (
  <div>
    <h1>Todos los productos</h1>
    <ul>
    {loaded && products.map((product,index)=>{
      return (
        <Link to={`/${product._id}`} key={index} className="link">
        <li>{product.title}</li>
        </Link>
      );
      })}
    </ul>

  </div>
  );
};
