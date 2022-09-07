import { useState, useEffect } from "react";
import classes from "./ArtistShow.module.scss";
import { useParams } from "react-router-dom";
import { MusicsData } from "../../../components/data/tracksData.jsx";
import { ArtistsData } from "../../../components/data/atristsData.jsx";
import SongCard from "../../ui/card/SongCard.jsx";
import SongCardItem from "../../ui/card/SongCard-item.jsx";


const ArtistShow = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  const params = useParams();
  const artist = ArtistsData.find(
    (artist) => artist.id === parseInt(params.artistId)
  );
  const artistWallpaper =
    process.env.PUBLIC_URL + `/images/wallpapers/${artist.image}`;


  const tracks = [];

  if (artist) {
    MusicsData.map((music) =>
      music.artists.map((artist) =>
        artist.id === parseInt(params.artistId) ? tracks.push(music) : null
      )
    );
  }

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
                <h1 className={classes.lable}>tracks</h1>
            
                {tracks.map((item) => {
                return (
                    <div key={item.id} className={classes.songsPageBox}>
                    <SongCard>
                        <SongCardItem {...item} />
                    </SongCard>
                    </div>
                );
                })}
            </>
        }
        {tracks.length === 0 &&
            <>
                <h1 className={classes.lable}>There are no songs recorded for this artist yet... </h1>
            </>
        }
      </div>
    </div>
  );
};

export default ArtistShow;
