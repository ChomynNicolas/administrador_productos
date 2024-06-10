const ProductControllers = require('../controllers/product.controller')

module.exports = (app)=>{
    app.get('/api', ProductControllers.findAllProducts)
    app.get('/api/:id', ProductControllers.findProductByid)
    app.post('/api/createproduct', ProductControllers.createProduct)
    app.put('/api/:id/edit', ProductControllers.findAndUpdateById)
    app.delete('/api/:id',ProductControllers.findAndDeleteById)

}