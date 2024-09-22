const User = require("../models/userModel");

const handleSignUp = async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password
  res.send(result);
  console.log(result);
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
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "NO User Found" });
    }
  }else{
    res.send({result:'No User Found'})
  }
};

module.exports = { handleSignUp, handleLogin };
