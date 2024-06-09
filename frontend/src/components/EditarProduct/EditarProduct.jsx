import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export const EditarProduct = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/${id}`)
      .then((res) => setProducto(res.data));
  }, [id]);

  if (!producto) {
    return <div>Loading...</div>;
  }

  const handleEditSubmit = (event)=>{
    event.preventDefault();
    const {title,price,descripcion}= producto
    axios.put(`http://localhost:3001/api/${id}/edit`,{
      title,
      price,
      descripcion
    })
    navigate(`/`);
    

  }



  return (
    <div>
      <form className="container" onSubmit={handleEditSubmit}>
        <h1 className="title">Product Manager</h1>
        <div className="container-info">
          <label>Title</label>
          <div className="input-container">
            <input
              type="text"
              value={producto.title}
              onChange={(e) =>
                setProducto({...producto,  title: e.target.value })
              }
            />
          </div>
        </div>

        <div className="container-info">
          <label>Price</label>
          <div className="input-container">
            <input
              type="number"
              value={producto.price}
              onChange={(e) => setProducto({...producto,  price: e.target.value} )}
            />
          </div>
        </div>

        <div className="container-info">
          <label>Descripcion</label>
          <div className="input-container">
            <input
              type="text"
              value={producto.description}
              onChange={(e) => setProducto({...producto,  descripcion: e.target.value })}
            />
          </div>
        </div>
        <button className="btn">Editar</button>
      </form>
    </div>
  );
};
