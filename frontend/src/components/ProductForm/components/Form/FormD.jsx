





export const FormD = ({handleSubmit,title,settitle,price,setprice,description,setDescription}) => {
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
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <button className="btn">Crear</button>
    </form>
  );
};
