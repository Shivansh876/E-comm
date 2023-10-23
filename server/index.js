const express = require("express");
const app = express();
const dotenv = require("dotenv");

const database = require("./config/database");
dotenv.config();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/User");



database.connect();
// middlewares 
app.use(express.json()); 
app.use(cookieParser());

app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)

app.use("/api/v1/auth", userRoutes); 

// default route 
app.get("/", (req, res) => {
    return res.json({
        success: true, 
        message: "Your server is running...",
    })
})

app.listen(PORT, ()=>{
    console.log(`App is running at ${PORT}`);
})