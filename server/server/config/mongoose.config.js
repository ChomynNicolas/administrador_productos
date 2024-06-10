const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log("base de datos conectada"))
  .catch(err => console.log(err))