const weather = require('./weather');
const geocoding = require('./graphhopper_geocoding');
const routing = require('./graphhopper_routing');
const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Helloooo');
});

app.listen(port, () => { console.log(`Back&Forth listening on port ${port}`); });