import {configureStore} from '@reduxjs/toolkit';

import MusicPlayerSlice from './musicPlayer/MusicPlayer';

const store = configureStore({

    reducer:{
        musicPlayer:MusicPlayerSlice.reducer
    }

});

export default store;