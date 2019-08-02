import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import './App.css';
import BicycleDetailPage from "../../routes/BicycleDetailPage/BicycleDetailPage";
import BicycleGalleryPage from "../../routes/BicycleGalleryPage/BicycleGalleryPage";
import BicycleGridPage from "../../routes/BicycleGridPage/BicycleGridPage";
import AddEditNote from "../Note/AddEditNote";
import AddPosition from "../../components/Position/AddPosition";
class App extends Component {
    state = { hasError: false }

    static getDerivedStateFromError(error) {
        console.error(error)
        return { hasError: true }
    }

    render(){

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
                            path={'/register'}
                            component={RegistrationPage}
                        />
                        <Route
                            exact
                            path={'/gallery'}
                            component={BicycleGalleryPage}
                        />
                        <Route
                            path={'/grid'}
                            component={BicycleGridPage}
                        />
                        <Route
                            exact
                            path={'/gallery/:bikeId'}
                            component={BicycleDetailPage}
                        />
                        <Route
                            exact
                            path={'/gallery/:bikeId/addnote'}
                            render={(renderProps) =>
                                    (<AddEditNote {...renderProps} />
                                )}
                        />
                        <Route
                            exact
                            path={'/gallery/:bikeId/editnote'}
                            render={(renderProps) =>
                                (<AddEditNote {...renderProps} />
                                )}
                        />
                        <Route
                            exact
                            path={'/gallery/:bikeId/addposition'}
                            component={AddPosition}
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
}

export default App;
