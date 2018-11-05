import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './components/routers/AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch({type: 'ADD_ITEM', item: {
    itemID: "ITM-000000001/2018",
    productID: "IN-000000001",
    unitPrice: "3,957.34",
    unit: "kg",
    quantity: "1,452.56"
}});
store.dispatch({type: 'ADD_ITEM', item: {
    itemID: "ITM-000000002/2018",
    productID: "IN-000003408",
    unitPrice: "100",
    unit: "kg",
    quantity: "6500"
}});
store.dispatch({type: 'ADD_ITEM', item: {
    itemID: "ITM-000000003/2018",
    productID: "IN-000000999",
    unitPrice: "450",
    unit: "ton",
    quantity: "50"
}});

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));