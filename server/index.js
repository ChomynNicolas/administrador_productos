require('dotenv').config()
const express = require("express");
const port = process.env.PORT || 3001;
const cors = require("cors");

const app = express();

require("./config/mongoose.config");



app.use(express.json(), express.urlencoded({ extended: true }), cors());

const ProductRoutes = require("./routes/product.routes");
ProductRoutes(app);

app.listen(port, () => {
  console.log(`servidor prendido en el puerto ${port}`);
});
