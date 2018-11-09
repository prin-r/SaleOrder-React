import { createStore } from 'redux';

const reduxState = {
    customerid: "0000",
    username: "",
    token: "",
    url: "http://104.215.182.60:3003",
    windowSize: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    items:[]
};

const reducer = (state = reduxState , action) => {
    switch (action.type) {
        case('SET_USERNAME') : 
            return {...state, username: action.username };
        case('SET_TOKEN') :
            return {...state , token: action.token };
        case('SET_CUSTOMER_ID') :
            return {...state , customerid: action.customerid };
        case('SET_INITIAL_ID') :
            return {...state , initialID: action.initialID };
        case('ADD_ITEM') :
            return {...state , items: [...state.items , action.item] };
        case('SET_ITEM') :
            return {...state , items: [...state.items.slice(0, action.index),action.item,...state.items.slice(action.index + 1) ]};
        case('SET_ALL_ITEMS') :
            return {...state , items: [...action.items] };
        case('REMOVE_ITEM') :
            return {...state , items: state.items.filter((item , i) => i !== action.index) };
        case('REMOVE_ALL_ITEMS') :
            return {...state , items: [] };
        case('SET_WINDOW_DIM') :
            return {...state , windowSize: { width: window.innerWidth, height: window.innerHeight }};
        default:
            return state;
    }
};

export default () => {
    const store = createStore(reducer);
    const updateWindowDimensions = () => store.dispatch({type: 'SET_WINDOW_DIM'});

    window.addEventListener('resize', updateWindowDimensions);

    return store;
};