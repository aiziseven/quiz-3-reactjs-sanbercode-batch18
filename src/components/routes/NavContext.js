import React, { useState, createContext } from 'react';

export const NavContext = createContext();

export const NavProvider = props => {
    const isLogin = localStorage.getItem('isLogin');
    console.log('is login ', isLogin);
    const [login, setLogin] = useState(isLogin == '1' ? 1 : 0);
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const [movie, setMovie] = useState([
        {
            id: 0,
            title: '',
            description: '',
            year: 2020,
            duration: 120,
            genre: '',
            rating: 0,
            image_url: ''
        }
    ]);
    const [newMovie, setNewMovie] = useState(
        {
            id: 0,
            title: '',
            description: '',
            year: 2020,
            duration: 120,
            genre: '',
            rating: 0,
            image_url: ''
        }
    );
    const [index, setIndex] = useState(-1);
    const [disabled, setDisabled] = useState(false);
    const [submitted, setSubmitted] = useState(0);
    const [loading, setLoading] = useState(true);

    return (
        <NavContext.Provider value={{
            loginState: [login, setLogin],
            userState: [user, setUser],
            movieState: [movie, setMovie],
            newMovieState: [newMovie, setNewMovie],
            indexState: [index, setIndex],
            disabledState: [disabled, setDisabled],
            submittedState: [submitted, setSubmitted],
            loadingState: [loading, setLoading]
        }}>
            {props.children}
        </NavContext.Provider>
    );
}