const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const data = require("./data");
const dotenv =require('dotenv');
const seedRoute = require("./routes/seedRoutes");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const orderRouter = require("./routes/orderRoutes");

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL).then(()=>{
  console.log('connected to database')
})
.catch((err)=>{
  console.log(err.message)
})

app.use('/api/seed',seedRoute)
app.use('/api/products',productRouter)
app.use('/api/users',userRouter)
app.use('/api/order',orderRouter)

app.use((err,req,res,next)=>{
  res.status(500).send({message:err.message})
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
