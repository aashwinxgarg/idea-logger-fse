const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const ideaRoutes = require("./routes/ideaRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());


app.use('/api', ideaRoutes);

app.get('/',(req,res)=> {
    res.send("I am working");
})


if (!process.env.MONGODB_URI) {
    console.error("mongodb_uri is empty");
}

mongoose.connect(process.env.MONGODB_URI)
.then((data)=> {
    console.log(`DB Connected`);
})
.catch((err)=> {
    console.log(`DB Error`, err);
})

app.listen(process.env.PORT,()=> {
    console.log(`Server started on http://localhost:${PORT}`)
})

