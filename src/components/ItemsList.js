import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import ModalItem from './ModalItem';
import { compose , withHandlers } from 'recompose';

const ItemList = ({ removeAll , reduxState }) => (
    <div>
        Items
        <button onClick={removeAll}>Remove All</button>
        {reduxState.map( (item , i) => <Item index={i} {...item}/>)}
        <ModalItem title={'New Item Properties'}/>
    </div>
);

const addHandlers = withHandlers({
    removeAll:  ({ dispatch }) => event => {
        dispatch({
            type: 'REMOVE_ALL_ITEMS'
        });
    }
});

const mapStateToProps = (state) => {
    return {
        reduxState: state
    }
}

export default connect(mapStateToProps)(
    compose(
        addHandlers
    )(ItemList)
);