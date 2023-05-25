const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const places = require('./Places.json');
const category = require('./data/category.json');

app.get('/', (req, res) => {
    res.send('Server Site');
})

app.get('/places', (req, res) => {
    res.send(places)
})

app.get('/places/:id', (req, res) => {
    const id = req.params.id;
    const categoryPlace =  category.filter(n => n.id === id)
    res.send(categoryPlace)
})

app.listen(port, () => {
    console.log('Server Running Port', port)
})