import React from 'react';
import Routes from './../routes';
import { Provider as ReduxProvider } from "react-redux";
import store from './store'

const index = () => {
    return (
        <div>
            <ReduxProvider store={store}>
                <Routes/>
            </ReduxProvider>
        </div>
    )
}

export default index;
