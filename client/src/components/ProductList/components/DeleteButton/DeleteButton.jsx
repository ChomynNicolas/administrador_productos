import axios from "axios";

export const DeleteButton = ({id, callbackSuccess}) => {

  const deletePerson =()=>{
    axios.delete(`https://administrador-productos-api-mf6c.onrender.com/api/${id}`)
        .then(res => callbackSuccess());
  }  

  return (
  
  
    <button className="delete-btn" onClick={()=>deletePerson(id)}>Eliminar</button>
  

);
};
