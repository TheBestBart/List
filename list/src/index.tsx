import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import CurrenciesService from './components/services/CurrenciesService';
import PaginationService from './components/services/PaginationService';

ReactDOM.render(
  <Router>
    <React.StrictMode>
    <CurrenciesService render={props => <PaginationService {...props} render={(props) => <App {...props} />} />} />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
