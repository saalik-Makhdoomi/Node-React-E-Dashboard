const express = require("express");
const cors = require("cors");
const connectDb = require("./utils/connectDb");
const { handleSignUp, handleLogin } = require("./controllers/userController");
const { handleProduct, handleAddProduct,handleUpdateProduct,handleUpdateOneProduct,handleSearchProduct, handleDeleteProduct } = require("./controllers/productController");

const port = 5000;

const server = express(); // inheritance

connectDb();

server.use(cors()); // middle ware
server.use(express.json());

// routes

// server.get("/" , (req,res)=>{res.send("Hello server is working!")})

// User Route:
server.post("/user/signup", handleSignUp);
server.post("/user/login", handleLogin);

// Product Route:
server.post("/product/add-product", handleAddProduct);
server.get("/product/getAllProducts", handleProduct);
server.get("/product/updateProduct/:id", handleUpdateProduct);
server.put("/product/updateOne/:id", handleUpdateOneProduct)

// Delete Route:
server.delete("/product/delete/:id", handleDeleteProduct);


// Search Product Route:
server.get("/search/:key", handleSearchProduct);




server.listen(port, () => {
  console.log(`Server started on port ${port} !`);
});
