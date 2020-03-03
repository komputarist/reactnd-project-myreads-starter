import React from 'react';
import {IntlProvider} from "react-intl";
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <IntlProvider locale='en'>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </IntlProvider>,
document.getElementById('root'))