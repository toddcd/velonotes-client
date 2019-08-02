import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {BicyclesProvider} from './context/BicyclesContext'
import {BikeProvider} from './context/BikeContext'
import './index.css';
import App from './components/App/App';

ReactDOM.render(
    <BrowserRouter>
        <BicyclesProvider>
            <BikeProvider>
                <App/>
            </BikeProvider>
        </BicyclesProvider>
    </BrowserRouter>, document.getElementById('root'));

