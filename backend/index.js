const express = require("express");
const cors = require("cors");
const connectDb = require("./utils/connectDb");
const { handleSignUp, handleLogin } = require("./controllers/userController");
const {
  handleProduct,
  handleAddProduct,
} = require("./controllers/productController");

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
server.get("/products", handleProduct);

server.listen(port, () => {
  console.log(`Server started on port ${port} !`);
});
