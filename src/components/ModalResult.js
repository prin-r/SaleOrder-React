import React from 'react';
import Modal from 'react-modal';
import Loadable from 'react-loadable';
import service_CreateOrder from '../services/service_CreateOrder';
import { connect } from 'react-redux';
import { compose , withState, withHandlers } from 'recompose';

const Message = Loadable({
    loader: () => import('./Message'),
    loading: () => <div> ...loading </div>
});

const ModalResult = ({ state , close , confirm }) => (
    <div>
        <button onClick={confirm}>Confirm</button>
        <Modal
            isOpen={ state.status !== 'close' }
            onRequestClose={ close }
            closeTimeoutMS={200}
            className="modal"
        >
            <Message message={state.message} status={state.status} />
            { state.status !== 'waiting' && <button onClick={close}>close</button>}
        </Modal>
    </div>
);

const addState = withState('state','updateState',{ status: 'close' , message: ''});

const addHandlers = withHandlers({
    close: ({ updateState, state }) => event => {
        if (state.status !== 'waiting') {
            updateState({...state, status: 'close'});
        }
    },
    confirm: ({ updateState , state , items , customerid , token , url }) => event => {
        updateState({...state, status: 'waiting' });
        const data = {
            Order : {
                "customerType": "External",
                "customerId": customerid,
            },
            Items: items
        };
        service_CreateOrder( url , data , token , updateState , state );
    }
});

const mapStateToProps = ({ items , customerid , token , url }) => ({
    customerid: customerid,
    items: items,
    token: token,
    url: url
});

export default compose(
    connect(mapStateToProps),
    addState,
    addHandlers
)(ModalResult);