const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path"); // Import path module

// Importing Controller
const authController = require("./controllers/AuthenticationController");

// App Initialization
const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Set the views directory

// Serve static files from the frontend folder
// app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.render("authentication");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/sproduct", (req, res) => {
  res.render("sproduct");
});

app.get("/user", (req, res) => {
  res.render("user");
});

app.get("/authentication", (req, res) => {
  res.render("authentication");
});

// Routes
app.post("/register", authController.register); // Register User
app.post("/login", authController.login); // Login User

// MongoDB Connection
// const DB_URI = mongoose.connect("mongodb://localhost:27017/petSupplies");
// "mongodb://localhost:27017/petsupplies?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
// "mongodb+srv://sapkotan034:nishan@nishanmongodb.1eczj.mongodb.net/petsupplies?retryWrites=true&w=majority&appName=nishanMongodb";
// "mongodb+srv://sapkotan034:nishan@nishanmongodb.1eczj.mongodb.net/petsupplies?retryWrites=true&w=majority&appName=nishanMongodb";
// Starting the Server
const PORT = 3001;
mongoose
  .connect("mongodb://localhost:27017/PetSupplies")
  .then(() => app.listen(PORT, console.log(`Server running ${PORT}`)))
  .catch((error) => console.log(error));
