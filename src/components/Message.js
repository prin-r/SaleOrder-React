import React from 'react';

const title = (status) => {
    switch (status) {
        case('success') :
            return 'Success'
        case('waiting') :
            return 'Waiting For Response ...'
        case('error') :
            return 'Error'
        default:
            return '';
    }
};

const messageRenderer = (message) => {
    const { data , status } = message;
    if (data && status) {
        return 'Transaction ID : ' + data.txId + ' , status : ' + status;
    }
    return message;
};

const Message = ({ message , status }) => (
    <div>
        <h3 className="modal__title">{title(status)}</h3>
        <p>{messageRenderer(message)}</p>
    </div>
);

export default Message;