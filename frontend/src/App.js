import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Nothing from './components/Nothing';
import Landing from './components/Landing';
import Choice from './components/Choice';

class App extends Component {

    // constructor(props) {
    //     super(props);
    //     navigator.geolocation.getCurrentPosition(position => {
    //         this.setState({
    //             latitude: position.coords.latitude,
    //             longitude: position.coords.longitude
    //         });
    //     });
    //     this.state = {
    //         coord: {
    //             latitude: '',
    //             longitude: ''
    //         }
    //     };
    // }

    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/points' component={Choice} />
                    <Route exact path='/shop' component={Nothing} />
                </Switch>
            </div>
        );
    }
}

export default App;
