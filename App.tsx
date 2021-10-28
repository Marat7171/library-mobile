import React from 'react';
import AppNavigator from "./navigation/AppNavigator";
import LoginForm from "./src/components/LoginForm/LoginForm";
import {Provider, useSelector} from "react-redux";
import {store} from "./src/toolkitRedux";


export default function App() {
    return (
        <Provider store={store}>
            <MainApplication/>
        </Provider>
    );
}


const MainApplication = () => {
    const auth = useSelector(state => state.toolkit.auth);

    return (
        <>
            {auth ? <AppNavigator/> : <LoginForm/>}
        </>
    );
}
