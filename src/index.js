import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './store/configureStore.js'

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState());
})

console.log(store.getState());

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App/>
        </Provider>
    </BrowserRouter>
    , 
    document.getElementById('root')
)