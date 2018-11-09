import React from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { compose , withHandlers } from 'recompose';

const ModalItem = Loadable({
    loader: () => import('./ModalItem'),
    loading: () => <div> ...loading </div>
});

const Item = ({ itemID ,productID , unitPrice , unit , quantity , index , remove , isActive = true}) => (
    <div>
        <span> {itemID} </span>
        <span> {productID} </span>
        <span> {unitPrice} </span>
        <span> {unit} </span>
        <span> {quantity} </span>
        {isActive && <ModalItem title={'Edit Item Properties'} index={index} item={{
            itemID: itemID,
            productID: productID,
            unitPrice: unitPrice,
            unit: unit,
            quantity:quantity
        }}/>}
        {isActive && <button onClick={remove}>remove</button>}
    </div>
);

const addHandlers = withHandlers({
    remove: ({ dispatch , index }) => event => {
        dispatch({
            type: 'REMOVE_ITEM',
            index: index
        });
    }
});

export default compose(connect(), addHandlers)(Item);