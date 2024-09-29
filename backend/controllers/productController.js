const Product = require("../models/ProductModel");


const handleAddProduct = async (req,res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result)

}

const handleProduct = async (req, res) => {
    let products = await Product.find();
    if(products.length > 0){
        res.send(products)
}else{
    res.send({result: "No  Products Found"})
    
}
}

module.exports = { handleAddProduct , handleProduct }