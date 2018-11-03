import React from 'react';
import { compose , withState, withHandlers } from 'recompose';

const Item = (props) => (
    <div>
        {props.content}
    </div>
);

export default Item;