import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import {store,persiststor} from './redux/store';
import { PersistGate } from "redux-persist/integration/react";

const AppRedux = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppRedux />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
