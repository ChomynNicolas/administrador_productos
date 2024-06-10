const express = require("express");
const port = 3001;
const cors = require("cors");

const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }), cors());

const ProductRoutes = require("./server/routes/product.routes");
ProductRoutes(app);

app.listen(port, () => {
  console.log(`servidor prendido en el puerto ${port}`);
});
