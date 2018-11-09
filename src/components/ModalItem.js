import React from 'react';
import Modal from 'react-modal';
import Loadable from 'react-loadable';
import itemT  from '../templates/itemT';
import { connect } from 'react-redux';
import { compose , withState, withHandlers } from 'recompose';

const Form = Loadable({
    loader: () => import('./FormWithHandlers'),
    loading: () => <div> ...loading </div>
});

const ModalItem = ({ state , index , open , close , addORsetItem , title , setProperty }) => (
    <div>
        <button onClick={ open }>{index < 0 ? 'Add New Item' : 'Edit'}</button>
        <Modal
            isOpen={ state.open }
            onRequestClose={ close }
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">{ title }</h3>
            <p>Item ID : {state.item.itemID}</p>
            <Form prefix={"Product ID : "} value={state.item.productID} onChange={() => setProperty("productID")} />
            <Form prefix={"Unit Price : "} value={state.item.unitPrice} onChange={() => setProperty("unitPrice")} />
            <Form prefix={"Unit : "} value={state.item.unit} onChange={() => setProperty("unit")} />
            <Form prefix={"Quantity : "} value={state.item.quantity} onChange={() => setProperty("quantity")} />
            <button className="button" onClick={ addORsetItem }>{index < 0 ? 'Add New Item' : 'Save Change'}</button>
            <button className="button" onClick={ close }>Cancel</button>
        </Modal>
    </div>
);

const addState = withState('state','updateState', props => ({ open: false, item: props.item || itemT() }));

const addHandlers = withHandlers({
    setProperty: ({ updateState , state }) => property => {
        const item = {...state.item , [property]: event.target.value };
        updateState({...state, item});
    },
    addORsetItem: ({ dispatch , updateState , state , index , items , customerid , username }) => event => {
        const type = (index < 0) ? 'ADD_ITEM' : 'SET_ITEM';
        const { item } = state;
        dispatch({ type: type, item: item, index: index });
        updateState({
            ...state,
            open: false,
            item: (type === 'ADD_ITEM') ? itemT() : item
        });
        const userData = {
            customerid: customerid,
            items: (type === 'ADD_ITEM') ? [...items , item] : [...items.slice(0, index), item,...items.slice(index+1)] 
        };
        localStorage.setItem( username , JSON.stringify(userData));
    },
    open: ({ updateState , item }) => event => {
        updateState({ open: true , item: item || itemT() });
    },    
    close: ({ updateState, state }) => event => {
        updateState({...state, open: false });
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
)(ModalItem);