const { Product } = require("../models/product.model");

module.exports.findAllProducts = async (req, res) => {
  await Product.find()
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.createProduct = async (req, res) => {
  const { title, price, description } = req.body;
  await Product.create({
    title,
    price,
    description,
  })
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.json(err));
};

module.exports.findProductByid = async(req,res)=>{
  await Product.findById({_id:req.params.id})
    .then(prod => res.json(prod))
    .catch(err => res.json(err))
} 


module.exports.findAndUpdateById = async (req,res)=>{
  await Product.findByIdAndUpdate({_id: req.params.id},req.body,{new:true})
    .then(newProd => res.json(newProd))
    .catch(err => res.json(err))
}

module.exports.findAndDeleteById = async (req,res)=>{
  await Product.findOneAndDelete({_id:req.params.id})
    .then(concl => res.json(concl))
    .catch(err => res.json(err))
}