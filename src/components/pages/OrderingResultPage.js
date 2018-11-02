import React from 'react';

const OrderingResultPage = (props) => (
    <div>
        <h1>{props.message}</h1>
        <p>{props.flag ? "continue": "back"}</p>
    </div>
);

export default OrderingResultPage;