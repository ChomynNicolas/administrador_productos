import { useState } from "react";
import "./productmanager.css";
import axios from "axios";

export const ProductManager = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/createproduct", {
        title,
        price,
        description,
      })
      .then((prod) => console.log(prod))
      .catch((err) => console.log(err));
    settitle("");
    setprice("");
    setDescription("");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="title">Product Manager</h1>
      <div className="container-info">
        <label>Title</label>
        <div className="input-container">
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
      </div>

      <div className="container-info">
        <label>Price</label>
        <div className="input-container">
          <input
            type="number"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
      </div>

      <div className="container-info">
        <label>Descripcion</label>
        <div className="input-container">
          <input type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            
        </div>
      </div>
      <button className="btn">Crear</button>
    </form>
  );
};



