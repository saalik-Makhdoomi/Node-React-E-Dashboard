const Product = require("../models/ProductModel");

// Add product

const handleAddProduct = async (req,res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result)

}

// Get All products:

const handleProduct = async (req, res) => {
    let products = await Product.find();
    if(products.length > 0){
        res.send(products)
}else{
    res.send({result: "No  Products Found"})
    
}
}

// Delete Product:

const handleDeleteProduct = async (req, res) => {
    try {
      const productId = req.params.id.trim(); // Trim the product ID here too
      const deletedProduct = await Product.findByIdAndDelete(productId);
      
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
module.exports = { handleAddProduct , handleProduct, handleDeleteProduct }