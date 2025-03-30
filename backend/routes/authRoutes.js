

const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const router = express.Router()


// sign up
router.post("/signup", async (req, res) => {
    try {
      const { name, email, password } = req.body
      // Check if user already exists
      let user = await User.findOne({ email })
      if (user) return res.status(400).json({ message: "User already exists" })
  
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt)
  
      // Create new user
      user = new User({ name, email, password: hashedPassword })
      await user.save();
  
      res.status(201).json({ message: "User registered successfully" })
    } 
    catch (err) {
      res.status(500).json({ message: err.message })
    }
  });
  

// login 
router.post("/signin", async (req, res) => {
    try {
      const { email, password } = req.body
  
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "Invalid credentials" })
  
      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" })
  
      // Generate JWT Token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
  
      res.cookie("token", token, { httpOnly: true })
      res.status(200).json({ message: "Login successful", token })
    } 
    catch (err) {
      res.status(500).json({ message: err.message })
    }
  });
  

// logout 
router.post("/logout", (req, res) => {
    res.cookie("token", "", { httpOnly: true, expires: new Date(0) })
    res.status(200).json({ message: "Logged out" })
})

module.exports = router
