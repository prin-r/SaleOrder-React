import { createStore } from 'redux';

const reducer = (state = [], action) => {
    switch (action.type) {
        case('1'):
            return {state: ["1","2"]};
        case('2'):
            return {state: ["2","4"]};
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