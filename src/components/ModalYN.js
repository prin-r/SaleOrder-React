import React from 'react';
import Modal from 'react-modal';
import { compose , withState , withHandlers } from 'recompose';

const ModalYN = ({ state , ask , setOpen , text }) => (
    <div>
        <button onClick={(event) => setOpen(event,true)}>{text}</button>
        <Modal
            isOpen={ state.open }
            onRequestClose={ (event) => setOpen(event,false) }
            closeTimeoutMS={200}
            className="modal"
        >
            <p>All items will be removed.</p>
            <p>Are you sure ?</p>
            <button onClick={(event) => ask(event,'yes')}>Yes, remove all items</button>
            <button onClick={(event) => ask(event,'cancel')}>Cancel</button>
        </Modal>
    </div>
);

const addState = withState('state','updateState',{ open: false });

const addHandlers = withHandlers({
    ask: ({ updateState , action }) => (event , answer) => {
        if (answer === 'yes') {
            action();
        }
        updateState({ open: false });
    },
    setOpen: ({ updateState }) => (event, isOpen) => {
        updateState({ open: isOpen });
    }
});

export default compose(
    addState,
    addHandlers
)(ModalYN);