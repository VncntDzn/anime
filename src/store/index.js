import { configureStore } from '@reduxjs/toolkit';
import animeSlice from 'pages/redux/animeSlice';

const store = configureStore({
    reducer: animeSlice

});

export default store;