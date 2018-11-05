import { createStore } from 'redux';

const reducer = (state = [], action) => {
    switch (action.type) {
        case('ADD_ITEM'):
            return [...state , action.item];
        case('SET_ITEM') :
            if (state[action.index]) {
                state[action.index] = action.item;
            }
            return state;
        case('REMOVE_ITEM'):
            return state.filter((item , i) => i !== action.index );
        case('REMOVE_ALL_ITEMS'):
            return [];
        default:
            return state;
    }
};

export default () => {
    const store = createStore(
        reducer
    );

    store.dispatch({
        type: 'ADD_ITEM',
        text: 'REMOVE_ITEM',
        text: 'REMOVE_ALL_ITEMS'
    });

    store.dispatch({type: 'REMOVE_ALL_ITEMS'});

    return store;
};