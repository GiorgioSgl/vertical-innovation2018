import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Nothing from './components/Nothing';
import Landing from './components/Landing';
import Choice from './components/Choice';

class App extends Component {

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
