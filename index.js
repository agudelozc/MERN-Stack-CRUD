const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors')

mongoose.connect("mongodb+srv://cristian:1iZ6nIyk09DZhdPA@clusterprueba.a0gwcgw.mongodb.net/test?retryWrites=true&w=majority");

const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use("/posts", require("./routes/post"));


app.get("/", (req,res)=>{
    res.send({Project: "MERN CRUD App bicis"})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT)

