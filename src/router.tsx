import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import { history }  from './redux/store';

// Main Layoit
import Layout from './layout/Layout';

// Pages
import Home from './pages/Home';
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'


export const RouterComponent = () => (
    <Router>
        <ConnectedRouter history={history}>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </Layout>
        </ConnectedRouter>
    </Router>
)