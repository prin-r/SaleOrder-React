import { createStore } from 'redux';

const reducer = (state = [], action) => {
    switch (action.type) {
        case('ADD_ITEM'):
            return [...state , action.item];
        case('REMOVE_ITEM'):
            return state.filter(({ id }) => id !== action.id );
        case('REMOVE_ALL'):
            return [];
        default:
            return state;
    }
};

export default () => {
    const store = createStore(
        reducer
    );
    return store;
};