// const mongoose = require("mongoose");
const authmodel = require("../model/userAuthentication.model.js");

module.exports = {
  register: async (req, res) => {
    try {
      console.log("Register function called", req.body);
      const { email, password } = req.body;

      // Validate fields
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email and password are required" });
      }

      const user = new authmodel({ email, password });
      await user.save();
      res.redirect("home");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  login: async (req, res) => {
    try {
      console.log("Login function called", req.body);
      const { email, password } = req.body;
      const user = await authmodel.findOne({ email, password });
      if (user) {
        console.log("User found");
        res.redirect("home");
      } else {
        res.status(400).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
