const express=require("express")
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

//env filr config

const dotenv = require("dotenv");
dotenv.config();

connectDb();

const app=express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
    res.send("working");
})


//APP CONFIG START
app.listen(port,()=>{
    console.log(`Server has started on port http://localhost:${port}`)

});