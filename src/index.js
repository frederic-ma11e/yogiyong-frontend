import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Styles/reset.scss';
//reset.scss
import '../src/Styles/index.scss';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);

//Connect react with redux store
const app = (
    <Provider store={store}>
        <Routes />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

