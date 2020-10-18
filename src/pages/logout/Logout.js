import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { NavContext } from '../../components/routes/NavContext';

const Logout = () => {
    const { loginState } = useContext(NavContext);

    const [login, setLogin] = loginState;

    useEffect(() => {
        if (login == 1) {
            setLogin(0);
            localStorage.clear();
        }
    }, [])

    return <Redirect to='/login' />;
}

export default Logout;