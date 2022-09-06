import { createSlice } from "@reduxjs/toolkit";

const initialMusicPlayer = {setMusicForPlay:true, musicIdForPlay:0, musicHasPlayed:false};

const MusicPlayerSlice = createSlice({

    name:'music-player',
    initialState:initialMusicPlayer,
    reducers:{

        playOrPauseToggle(state, action) {
            if(action.payload === state.musicIdForPlay)
            {
                state.musicHasPlayed = !state.musicHasPlayed;
                state.setMusicForPlay = true;
                state.musicIdForPlay = action.payload;

            }else
            {
                state.musicHasPlayed = true;
                state.setMusicForPlay = true;
                state.musicIdForPlay = action.payload;
            }
        },

        
    }

});


export const MusicPlayerActions = MusicPlayerSlice.actions;
export default MusicPlayerSlice;