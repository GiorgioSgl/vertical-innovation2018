const weather = require('./weather');
const geocoding = require('./graphhopper_geocoding');
const routing = require('./graphhopper_routing');
const express = require('express');

const app = express();
const port = 8000;

app.post('/points', jsonParser, async (req, res) => {
    const location = req.body.location;

    // const traffic; // TODO: invent random traffic
    // const timeLastTime; // TODO: get time from database

    let info = await weather.getWeatherInfo(location);

    const p = parseFloat(info.precipitation);
    const t = parseFloat(info.temperature);

    res.send({
        points: points.calculatePoints(p, t)
    });
});

app.listen(port, () => { console.log(`Back&Forth listening on port ${port}`); });