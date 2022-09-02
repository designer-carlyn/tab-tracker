const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 8081;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(cors());

app.get('/', function(req, res) {
    res.send({
        message: 'Hello World!',
    });
});

app.listen(PORT, function(req, res) {
    console.log(`Listening on port ${PORT}`);
});