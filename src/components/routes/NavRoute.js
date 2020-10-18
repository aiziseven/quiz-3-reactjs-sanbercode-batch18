import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavContext } from './NavContext';
import './NavRoute.css';

const NavRoute = () => {
    const { loginState } = useContext(NavContext);

    const [login, setLogin] = loginState;
    console.log('login ', login);

    return (
        <header>
            <img id="logo" src="https://gblobscdn.gitbook.com/assets%2F-LiR2ZMOIaxmhLlPQhLa%2F-LsKO0ePPOrb2KQEd7Gq%2F-LsKOmfnPPoDiqmDH44r%2Flogo.png?alt=media&token=b613bed4-5936-4f6b-aec4-aed6c214f630" width="200px" />
            <nav>
                <ul className='ul-nav'>
                    <Link to="/">
                        <li>Home</li>
                    </Link>

                    <Link to="/about">
                        <li>About</li>
                    </Link>

                    {login == 1 ?
                        <>
                            <Link to="/movies">
                                <li>Movie List Editor</li>
                            </Link>
                            <Link to="/logout">
                                <li>Logout</li>
                            </Link>
                        </> :
                        <Link to="/login">
                            <li>Login</li>
                        </Link>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default NavRoute;