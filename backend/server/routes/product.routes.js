const ProductControllers = require('../controllers/product.controller')

module.exports = (app)=>{
    app.get('/api', ProductControllers.findAllProducts)
    app.post('/api/createproduct', ProductControllers.createProduct)
}