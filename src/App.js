import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AppHeader from './Header.js';
import AppFooter from './Footer.js';
import Home from './Home.js';

class App extends Component {

    render() {
        return (
            <Router>
                <>
                    <AppHeader />
                    <Content />
                    <AppFooter />
                </>
            </Router>
        )
    }

}

const Content = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="" component={PageNotFound} />
    </Switch>
);

const About = () => <h1>My About Page</h1>;

const PageNotFound = () => 
    <h1>
        Page Not Found
  </h1>;
export default App;
