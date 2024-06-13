import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormD } from "../ProductForm/components/Form/FormD";

export const EditarProduct = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://administrador-productos-api-mf6c.onrender.com/api/${id}`)
      .then((res) => setProducto(res.data));
  }, [id]);

  if (!producto) {
    return <div>Loading...</div>;
  }

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const { title, price, descripcion } = producto;
    axios.put(`https://administrador-productos-api-mf6c.onrender.com/api/${id}/edit`, {
      title,
      price,
      descripcion,
    });
    navigate(`/`);
  };

  const settitle = (e) => {
    setProducto({ ...producto, title: e });
  };
  const setprice = (e) => {
    setProducto({ ...producto, price: e });
  };
  const setDescription = (e) => {
    setProducto({ ...producto, description: e });
  };

  return (
    <>
      <FormD
        handleSubmit={handleEditSubmit}
        title={producto.title}
        settitle={settitle}
        price={producto.price}
        setprice={setprice}
        description={producto.description}
        setDescription={setDescription}
        accion="Editar"
      />
    </>
  );
};
