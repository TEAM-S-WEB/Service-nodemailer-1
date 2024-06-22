require("dotenv/config");
const express = require("express");
const app = express();
const cors = require("cors");
const emailRoutes = require("./routes/email.routes");


app.use(cors("*"));
app.use(express.json());
app.use("/", emailRoutes);


const port = process.env.PORT || 5500;
app.listen(port, ()=>{
    console.log(`we run on port ${port}`);
});






