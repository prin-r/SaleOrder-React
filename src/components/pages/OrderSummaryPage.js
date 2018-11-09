import React from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose , withState } from 'recompose';

const ModalResult = Loadable({
    loader: () => import('../ModalResult'),
    loading: () => <div> ...loading </div>
});

const ItemList = Loadable({
    loader: () => import('../ItemsList'),
    loading: () => <div> Items </div>
});

const OrderSummaryPage = ({ customerid }) => (
    <div>
        <p>Customer ID : {customerid}</p>
        <p>Customer Type : External</p>
        <ItemList isActive={false}/>
        <ModalResult />
        <NavLink to="/create" activeClassName="is-active" exact={true} >
            <button>Back</button>
        </NavLink>
    </div>
);

const addState = withState('state','updateState',{ customerid:'' });

const mapStateToProps = ({ customerid }) => ({ customerid: customerid });

export default compose(
    connect(mapStateToProps),
    addState
)(OrderSummaryPage);