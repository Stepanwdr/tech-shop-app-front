import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./store/reducers";
import "./assets/styles.scss"
import {requestMiddleware} from "./helpers/redux-request";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(requestMiddleware)),
)
requestMiddleware.on.fail = ((err) => {
    if (err.response) {
        return err.response;
    }
    throw err;
});
window.store = store;


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import createSagaMiddleware from 'redux-saga';
// import watchers from "./store/sagas";

// const saga = createSagaMiddleware();
// saga.run(watchers);