const express = require('express');
const bodyParser = require('body-parser');

const weather = require('./weather');
const geocoding = require('./graphhopper_geocoding');
const routing = require('./graphhopper_routing');
const points = require('./points');

const app = express();
const jsonParser = bodyParser.json();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Helloooo');
});

app.post('/points', jsonParser, async (req, res) => {
    const location = req.body.location;

    // const traffic; // TODO: invent random traffic
    // const timeLastTime; // TODO: get time from database

    let info = await weather.getWeatherInfo(location);

    // const p = location.precipitation;
    // const t = location.temperature;
    const p = parseFloat(info.precipitation);
    const t = parseFloat(info.temperature);

    res.send({
        points: points.calculatePoints(p, t)
    });
});

app.listen(port, () => { console.log(`Back&Forth listening on port ${port}`); });