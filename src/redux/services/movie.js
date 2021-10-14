import { createAsyncThunk } from "@reduxjs/toolkit";

// Should be moved to .env file in normal production app
const BASE_URL = 'https://api.themoviedb.org/3';
const ENDPOINT = 'discover/movie?sort_by=popularity.desc';
const API_KEY = 'e937ffadd8a87bb3afc2fdc72be93b0d';

// Should be done in a utils or config file
const API_URL = `${BASE_URL}/${ENDPOINT}&api_key=${API_KEY}`;

export const GetMovies = createAsyncThunk(
    "movies/getMovies", 
    async () => await (await fetch(API_URL)).json()
);