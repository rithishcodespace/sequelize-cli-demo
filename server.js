require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;


app.listen(PORT,()=>console.log(`server running successfully on port:${PORT}`));