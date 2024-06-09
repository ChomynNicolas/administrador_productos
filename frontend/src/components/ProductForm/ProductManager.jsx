import { useState } from "react";
import "./productmanager.css";
import axios from "axios";
import {FormD} from "../ProductForm/components/Form/FormD";

export const ProductManager = ({ products, setproducts }) => {
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
      .then((prod) => setproducts([...products, prod]))
      .catch((err) => console.log(err));
    settitle("");
    setprice("");
    setDescription("");
  };

  return (
    <FormD
      handleSubmit={handleSubmit}
      title={title}
      settitle={settitle}
      price={price}
      setprice={setprice}
      description={description}
      setDescription={setDescription}
    />
  );
};
