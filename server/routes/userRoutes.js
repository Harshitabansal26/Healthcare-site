const express = require("express");
const router = express.Router();

// Import the authentication middleware
const { jwtAuthMiddleware } = require("../middleware/jwtMiddleware");

// import  {jwtAuthMiddleware} from "../middleware/jwtMiddleware";

const {
    registerUser,
    loginUser,
    getUsers,
    getUserById
} = require("../controllers/userController");

// Route for user registration
router.post("/", registerUser); // Register a new user

// Route for user login
router.post("/login",jwtAuthMiddleware, loginUser); // Login a user and return static token

// Protect the following routes using validateJwtToken middleware
// router.use(validateJwtToken);

// Route to get all users
router.get("/", getUsers); // Get all users

// Route to get a specific user by ID
router.get("/:id", getUserById); // Get a user by ID

module.exports = router;