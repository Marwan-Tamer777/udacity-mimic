
import React from 'react';
import ReactDOM from 'react-dom';
import './Components/css/index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import  {BrowserRouter} from 'react-router-dom'
import reducers from './Reducers/root'
import middleware from './Middleware/root'
import { createStore } from 'redux'


const store = createStore(reducers,middleware)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
