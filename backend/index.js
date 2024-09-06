const express = require("express");
const cors = express.request("cors");
require('./db/config');
const User = require('./db/User');
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req,res)=>{
    const user = new User(req.body);
    const result = await user.save();
    res.send(result)
})

// app.get("/",(req,res)=>{
//     res.send("app is working...")
// });

app.listen(5000);