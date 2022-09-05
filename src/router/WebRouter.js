import React from "react";
import {  Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import ClouthPage from "../pages/clouth/ClouthPage";
import MusicPage from "../pages/music/MusicPage";
import StudioPage from "../pages/studio/StudioPage";
import TattoPage from "../pages/tatto/TattoPage";
import WallpaperPage from "../pages/wallpaper/WallpaperPage";

import Navigation from "../components/header/Navigation";

const WebRouter = () =>{

    return(
        <>
            <Navigation />

            <Routes>
                <Route index element={<HomePage />} />
                <Route path="music-page" element={<MusicPage />} />
                <Route path="clouth-page" element={<ClouthPage />} />
                <Route path="studio-page" element={<StudioPage />} />
                <Route path="wallpaper-page" element={<WallpaperPage />} />
                <Route path="tattp-page" element={<TattoPage />} />
            </Routes>

        </>
    );

};
export default WebRouter;