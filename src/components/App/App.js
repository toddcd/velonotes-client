import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import './App.css';
import BikeDetailPage from "../../routes/BikeDetailPage/BikeDetailPage";
import CollectionPage from "../../routes/CollectionPage/CollectionPage";
import CollectionGridPage from "../../routes/CollectionGridPage/CollectionGridPage";

function App() {
    return (
        <div className="App">
            <header className='App__header'>
                <Header/>
            </header>
            <main>
                <Switch>
                    <Route
                        exact
                        path={'/'}
                        component={LandingPage}
                    />
                    <Route
                        exact
                        path={'/login'}
                        component={LoginPage}
                    />
                    <Route
                        exact
                        path={'/register'}
                        component={RegistrationPage}
                    />
                    <Route
                        exact
                        path={'/collection'}
                        component={CollectionPage}
                    />
                    <Route
                        exact
                        path={'/collection/grid'}
                        component={CollectionGridPage}
                    />
                    <Route
                        path={'/collection/:bikeId'}
                        component={BikeDetailPage}
                    />
                    <Route
                        component={NotFoundPage}
                    />
                </Switch>
            </main>
            <footer role="contentinfo">TD3 Studios</footer>
        </div>
    );
}

export default App;
