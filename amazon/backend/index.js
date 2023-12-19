const express =require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/mern_project');

const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/api/product',(req,res)=>{
    res.send(data.products)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
