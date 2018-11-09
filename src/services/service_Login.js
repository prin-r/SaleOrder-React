import { post } from 'axios';

const service_login = ( data , url , dispatch , updateState , state ) => post(
        url + '/login',
        data,
        { headers: { 'Content-Type': 'application/json' }})
    .then(function (response) {
        const { data } = response;
        if (data.user.token) {
            dispatch({ type: 'SET_USERNAME', username: state.username });
            dispatch({ type: 'SET_TOKEN', token: data.user.token });
            const { username } = state;
            if (localStorage.hasOwnProperty(username)) {
                const userData = localStorage.getItem(username);
                const { customerid = "" , items = [] } = JSON.parse(userData);
                dispatch({type: 'SET_CUSTOMER_ID', customerid: customerid });
                dispatch({type: 'SET_ALL_ITEMS', items: items });
            }
            updateState({...state, redirect: true });
        }
    })
    .catch(function (error) {
        alert(error);
    }
);

export default service_login;