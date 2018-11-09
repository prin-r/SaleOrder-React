import React from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose , withState, withHandlers } from 'recompose';

const CustomerId = Loadable({
    loader: () => import('../FormWithHandlers'),
    loading: () => <div> Customer ID </div>
});

const ItemList = Loadable({
    loader: () => import('../ItemsList'),
    loading: () => <div> Items </div>
});

const ModalYN = Loadable({
    loader: () => import('../ModalYN'),
    loading: () => <div> ...loading </div>
});

const OrderCreationPage = ({ state , setCustomerId , onSubmit , clear , customerid }) => (
    <div>
        <h1>New Order</h1>
        <CustomerId prefix={"Customer ID : "} value={state.customerid.length === 0 ? customerid : state.customerid} onChange={setCustomerId} />
        <ItemList isActive={true} />
        <ModalYN text={'Clear'} action={clear} />
        <NavLink to="/summary" activeClassName="is-active" exact={true} >
            <button onClick={onSubmit}>Create New Order</button>
        </NavLink>
    </div>
);

const addState = withState('state','updateState',{ customerid: '' });
const addHandlers = withHandlers({
    setCustomerId: ({ updateState , dispatch }) => event => {
        const customerid = event.target.value;
        updateState({
            customerid: customerid,
        });
        dispatch({type: 'SET_CUSTOMER_ID', customerid: customerid });
    },
    onSubmit: ({ state , items , username }) => event => {
        const userData = {
            customerid: state.customerid,
            items: items
        };
        localStorage.setItem(username , JSON.stringify(userData));
    },
    clear:  ({ dispatch }) => event => {
        dispatch({
            type: 'REMOVE_ALL_ITEMS'
        });
    }
});

const mapStateToProps = ({ items , customerid , username }) => ({
    customerid: customerid,
    items: items,
    username: username
});

export default compose(
    connect(mapStateToProps),
    addState,
    addHandlers
)(OrderCreationPage);