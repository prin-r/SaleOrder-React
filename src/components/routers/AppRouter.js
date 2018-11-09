import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const OrderCreationPage = Loadable({
    loader: () => import('../pages/OrderCreationPage'),
    loading: () => null
});

const OrderSummaryPage = Loadable({
    loader: () => import('../pages/OrderSummaryPage'),
    loading: () => null
});

const NotFoundPage = Loadable({
    loader: () => import('../pages/NotFoundPage'),
    loading: () => null
});

const LoginPage = Loadable({
    loader: () => import('../pages/LoginPage'),
    loading: () => null
});

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route path="/create" component={OrderCreationPage} />
                <Route path="/summary" component={OrderSummaryPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;