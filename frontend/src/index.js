import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './static/courses/vendor/perfect-scrollbar.css';
import './static/courses/vendor/fix-footer.css';
import './static/courses/css/material-icons.css';
import './static/courses/css/material-icons.rtl.css';
import './static/courses/css/fontawesome.css';
import './static/courses/css/fontawesome.rtl.css';
import './static/courses/css/preloader.css';
import './static/courses/css/preloader.rtl.css';
// import './static/courses/css/app.css';
import './static/courses/css/app.rtl.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();