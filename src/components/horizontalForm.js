import React from 'react';
import { withHandlers } from 'recompose';

const HForm = ({ onSubmit , onChange, prefix, value , type="text"}) => (
    <div style={{display: 'block'}}>
        <p style={{display: 'inline-block'}}>{prefix}   </p>
        <form onSubmit={onSubmit} style={{display: 'inline-block'}}>
            <input type={type} name="firstname" value={value} onChange={onChange}/>
        </form>
    </div>
);

export default withHandlers({
    onSubmit: props => event => {
        event.preventDefault();
    }
})(HForm);