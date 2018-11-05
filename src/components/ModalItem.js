import React from 'react';
import Modal from 'react-modal';
import HForm from './horizontalForm';
import { connect } from 'react-redux';
import { compose , withState, withHandlers } from 'recompose';

const ModalItem = ({ state , open , close , addItem , title , test }) => (
    <div>
        <button onClick={ open }>Add New Item</button>
        <Modal
            isOpen={ state.open }
            onRequestClose={ close }
            contentLabel='Selected Option'
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">{ title }</h3>
            <HForm prefix={"Item ID : "} value={''} />
            <HForm prefix={"Product ID : "} value={''} />
            <HForm prefix={"Unit Price : "} value={''} />
            <HForm prefix={"Unit : "} value={''} />
            <HForm prefix={"Quantity : "} value={''} />
            <button onClick={test}>Test</button>
            <button className="button" onClick={ addItem }>Add New Item</button>
            <button className="button" onClick={ close }>Cancel</button>
        </Modal>
    </div>
);

const addState = withState('state','updateState',{ 
    open: false,
    itemID: "",
    productID: "",
    uintPrice: "",
    uint: "",
    quantity: ""
});

const addHandlers = withHandlers({
    test: ({ updateState , state }) => event => {
        console.log(state);
    }, 
    addItem: ({ dispatch , updateState }) => event => {
        dispatch({
            type: 'ADD_ITEM',
            item: {
                itemID: '999999'
            }
        });
        updateState({
            open: false
        });
    },
    open: ({ updateState , state }) => event => {
        const open = {open: true};
        console.log(state);
        //const merge = {...state, ...open};
        updateState(open);
    },    
    close: ({ updateState }) => event => {
        updateState({
            open: false
        });
    }
});

export default connect()(
    compose(
        addState,
        addHandlers
    )(ModalItem)
);