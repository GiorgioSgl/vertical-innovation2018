import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const style = {
    backgroundColor: '#0068a7'
};

class Choice extends Component {

    constructor(props) {
        super();
        this.state = {
            lat: '',
            lng: '',
            points: 0,
            choiceName: props.location.state.name,
            choiceDescription: props.location.state.description,
            choiceImg: props.location.state.image
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
                lng: this.state.lng,
                name: this.state.choiceName
            }
        };

        const api_path = '/points';
        const pointAnswer = await fetch(hostname + api_path, {
            method: 'post',
            body: JSON.stringify(api_body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json());

        pointAnswer.points = pointAnswer.points / 100;

        this.setState({ points: pointAnswer.points });
    }

    render() {

        let walkDir = <span></span>;
        let busDir = <span></span>;
        let carDir = <span></span>;
        let bikeDir = <span></span>;

        if (this.state.choiceName === 'Walk') {
            walkDir = <img src='images/foot-directions.jpg' alt="" className="map" />;
        }
        if (this.state.choiceName === 'Electric Car') {
            carDir = <img src="images/car-directions.jpg" alt="" className="map" />;
        }
        if (this.state.choiceName === 'Bus') {
            busDir = <img src="images/bus-directions.jpg" alt="" className="map" />;
        }
        if (this.state.choiceName === 'Bike') {
            bikeDir = <img src="images/bike-directions.jpg" alt="" className="map" />;
        }


        return (
            <div>
                <div className="container">
                    <div className="row">
                        <img src="images/buffer.PNG" alt="buffer not found" />
                    </div>

                    <header className="jumbotron my-4 text-center text-white"
                        style={style} >
                        <h3 className="display-3">{this.state.choiceName}</h3>
                    </header>
                </div>
                <div className="container">
                    <div className="row">
                        <img src="images/buffer-2.PNG" alt="" />
                    </div>

                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10 text-center">
                            {walkDir}
                            {carDir}
                            {busDir}
                            {bikeDir}
                        </div>
                        <div className="col-lg-1"></div>
                    </div>

                    <div className="row">
                        <img src="images/buffer-2.PNG" alt="" />
                    </div>

                    <div className="card text-center border-info text-info">
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item display-5">{this.state.choiceDescription}</li>
                                <li className="list-group-item "><h4> {this.state.points} <img src="images/punto.png" alt="" /> /5s</h4></li>
                                <li className="list-group-item display-5">What do you choose?</li>
                            </ul>
                            <div className="card-footer border-info">
                                <Link to="/"><button type="button" className="btn btn-danger">Go back</button></Link>
                                <Link to="/">
                                    <button type="button" className="btn btn-success">I accept!</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Choice;