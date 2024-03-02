const {compiledContract} = require('./compile');
const cors = require('cors');
const corsOptions = {origin: "/http://localhost:3000"};
const express = require('express');
const app = express();
app.use(cors(corsOptions));

app.get('/',(req,res) => {
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(compiledContract));
})
app.listen(8000,()=>{
    console.log("body map compile server is running ...")

})
