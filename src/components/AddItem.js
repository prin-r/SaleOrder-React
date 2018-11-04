import React from 'react';
import Modal from 'react-modal';
import { compose , withState, withHandlers } from 'recompose';

const AddItem = ({ state , open , close }) => (
    <div>
        <button onClick={open}>Add New Item</button>
        <Modal
            isOpen={ state.open }
            onRequestClose={ close }
            contentLabel='Selected Option'
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            <button className="button" onClick={close}>Okey</button>
        </Modal>
    </div>
);

const addState = withState('state','updateState',{ open: false });
const addHandlers = withHandlers({
    open: (props) => event => {
        console.log(props);
        props.updateState({
            open: true
        });
    },    
    close: ({ updateState}) => event => {
        updateState({
            open: false
        });
    }
});

export default compose(
    addState,
    addHandlers
)(AddItem);