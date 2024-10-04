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

// Get Update Product:

const handleUpdateProduct = async (req,res) => {
  try {
    const productId = req.params.id.trim();  // Get product ID from request params and trim any extra spaces
    const updatedData = req.body;  // Get the updated data from the request body
    
    // Find the product by ID and update it with new data
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, {
        new: true,  // Returns the updated product
        runValidators: true  // Ensures that the update respects the model's validation rules
    });

    if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);  // Send the updated product as a response
} catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Server error' });
}
};

// Update One Product:

const handleUpdateOneProduct = async (req, res) => {
  let result = await Product.updateOne(
    {_id: req.params.id },
    {
      $set : req.body
    }
  )
  res.send(result)
};


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
  
module.exports = { handleAddProduct , handleProduct, handleUpdateProduct, handleUpdateOneProduct , handleDeleteProduct }