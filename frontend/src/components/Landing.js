import React from 'react';
import Header from './Header';
import Card from './Card';

const Landing = (props) => {

    console.log(props.coord);


    return (

        <div className="container">
            {/* <p>Latitude: {props.coord.lat}, Longitude: {props.coord.lng}</p> */}
            <Header />
            <div className="row">
                <Card color="primary" name="Walk" desc="Let's go for a walk!" img="images/walk.jpg" />
                <Card color="success" name="Electric Car" desc="Take your eco-brum and go eco-brum-brum" img="images/electric car.jpg" />
            </div>
            <div className="row">
                <Card color="danger" name="Bus" desc="Why not take the bus" img="images/bus.jpg" />
                <Card color="info" name="Bike" desc="Just take your bike and go out cycling!" img="images/bici.jpg" />
            </div>
            <div className="row">
                <Card color="primary" name="Carpooling" desc="Jump on a foreign brum and go to the adventure" img="images/car-pooling.jpg" />
                <Card color="success" name="CarSharing" desc="Take other people on your brum, it's a lot more fun!" img="images/car-sharing.jpg" />
            </div>
            <div className="row">
                <Card color="danger" name="Bike Sharing" desc="Share your bike with some friends" img="images/bikesharing.jpg" />
                <Card color="info" name="Car" desc="Take your brum and go brum-brum" img="images/car.jpg" />
            </div>

        </div >
    )
};

export default Landing;