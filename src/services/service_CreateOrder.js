import { post } from 'axios';

const config = (token) => ({
    headers: {
        'Content-Type': 'application/json' , 
        'Authorization': 'Token ' + token 
    }
});

const service_createOrder = ( url , data , token , updateState , state ) => post(
        url + '/client-order',
        data,
        config(token))
    .then(function (response) {
        updateState({...state, status: 'success' , message: response });
    })
    .catch(function (error) {
        updateState({...state, status: 'error' , message: error.toString() });
    }
);

export default service_createOrder;