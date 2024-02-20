require('dotenv').config();
const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send("Hello world !!!");
});

app.get('/route1', (req, res) => {
    res.send("This is route1 ");
});

app.listen(process.env.PORT, () => {
    console.log(`Port running on ${process.env.PORT}`);
});
