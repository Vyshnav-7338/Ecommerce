const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const data = require("./data");
const dotenv =require('dotenv');
const seedRoute = require("./routes/seedRoutes");
const productRouter = require("./routes/productRoutes");

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL).then(()=>{
  console.log('connected to database')
})
.catch((err)=>{
  console.log(err.message)
})

app.use('/api/seed',seedRoute)
app.use('/api/products',productRouter)



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
