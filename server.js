const express = require('express');

require('dotenv').config();

const cors = require('cors');
const api = require('./routes/index')



const PORT = process.env.PORT || 3001;

const app = express();

//CORS before routes
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));


app.use('/api',api);

app.get('/', async(req,res)=> {
    res.send("Satish's HueLights Middleware API");
})

app.listen(PORT,()=> console.log(`App Listening at http://localhost:${PORT}`));