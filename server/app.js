const express = require("express");
const app = express();
const mongoose = require("mongoose")
const PORT=5000;
const {MONGO_URL}= require("./keys")


mongoose.connect(MONGO_URL);
mongoose.connection.on('connected', ()=>{
    console.log("connected");
})
mongoose.connection.on('error', (err)=>{
    console.log("error", err);
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(PORT, ()=>{
  console.log("what's up?")
})
