const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./mongo');
const db = require('./db');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());


// routes
app.post('/products', mongoConnect.createProduct);

app.get('/products', mongoConnect.getProduct);

// start server on db conenction 
db.mongoConnect(() => {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}/`);
    });
})

