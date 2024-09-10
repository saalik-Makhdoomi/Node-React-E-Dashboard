const User = require("../models/userModel");

const handleSignUp = async (req, res) => {

  const user = new User(req.body);
    const result = await user.save();
    res.send(result)
    console.log(result)
  // try {
  //   const { name, email, password } = req.body;


  //   console.log(req.body)
  //   const newUser = await new User({ name, email, password });

  //   const updateDb = await newUser.save();
  //   if (updateDb) {
  //     res.json({ message: "User Saved Succesfully!" });
  //     console.log("User saved!")
  //   }
  // } catch (error) {
  //   console.log(error);
  //   res.json({ message: "Server Error : 500" });
  // }
};

const handleLogin = async (req, res) => {
  console.log("i m working  i m in login");
};

module.exports = { handleSignUp, handleLogin };
