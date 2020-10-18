import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { NavContext } from '../../components/routes/NavContext';
import './Login.css';

const Login = () => {
    const { loginState, userState } = useContext(NavContext);

    const [login, setLogin] = loginState;
    const [user, setUser] = userState;

    const isLogin = localStorage.getItem('isLogin');

    const onSubmit = (e) => {
        setLogin(1);
        e.preventDefault();
        console.log(login);
        console.log(user);
        localStorage.setItem('isLogin', 1);
    }

    const handleChange = (e) => {
        let formUserNew = { ...user };
        formUserNew[e.target.name] = e.target.value;
        setUser(formUserNew);
        console.log(user);
    }

    return (
        login == 1 ?
            <Redirect to='/' /> :
            <div>
                <h1>Login Page</h1>
                <div className='login-form'>
                    <form
                    onSubmit={onSubmit}>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            placeholder='username'
                            required
                            onChange={handleChange} />

                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='password'
                            required
                            onChange={handleChange} />

                        <br />
                        <br />

                        <button>Login</button>
                        <br />
                        <br />
                    </form>
                </div>
            </div>
    );
}

export default Login;