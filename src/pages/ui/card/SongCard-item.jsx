import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MusicPlayerActions } from "../../../store/musicPlayer/MusicPlayer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import classes from "./SongCard-item.module.scss";

const SongCardItem = (props) => {
  const artistHref = "/music-page/artists/";
  const playIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="106"
      height="106"
      fill="currentColor"
      className="bi bi-play-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
    </svg>
  );
  const pauseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="106"
      height="106"
      fill="currentColor"
      className="bi bi-pause-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
    </svg>
  );
  const musicId = useSelector((state) => state.musicPlayer.musicIdForPlay);
  const playingMusic = useSelector((state) => state.musicPlayer.musicHasPlayed);

  const dispatch = useDispatch();

  const musicPlayerController = () => {
    dispatch(MusicPlayerActions.playOrPauseToggle(props.id));
  };

  const findItem = props.id === undefined ? false : true;
  const img =
    props.id === undefined
      ? process.env.PUBLIC_URL + `/images/errors/404.jpg`
      : process.env.PUBLIC_URL + `/images/${props.image}`;

  return (
    <div className={classes.cardItem}>
      {!findItem && (
        <Fragment>
          <div
            className={`${classes.cardItemImage}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>

          <div className={classes.cardItemDescription}>
            <h1>No artist with this name was found...</h1>
          </div>
        </Fragment>
      )}

      {findItem && (
        <Fragment>
          <div
            className={`${classes.cardItemImage} ${
              props.lock ? classes.lockCard : classes.cardItemImageHover
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className={`${classes.cardItemPlay}`}>
            <span onClick={musicPlayerController}>
              {musicId === props.id && playingMusic ? pauseIcon : playIcon}
            </span>
          </div>

          <div className={classes.cardItemDescription}>
            <h1>
              {props.title}{" "}
              {props.lock && (
                <span className={classes.lockLogIn}>
                  ( pleases <Link to="/">login</Link> )
                </span>
              )}
            </h1>
            {props.artists.map((artist, index) =>
              artist.isArtist ? (
                <span key={index}>
                  {" "}
                  <Link
                    to={artistHref + artist.id}
                    style={{ color: "#0F0E0E" }}
                  >
                    {" "}
                    @{artist.name}{" "}
                  </Link>{" "}
                </span>
              ) : (
                <span key={index}>#{artist.name}</span>
              )
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default SongCardItem;
