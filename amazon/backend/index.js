// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/mern_project');

const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
