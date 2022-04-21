import React, { useState } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Harry";
    const showText = "Friends"
    useState(()=>{
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
    },[dispatch])
    return (
        <div>
           <div className='banner-img'>
            <MovieListing/>
           </div>
        </div>
    );
};

export default Home;