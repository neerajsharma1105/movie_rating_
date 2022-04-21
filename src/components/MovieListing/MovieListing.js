import React from 'react';
import { useSelector } from 'react-redux';
import {  getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard.js';
import Slider from 'react-slick';
import { Settings } from '../../common/settings';
import './MovieListing.scss';
const MovieListing = () => {
   
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    const {loading} = useSelector((state) => state.movies);
    let renderMovies, renderShows = "";

    renderMovies =
        movies.Response === "True" ? (
             movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie}/>
             ))
    ):(
        <div className='movies-error'>
            <h3>{movies.error}</h3>
        </div>
    );


    renderShows = 
        shows.Response === "True" ? (
            shows.Search.map((shows, index) => (
                <MovieCard key={index} data={shows}/>
            ))
        ):(
            <div className='movies-error'>
                <h3>{movies.error}</h3>
            </div>
        );


        if (loading) return <p>Loading...</p>

    
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>

                    {/* {Object.keys(data).length === 0 ? (<div>Loding list</div>):(

                        <Slider {...Settings}>{renderMovies}</Slider>
                    )} */}

<Slider {...Settings}>{renderMovies}</Slider>
                    
                </div>
            </div>

            <div className='show-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                <Slider {...Settings}>{renderShows}</Slider>
                </div>
            </div>
        </div>
    );
};

export default MovieListing;