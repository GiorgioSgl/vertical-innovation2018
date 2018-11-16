const GraphHopperRouting = require('graphhopper-js-api-client/src/GraphHopperRouting');
const GHInput = require('graphhopper-js-api-client/src/GHInput');

// Points should be in format [{lat1,lng1}, {lat2,lng2}, ...]
exports.getRouteFromPoints = points => {
    const key = '9744bd41-6a3a-42ee-8a30-1166c2f0d75a';
    const profile = 'car';
    let host;

    const routing = new GraphHopperRouting({
        'key': key,
        'host': host,
        'vehicle': profile,
        'elevation': 'false'
    });

    points.forEach(({ lat, lng }) => {
        routing.addPoint(new GHInput(lat, lng));
    });


    return routing.doRequest();
};

// let points = [
//     {
//         lat: 47.400905,
//         lng: 8.534317
//     },
//     {
//         lat: 47.394108,
//         lng: 8.538265
//     }
// ];
