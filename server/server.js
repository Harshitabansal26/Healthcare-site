const express = require("express");
const connectDb = require("./config/dbConnection");
const cors = require("cors");
const hbs = require("hbs");
const path = require("path");
const dotenv = require("dotenv");

const userRoutes = require("./routes/userRoutes"); // Importing user routes

dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Set up view engine and static file paths
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

// Root route
app.get("/", (req, res) => {
    res.send("Server is working");
});

// Sample routes to render views
app.get("/home", (req, res) => {
    res.render("home", {
        username: "Harshita",
        posts: "Some post content"
    });
});

app.get("/alluser", (req, res) => {
    const users = [
        { name: "Harshita", age: 20 },
        { name: "abschj", age: 19 },
        { name: "adi", age: 20 }
    ];
    res.render("alluser", {
        users: users
    });
});

// User routes
app.use("/api/users", userRoutes); // Base route for user-related API endpoints

// Error handling middleware (if any)
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || "Server Error"
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});