import React from 'react';
import Loadable from 'react-loadable';
import { compose , withState, withHandlers } from 'recompose';

const CustomerId = Loadable({
    loader: () => import('../horizontalForm'),
    loading: () => <div> Customer ID </div>
});

const ItemList = Loadable({
    loader: () => import('../ItemsList'),
    loading: () => <div> Items </div>
});

const OrderCreationPage = ({ state , setCustomerId , onSubmit }) => (
    <div>
        <center>
            <h1>New Order</h1>
            <CustomerId prefix={"Customer ID : "} value={state.customerid} onChange={setCustomerId} />
            <ItemList />
            <button onClick={onSubmit}>Create New Order</button>
        </center>
    </div>
);

const addState = withState('state','updateState',{ customerid:'' });
const addHandlers = withHandlers({
    setCustomerId: ({ updateState }) => event => {
        updateState({
            customerid: event.target.value,
        });
    },
    onSubmit: props => event => {
        console.log(props.state);
    }
});

export default compose(
    addState,
    addHandlers
)(OrderCreationPage);