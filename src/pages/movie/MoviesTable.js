import axios from 'axios';
import React, { useContext } from 'react';
import { NavContext } from '../../components/routes/NavContext';
import './MoviesTable.css';

const header = ['No', 'Title', 'Description', 'Year', 'Duration', 'Genre', 'Rating'];

const MoviesTable = () => {
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

    const handleEdit = (e) => {
        let formMovieNew = movie[e.target.value];
        setNewMovie(formMovieNew);
        setIndex(e.target.value);
    }

    const handleDelete = (e) => {
        let formMovieNew = movie[e.target.value];
        setDisabled(true);
        axios.delete(`http://backendexample.sanbercloud.com/api/movies/${formMovieNew.id}`)
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
                ])
                setDisabled(false);
            })
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        if (newMovie.title == '') {
            axios.get('http://backendexample.sanbercloud.com/api/movies')
                .then(res => {
                    setMovie(res.data);
                    setLoading(false);
                    setSubmitted(submitted + 1);
                })
        } else {
            setMovie(movie.filter(m => m.title.toLowerCase().includes(newMovie.title.toLowerCase())));
            setLoading(false);
        }
    }

    const handleChangeSearch = (e) => {
        let formMovieNew = { ...newMovie };
        formMovieNew['title'] = e.target.value;
        setNewMovie(formMovieNew);
    }

    return (
        loading ?
            <>
                <br />
                <div className='loader'></div>
                <h1 style={{ textAlign: 'center' }}>Loading...</h1>
            </>
            :
            <div>
                <form
                    className='search'
                    onSubmit={handleSubmitSearch}>
                    <input
                        type='text'
                        name='search'
                        onChange={handleChangeSearch || ''}
                    /><button>Search</button>
                </form>
                <h1 style={{ textAlign: 'center' }}>
                    Daftar Film
            </h1>
                <table className='table-movies'>
                    <thead>
                        <tr>
                            {header.map(head => {
                                return (
                                    <td key={head}><b>{head}</b></td>
                                )
                            })}
                            <td
                                colSpan='2'
                                align='center'>
                                <b>Action</b>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {movie.map((m, index) => {
                            return (
                                <tr key={m.id}>
                                    <td>{index + 1}</td>
                                    <td>{m.title}</td>
                                    <td
                                        className='col-ellipsis'
                                        title={m.description}>
                                        {m.description}
                                    </td>
                                    <td>{m.year}</td>
                                    <td>{m.duration}</td>
                                    <td>{m.genre}</td>
                                    <td>{m.rating}</td>
                                    <td align='center'>
                                        <button
                                            className='btn-crud'
                                            onClick={handleEdit}
                                            value={index}
                                            title={`Edit Data ${m.title}`}>
                                            Edit
                                        </button>
                                    </td>
                                    <td align='center'>
                                        <button
                                            className='btn-crud'
                                            onClick={handleDelete}
                                            value={index}
                                            title={`Delete Data ${m.title}`}
                                            disabled={disabled === true ? true : false}>
                                            Delete
                                    </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
    );

}

export default MoviesTable;