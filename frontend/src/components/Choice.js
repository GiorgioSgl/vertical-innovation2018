import React, { Component } from 'react';

class Choice extends Component {

    constructor(props) {
        super();
        this.state = {
            lat: '',
            lng: '',
            points: 0
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });

            this.getPoints();
        });
    }

    async getPoints() {

        const hostname = 'http://localhost:8000';

        const api_body = {
            location: {
                lat: this.state.lat,
                lng: this.state.lng
            }
        };

        const api_path = '/points';
        const points = await fetch(hostname + api_path, {
            method: 'post',
            body: JSON.stringify(api_body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json().points);

        // console.log(`Got points! ${points}`);


        this.setState({ points });
    }

    render() {


    }
}

export default Choice;