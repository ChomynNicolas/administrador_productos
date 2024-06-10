import axios from "axios";

export const DeleteButton = ({id, callbackSuccess}) => {

  const deletePerson =()=>{
    axios.delete(`http://localhost:3001/api/${id}`)
        .then(res => callbackSuccess());
  }  

  return (
  
  
    <button className="delete-btn" onClick={()=>deletePerson(id)}>Eliminar</button>
  

);
};
