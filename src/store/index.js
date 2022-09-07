import {configureStore} from '@reduxjs/toolkit';

import MusicPlayerSlice from './musicPlayer/MusicPlayer';
// import SongSearchSlice from './searchSongs/SearchSong';

const store = configureStore({

    reducer:{
        musicPlayer:MusicPlayerSlice.reducer,
        // searchSongs:SongSearchSlice.reducer
    }

});

export default store;