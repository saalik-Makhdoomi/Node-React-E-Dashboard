const Product = require("../models/ProductModel");


const handleProduct = async (req,res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result)

}


module.exports = {handleProduct}