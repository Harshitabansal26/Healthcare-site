const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUsers,
    getUserById
} = require("../controllers/userController");

// Route for user registration
router.post("/register", registerUser); // Register a new user

// Route for user login
router.post("/login", loginUser); // Login a user and return static token

// Route to get all users
router.get("/", getUsers); // Get all users

// Route to get a specific user by ID
router.get("/:id", getUserById); // Get a user by ID

module.exports = router;