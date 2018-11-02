import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import OrderCreationPage from '../pages/OrderCreationPage';
import NotFoundpage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route path="/create" component={OrderCreationPage} />
                <Route component={NotFoundpage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;