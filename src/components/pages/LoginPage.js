import React from 'react';
import Loadable from 'react-loadable';
import Footer from '../footer';
import { compose , withState, withHandlers } from 'recompose';

const Logo = Loadable({
    loader: () => import('../vectorImg/scgl'),
    loading: () => <div> ...loading </div>
});

const Username = Loadable({
    loader: () => import('../horizontalForm'),
    loading: () => <div> Username </div>
});

const Password = Loadable({
    loader: () => import('../horizontalForm'),
    loading: () => <div> Password </div>
});

const LoginPage = ({ state , setUsername , setPassword , onSubmit }) => (
    <div>
        <center>
            <Logo width={'30%'} height={'30%'}/>
            <Username prefix={"Username"} value={state.username} onChange={setUsername}/>
            <Password prefix={"Password"} value={state.password} onChange={setPassword} type={"password"}/>
            <button onClick={onSubmit}>Login</button>
            <Footer />
        </center>
    </div>
);

const addState = withState('state','updateState',{ username:'' , password:'' });
const addHandlers = withHandlers({
    setUsername: ({ updateState , state }) => event => {
        updateState({
            username: event.target.value,
            password: state.password
        });
    },
    setPassword: ({ updateState , state }) => event => {
        updateState({
            username: state.username,
            password: event.target.value
        });
    },
    onSubmit: props => event => {
        console.log(props.state);
    }
});

export default compose(
    addState,
    addHandlers
)(LoginPage);