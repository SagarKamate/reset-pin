import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AppHeader from './Header.js';
import AppFooter from './Footer.js';
import Reset from './Reset.js';
import Manage from './Manage.js';
import { Segment } from 'semantic-ui-react';

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
        <Route exact path="/" component={Manage} />
        <Route exact path="/home" component={Manage} />
        <Route exact path="/manage" component={Manage} />
        <Route exact path="/reset" component={Reset} />
        <Route path="/about" component={About} />
        <Route path="" component={PageNotFound} />
    </Switch>
);

const About = () => <h1>My About Page</h1>;

const PageNotFound = () =>
    <Segment textAlign="center" className="pageNotFound">
        <h1>
            Page Not Found
      </h1>
    </Segment>;   

export default App;
