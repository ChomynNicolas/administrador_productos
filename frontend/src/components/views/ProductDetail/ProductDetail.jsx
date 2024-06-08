import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


export const ProductDetail = () => {
  const [product, setproduct] = useState()
  const {id} = useParams();
  console.log(id)
  useEffect(() => {
    axios.get(`http://localhost:3001/api/${id}`)
      .then(res => setproduct(res.data));

  
    
  }, [id])


  if(!product){
    return (<div>Loading...</div>)
  }
  
  
  return (

  <div className="product-detail">
    <h3>{product.title}</h3>
    <p>{product.price}$</p>
    <p>{product.description}</p>
  </div>

);
};
