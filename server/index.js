require('dotenv').config()
const express = require("express");
const port = 3001;
const cors = require("cors");

const app = express();

require("./config/mongoose.config");



app.use(express.json(), express.urlencoded({ extended: true }), cors({
  origin: ["https://deploy-mern-1whq.vercel.app"],
  methods: ["POST","GET","PUT","DELETE"],
  credentials: true
}));

const ProductRoutes = require("./routes/product.routes");
ProductRoutes(app);

app.listen(port, () => {
  console.log(`servidor prendido en el puerto ${port}`);
});
