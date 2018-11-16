const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');

exports.getWeatherInfo = async (start, finish) => {

    const hostname = 'http://tourism.opendatahub.bz.it';

    const api_body = {
        username: 'tourism@hackathon.bz.it',
        pswd: 'V3rT1c4lInn0v4ti0n$'
    };

    const api_path = '/api/LoginApi';
    const api_token = await fetch(hostname + api_path, {
        method: 'post',
        body: JSON.stringify(api_body),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json())
        .then(json => json.access_token);

    const weather_path = '/api/Weather/Realtime';

    const url = new URL(hostname + weather_path);
    const params = {
        language: 'it',
        api_key: api_token
    };
    url.search = new URLSearchParams(params);

    // console.log(url);

    const weather = await fetch(url.href, {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + api_token
        }
    })
        .then(res => res.json());

    const cities_with_location_and_temp = weather.map(entry => {
        return {
            name: entry.name,
            lat: entry.latitude,
            lng: entry.longitude,
            temp: entry.t
        };
    });

    return cities_with_location_and_temp;
};