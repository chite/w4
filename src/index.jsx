import "react-hot-loader";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './style/style.scss';
import App from './component/App';
import store from "./store/configurestore";



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')); 