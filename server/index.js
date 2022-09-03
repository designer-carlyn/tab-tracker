require('dotenv').config({ path: '../.env' });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8081;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('uploads'))

// Database Connection
mongoose.connect(process.env.DB_URI).then(function() {
    console.log('Connected to MongoDB');
}).catch(function(err) {
    console.log(err);
});

// Routes Prefix
app.use("/api/post", require("./routes/routes"));

// Start Server
app.listen(port, function(req, res) {
    console.log(`Server started on port ${port}`);
});