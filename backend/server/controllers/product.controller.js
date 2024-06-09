const { Product } = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({
    title,
    price,
    description,
  })
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.json(err));
};

module.exports.findProductByid = (req,res)=>{
  Product.findById({_id:req.params.id})
    .then(prod => res.json(prod))
    .catch(err => res.json(err))
} 


module.exports.findAndUpdateById = (req,res)=>{
  Product.findByIdAndUpdate({_id: req.params.id},req.body,{new:true})
    .then(newProd => res.json(newProd))
    .catch(err => res.json(err))
}

module.exports.findAndDeleteById = (req,res)=>{
  Product.findOneAndDelete({_id:req.params.id})
    .then(concl => res.json(concl))
    .catch(err => res.json(err))
}