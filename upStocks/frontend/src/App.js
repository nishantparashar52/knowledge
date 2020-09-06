import React from 'react';
import Home from './components/Home';
import Live from './components/Live';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default App => {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/live">Live Chart</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/live">
                    <Live />
                </Route>
            </Switch>
        </Router>
    )
};