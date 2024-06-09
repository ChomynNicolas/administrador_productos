import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export const ProductDetail = () => {
  const [product, setproduct] = useState()
  const {id} = useParams();
  const navigate = useNavigate();
  console.log(id)
  useEffect(() => {
    axios.get(`http://localhost:3001/api/${id}`)
      .then(res => setproduct(res.data));

  
    
  }, [id])

  const handleDeleteProduct = ()=>{
    axios.delete(`http://localhost:3001/api/${id}`)
      .then(res => console.log(res));
    navigate('/');
  }




  if(!product){
    return (<div>Loading...</div>)
  }
  
  
  return (

  <div className="product-detail">
    <h3>{product.title}</h3>
    <p>{product.price}$</p>
    <p>{product.description}</p>
    <div className="contenedor-editDelet">
      <Link className="editar-btn" to={`/${product._id}/edit`}>Editar</Link>
      <button className="delete-btn" onClick={handleDeleteProduct}>Eliminar</button>
    </div>
  </div>

);
};
