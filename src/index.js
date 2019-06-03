import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import shoutApp from './reducers';
import {
    addMessage
} from './actions';

const store = createStore(shoutApp);
console.log(store.getState()); //todo remove

const unsubscribe = store.subscribe( () => console.log(store.getState()));

const date = new Date();
const timeStamp = date.toTimeString();
console.log(timeStamp);
store.dispatch(addMessage('test', timeStamp, 'QA'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
unsubscribe();