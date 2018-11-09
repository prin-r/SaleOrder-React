import React from 'react';
import Loadable from 'react-loadable';
import service_Login from '../../services/service_Login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { compose , withState, withHandlers } from 'recompose';

const SCGL = Loadable({
    loader: () => import('../vectorImg/scgl'),
    loading: () => <div> ...loading </div>
});

const Username = Loadable({
    loader: () => import('../FormWithHandlers'),
    loading: () => <div> Username </div>
});

const Password = Loadable({
    loader: () => import('../FormWithHandlers'),
    loading: () => <div> Password </div>
});

const Footer =  Loadable({
    loader: () => import('../Footer'),
    loading: () => <div> ...loading </div>
});

const LoginPage = ({ state , setUserProperty , onSubmit }) => (
    <div>
        <SCGL />
        <Username prefix={"Username"} value={state.username} onChange={(event) => setUserProperty(event , "username")} />
        <Password prefix={"Password"} value={state.password} onChange={(event) => setUserProperty(event , "password")} type={"password"} />
        <button onClick={onSubmit}>Login</button>
        { state.redirect && <Redirect to='/create'/> }
        <Footer />
    </div>
);

const addState = withState('state','updateState',{ username:'' , password:'' , redirect: false });
const addHandlers = withHandlers({
    setUserProperty: ({ updateState , state }) => (event , property) => {
        updateState({...state, [property]: event.target.value});
    },
    onSubmit: ({ url , dispatch , updateState , state }) => event => {
        const data = { user: state };
        service_Login( data , url , dispatch , updateState , state );
    }
});

const mapStateToProps = ({ url }) =>  ({ url: url });

export default compose(
    connect(mapStateToProps),
    addState,
    addHandlers,
)(LoginPage);