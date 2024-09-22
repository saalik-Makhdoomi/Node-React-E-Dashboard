const express = require("express");
const cors = require("cors");
const connectDb = require("./utils/connectDb");
const { handleSignUp, handleLogin } = require("./controllers/userController");
const { handleProduct} = require("./controllers/productController");

const port = 5000;



const server = express(); // inheritance

connectDb();

server.use(cors()); // middle ware
server.use(express.json())


// routes

// server.get("/" , (req,res)=>{res.send("Hello server is working!")})

server.post("/user/signup" , handleSignUp )
server.post("/user/login" , handleLogin )


server.post("/product/add-product" , handleProduct)

server.listen(port, () => {
  console.log(`Server started on port ${port} !`);
});
