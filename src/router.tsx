import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// Main Layoit
import Layout from './layout/Layout';

// Pages
import Home from './pages/Home';


export const RouterComponent = () => (
    <Router>
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Layout>
    </Router>
)