import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { NavContext } from '../../components/routes/NavContext';
import './MoviesForm.css';

const MoviesForm = () => {
    const {
        loginState,
        movieState,
        newMovieState,
        indexState,
        disabledState,
        submittedState,
        loadingState
    } = useContext(NavContext);

    const [movie, setMovie] = movieState;
    const [newMovie, setNewMovie] = newMovieState;
    const [index, setIndex] = indexState;
    const [disabled, setDisabled] = disabledState;
    const [submitted, setSubmitted] = submittedState;
    const [loading, setLoading] = loadingState;

    const handleChange = (e) => {
        let formMovieNew = { ...newMovie };
        formMovieNew[e.target.name] = e.target.value;
        setNewMovie(formMovieNew);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit ', newMovie);
        console.log('index ', index);
        if (index == -1) {
            console.log('here');
            setDisabled(true);
            axios.post('http://backendexample.sanbercloud.com/api/movies', newMovie)
                .then(res => {
                    setSubmitted(submitted + 1);
                    setNewMovie([
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
                    setDisabled(false);
                })
        } else {
            axios.put(`http://backendexample.sanbercloud.com/api/movies/${newMovie.id}`, newMovie)
                .then(res => {
                    setNewMovie([
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
                    setSubmitted(submitted + 1);
                })
        }
        setIndex(-1);
    }

    useEffect(() => {
        axios.get('http://backendexample.sanbercloud.com/api/movies')
            .then(res => {
                setMovie(res.data);
                setLoading(false);
            })
    }, [submitted])

    return (
        <>
            <h1>Movies Form</h1>
            <form
                className='center-form'
                onSubmit={handleSubmit}>
                <table className='movie-form'>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>&nbsp;</td>
                            <td>
                                <input
                                    type='text'
                                    name='title'
                                    id='title'
                                    value={newMovie.title || ''}
                                    onChange={handleChange}
                                    required />
                            </td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>&nbsp;</td>
                            <td>
                                <textarea
                                    name='description'
                                    id='description'
                                    value={newMovie.description || ''}
                                    onChange={handleChange}
                                    required>
                                </textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>&nbsp;</td>
                            <td>
                                <input
                                    type='number'
                                    name='year'
                                    id='year'
                                    min='1980'
                                    value={newMovie.year || 2020}
                                    onChange={handleChange}
                                    required />
                            </td>
                        </tr>
                        <tr>
                            <td>Duration</td>
                            <td>&nbsp;</td>
                            <td>
                                <input
                                    type='number'
                                    name='duration'
                                    id='duration'
                                    min='1'
                                    value={newMovie.duration || 120}
                                    onChange={handleChange}
                                    required />
                            </td>
                        </tr>
                        <tr>
                            <td>Genre</td>
                            <td>&nbsp;</td>
                            <td>
                                <input
                                    type='text'
                                    name='genre'
                                    id='genre'
                                    value={newMovie.genre || ''}
                                    onChange={handleChange}
                                    required />
                            </td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>&nbsp;</td>
                            <td>
                                <input
                                    type='number'
                                    name='rating'
                                    id='rating'
                                    min='0'
                                    max='10'
                                    value={newMovie.rating || 0}
                                    onChange={handleChange}
                                    required />
                            </td>
                        </tr>
                        <tr>
                            <td>Image URL</td>
                            <td>&nbsp;</td>
                            <td>
                                <textarea
                                    name='image_url'
                                    id='image_url'
                                    value={newMovie.image_url || ''}
                                    onChange={handleChange}
                                    required>
                                </textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button
                                    type='submit'
                                    className='btn'
                                    disabled={disabled === true ? true : false}>Submit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </form>
        </>
    );
}

export default MoviesForm;