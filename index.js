const weather = require('./weather');
const geocoding = require('./graphhopper_geocoding');
const routing = require('./graphhopper_routing');
const express = require('express');
const points = require('./points');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 8000;



function simulateTraffic() {
    var sec = (new Date().getTime() / 1000) % 40;
    return Math.sin((sec * Math.PI) / 40);
}

app.post('/points', bodyParser.json(), async (req, res) => {
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