const ProductControllers = require('../controllers/product.controller')

module.exports = (app)=>{
    app.get("/",(req,res)=>{
        res.json({msg: "hello world"})
    })
    app.get("/nose",(req,res)=>{
        res.json({msg: "porque piko no funcionaaaaaaaaaa"})
    })
    app.get('/api', ProductControllers.findAllProducts)
    app.get('/api/:id', ProductControllers.findProductByid)
    app.post('/api/createproduct', ProductControllers.createProduct)
    app.put('/api/:id/edit', ProductControllers.findAndUpdateById)
    app.delete('/api/:id',ProductControllers.findAndDeleteById)

}