import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import About from '../../pages/about/About';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import Logout from '../../pages/logout/Logout';
import Movies from '../../pages/movie/Movies';
import Movie from '../../pages/movie/MoviesForm';
import { NavContext } from './NavContext';

const Routes = () => {
    const { loginState } = useContext(NavContext);

    const [login, setLogin] = loginState;

    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/home'>
                <Home />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/movies'>
                {login == '1' ?
                    <Movies /> :
                    <Redirect to='/' />
                }

            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/logout'>
                <Logout />
            </Route>
        </Switch>
    );
}

export default Routes;