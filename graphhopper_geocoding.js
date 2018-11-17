const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');
// const GraphHopperGeocoding = require('graphhopper-js-api-client/src/GraphHopperGeocoding');

exports.getLatLngFromAddress = async address => {
    const hostname = 'https://graphhopper.com';
    const path = '/api/1/geocode';
    const key = '9744bd41-6a3a-42ee-8a30-1166c2f0d75a';

    const endpoint = new URL(hostname + path);
    const params = {
        q: address,
        locale: 'it',
        limit: '5',
        key: key
    };
    endpoint.search = new URLSearchParams(params);

    const geocode_result = await fetch(endpoint.href, {
        method: 'get'
    })
        .then(res => res.json());

    const lat_long_with_name = geocode_result.hits.map(result => {
        return {
            name: result.name,
            city: result.city,
            lat: result.point.lat,
            lng: result.point.lng
        };
    });

    return lat_long_with_name[0];
};