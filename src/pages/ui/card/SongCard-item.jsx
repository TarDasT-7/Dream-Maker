import { Link } from "react-router-dom";

import classes from "./SongCard-item.module.scss";

const SongCardItem = (props) => {
    const playIcon = <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                    </svg>;
    const pauseIcon = <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
                    </svg>;
    const isPlay = false;


  return (
    <Link to={props.address}>
      <div className={classes.cardItem}>
        <div
          className={`${classes.cardItemImage} ${
            props.lock ? classes.lockCard : classes.cardItemImageHover
          }`}
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className={`${classes.cardItemPlay}`}>
          <span>{isPlay ? pauseIcon : playIcon}</span>
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
          {props.artists.map(artist => artist.isArtist ? <span> <Link to='artists' style={{color:'#0F0E0E'}}> @{artist.name} </Link> </span> : <span>#{artist.name}</span>)}
        </div>
      </div>
    </Link>
  );
};

export default SongCardItem;
