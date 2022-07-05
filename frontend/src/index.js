import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './containers/footer.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
        <Footer />
    </BrowserRouter>,
    document.getElementById('root')
);