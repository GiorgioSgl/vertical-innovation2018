import React, { Component } from 'react';
import { Route, Switch } from 'react-dom';
import NavBar from './components/NavBar';
import Nothing from './components/Nothing';
import Landing from './components/Landing';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Switch>
                    <Route path='/' component={Landing} />
                    <Route path='/points' component={Nothing} />
                </Switch>
            </div>
        );
    }
}

export default App;
