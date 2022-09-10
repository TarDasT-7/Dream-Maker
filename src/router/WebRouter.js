import React from "react";
import {  Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import ClouthPage from "../pages/clouth/ClouthPage";
import Product from "../pages/clouth/products/Product";
import MusicPage from "../pages/music/MusicPage";
import StudioPage from "../pages/studio/StudioPage";
import TattoPage from "../pages/tatto/TattoPage";
import TattooArtist from "../pages/tatto/artist/TattooArtist";
import TattooStudio from "../pages/tatto/studio/TattooStudio";
import TattooIdea from "../pages/tatto/idea/TattooIdea";
import TattooArtistShow from "../pages/tatto/artist/TattooArtistShow";

import Song from "../pages/music/song/Song";
import Artist from "../pages/music/artist/Artist";
import ArtistShow from "../pages/music/artist/ArtistShow";
import Playlist from "../pages/music/playlist/Playlist";


import Navigation from "../components/header/Navigation";
import Footer from "../components/footer/Footer";

const WebRouter = () =>{

    return(
        <>
            <Navigation />

            <Routes>
                <Route index element={<HomePage />} />
                <Route path="music-page" element={<MusicPage />} />

                <Route path="music-page/songs" element={<Song />} />
                
                <Route path="music-page/artists" element={<Artist />} />
                <Route path="music-page/artists/:artistId" element={<ArtistShow />} />

                <Route path="music-page/playlist" element={<Playlist />} />


                <Route path="clouth-page" element={<ClouthPage />} />
                <Route path="clouth-page/:productTitle" element={<Product />} />

                <Route path="studio-page" element={<StudioPage />} />
                <Route path="tattoo-page" element={<TattoPage />} />
                <Route path="tattoo-page/artists" element={<TattooArtist />} />
                <Route path="tattoo-page/artists/:artistId" element={<TattooArtistShow />} />
                <Route path="tattoo-page/studios" element={<TattooStudio />} />
                <Route path="tattoo-page/ideas" element={<TattooIdea />} />


                <Route path="/login-page" element={<TattoPage />} />
            </Routes>

            <Routes>
                <Route path="about-me-page" element={<TattoPage />} />
            </Routes>

            <Footer />

        </>
    );

};
export default WebRouter;