import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";


export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (term)=>{
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`
            ); 
            return response.data;
        }
     );

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);
        return response.data;
    }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetails",
    async (id) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
        return response.data; 
    }
)

const initialState = {
    movies: [],
    shows:[],
    selectedMovieOrShow:[],
    loading:false,
}


const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state,{payload})=>{
            state.movies = payload;
        },
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]: (state) =>{
            console.log("pending");
            return {...state, loading: true}
        },

        [fetchAsyncMovies.fulfilled]: (state, {payload})=>{
            console.log("Fetch Successfully");
            //state.loading = false;
            return {...state, movies: payload,loading : false};
        },

        [fetchAsyncMovies.rejected]: ()=>{
           // state.loading = true;
            console.log("rejected");
        },

        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            //{state.loading = false};
            console.log("fetch successfully");
            return {...state, shows:payload};
        },

        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
            return {...state, selectedMovieOrShow:payload}
        }
    }
})

//export const {addMovies} = movieSlice.actions;
export const {removeSelectedMovieOrShow} =movieSlice.actions;
export const getAllMovies = (state)=> state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllMovieOrShowDetail = (state) => state.movies.selectedMovieOrShow;

export default movieSlice.reducer;