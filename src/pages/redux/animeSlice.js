import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// async logic
const fetchUpComingAnime = createAsyncThunk('posts/fetchUpcomingAnime', async () => {
    try {
        const response = await axios.get('https://api.jikan.moe/v3/top/anime/1/upcoming');

        return response.data;

    } catch (error) {
        console.error(error);
    }
})
const fetchPopularity = createAsyncThunk('posts/fetchPopularity', async () => {
    try {
        const response = await axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity');
        return response.data;
    } catch (error) {
        console.error(error);
    }
})

const fetchAiringAnime = createAsyncThunk('posts/fetchAiringAnime', async () => {
    try {
        const response = await axios.get('https://api.jikan.moe/v3/top/anime/1/airing');
        return response.data;
    } catch (error) {
        console.error(error);
    }
})

const fetchFavoriteAnime = createAsyncThunk('posts/fetchFavoriteAnime', async () => {
    try {
        const response = await axios.get('https://api.jikan.moe/v3/top/anime/1/favorite');
        return response.data;
    } catch (error) {
        console.error(error);
    }
})

const fetchAot = createAsyncThunk('posts/fetchAot', async () => {
    try {
        const response = await axios.get(' https://api.jikan.moe/v3/search/anime?q=Attack on Titan');
        return response.data;
    } catch (error) {
        console.error(error);
    }
})

const initialState = {
    status: 'idle',
    error: null,
    resultsArray: [],
    upcomingAnimeResults: [],
    animeDetail: [],
    popularAnimeResults: [],
    airingAnime: [],
    favoriteAnime: [],
    aotResult: []
};

const animeSlice = createSlice({
    // prefix for the reducers
    name: "anime",
    // redux state
    initialState,

    reducers: {
        getAnimeId: (state, action) => {

            state.animeDetail.push(action.payload)

        }

    },

    // contains the mutated data because reducers are not allowed to directly mutated the state
    extraReducers: {
        // upcoming anime
        [fetchUpComingAnime.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchUpComingAnime.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.upcomingAnimeResults = action.payload.top;

        },
        [fetchUpComingAnime.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        },
        // popular anime
        [fetchPopularity.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchPopularity.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.popularAnimeResults = action.payload.top;

        },
        [fetchPopularity.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        },

        // airing anime
        [fetchAiringAnime.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchAiringAnime.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.airingAnime = action.payload.top;

        },
        [fetchAiringAnime.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        },

        //favorite anime
        [fetchFavoriteAnime.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchFavoriteAnime.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.favoriteAnime = action.payload.top;

        },
        [fetchFavoriteAnime.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        },
        //attack on titan
        [fetchAot.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchAot.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.aotResult = action.payload.results[0];

        },
        [fetchAot.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        }
    }
})



const { actions, reducer } = animeSlice;
export default reducer;
// reducers
export const { getAnimeId } = actions;
// export async  
export { fetchUpComingAnime, fetchPopularity, fetchAiringAnime, fetchAot, fetchFavoriteAnime };

