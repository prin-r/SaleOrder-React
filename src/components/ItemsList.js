import React from 'react';
import Item from './Item';
import AddItem from './AddItem';
import { compose , withState, withHandlers } from 'recompose';

const ItemList = ({ state , openModal , addItem , removeAll }) => (
    <div>
        Items
        <button onClick={removeAll}>Remove All</button>
        {state.items.map(item => <Item content={item}/>)}
        <AddItem addItem={addItem}/>
    </div>
);

const addState = withState('state','updateState',{ items: [] });
const addHandlers = withHandlers({
    addItem: ({ updateState , state }) => event => {
        updateState({
            items: [...state.items, state.items.length]
        });
    },
    removeAll:  ({ updateState }) => event => {
        updateState({
            items: []
        });
    }
});

export default compose(
    addState,
    addHandlers
)(ItemList);