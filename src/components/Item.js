import React from 'react';
import { connect } from 'react-redux';
import { compose , withState, withHandlers } from 'recompose';

const Item = ({ state, itemID , index , edit , remove }) => (
    <div>
        {index}
        {itemID}
        <button onClick={edit}>edit</button>
        <button onClick={remove}>remove</button>
    </div>
);

const addState = withState('state','updateState',{ 
    itemID: "",
    productID: "",
    uintPrice: "",
    uint: "",
    quantity: ""
 });

const addHandlers = withHandlers({
    edit: ({ dispatch , index }) => event => {
        console.log(index);
        dispatch({
            type: 'SET_ITEM',
            index: index,
            item: {
                itemID: '99999'
            }
        });
    },
    remove: ({ dispatch , index }) => event => {
        console.log(index);
        dispatch({
            type: 'REMOVE_ITEM',
            index: index
        });
    },
    update: ({ updateState , newItem }) => event => {
        updateState({
            itemID: newItem.itemID,
            productID: newItem.productID,
            unitPrice: newItem.uintPrice,
            unit: newItem.uint,
            quantity: newItem.quantity
        });
    }
});

export default connect()(
    compose(
        addState,
        addHandlers
    )(Item)
);