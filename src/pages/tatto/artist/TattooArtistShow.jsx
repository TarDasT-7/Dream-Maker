import { useState, useEffect } from "react";
import classes from "./TattooArtistShow.module.scss";
import { useParams } from "react-router-dom";

import { TattooIdeaData } from "../../../components/data/tattoData";
import { TattoArtists } from "../../../components/data/tattoData";

import SongCard from "../../ui/card/SongCard.jsx";
import SongCardItem from "../../ui/card/SongCard-item.jsx";


const TattooArtistShow = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  const params = useParams();
  const artist = TattoArtists.find(
    (artist) => artist.id === parseInt(params.artistId)
  );
  const artistWallpaper =
    process.env.PUBLIC_URL + `/images/wallpapers/${artist.image}`;


  const tracks = [];

  if (artist) {
    TattooIdeaData.map((tattoo) =>
      tattoo.artist.id === parseInt(params.artistId) ? tracks.push(tattoo) : null
    );
  }
  console.log(tracks);

  return (
    <div>
      <div
        className={classes.wallpaper}
        style={{ backgroundImage: `url(${artistWallpaper})` }}
      ></div>
      <div className={classes.backWallpaper}></div>

      <div className={classes.about}>
        <dir className={classes.aboutTitle}>
          <h1>{artist.title}</h1>
        </dir>
        <dir className={classes.aboutText}>
            
          <p>
            {artist.description}
          </p>

        </dir>
      </div>

      <div className={classes.tracks}>
        {tracks.length > 0 &&
            <>
                <h1 className={classes.lable}>Work samples</h1>
            
                {tracks.map((item) => {
                return (
                    <div key={item.id} className={classes.songsPageBox}>
                    <SongCard>
                    <SongCardItem parentComponent="tattooIdea" {...item} />
                    </SongCard>
                    </div>
                );
                })}
            </>
        }
        {tracks.length === 0 &&
            <>
                <h1 className={classes.lable}>There are Work samples for this artist yet... </h1>
            </>
        }
      </div>
    </div>
  );
};

export default TattooArtistShow;
