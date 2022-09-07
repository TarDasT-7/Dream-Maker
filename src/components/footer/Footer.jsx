import ReactAudioPlayer from "react-audio-player";
import { useSelector } from "react-redux";

import { Link, NavLink } from "react-router-dom";
import classes from "./Footer.module.scss";

import { MusicsData } from "../data/tracksData";

// const songsItems = MusicsData;

const Footer = () => {
  const hasMusicPlayer = useSelector(
    (state) => state.musicPlayer.setMusicForPlay
  );
  const musicId = useSelector((state) => state.musicPlayer.musicIdForPlay);
  const music = MusicsData.find((track) => track.id === musicId);
  let appendAnd = musicId > 0 && music ? music.artists.length : 0;
  return (
    <div className={classes.footer}>
      {hasMusicPlayer && musicId > 0 && (
        <div className={classes.musicPlayer}>
          <ReactAudioPlayer
            style={{ width: "70%", height: "70%", margin: "10px 0 0 10px" }}
            src={music.musicPath}
            autoPlay
            controls
          />
          <p>
            {" "}
            {music.artists.map((artist, index) => {
              if (music.artists.length > 1 && appendAnd > 1) {
                appendAnd--;
                return artist.name + " & ";
              } else {
                return artist.name;
              }
            })}{" "}
            - {music.title}{" "}
          </p>
        </div>
      )}

      <div className={classes.menu}>
        {/* <ul>
                    <li>
                        <NavLink to="/about-me-page" className={(navData) => (navData.isActive ? "active-link" : "")}>
                        About Me
                        </NavLink>
                    </li>
                </ul> */}
      </div>
    </div>
  );
};

export default Footer;
