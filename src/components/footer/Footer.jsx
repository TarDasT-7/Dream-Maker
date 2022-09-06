import ReactAudioPlayer from "react-audio-player";
import { useSelector } from "react-redux";

import { Link, NavLink } from "react-router-dom";
import classes from "./Footer.module.scss";

const songsItems = [
  {
    id: 1,
    title: "Mokingbird",
    artists: [
      {
        name: "Eminem",
        isArtist: true,
      },
    ],
    //   image: require('../../../assets/media/images/artists/eminem.jpg'),
    image:
      "https://i.pinimg.com/originals/36/be/97/36be979fd9f05771e3fc63317b078602.jpg",

    src: "https://dl.psnmusic.com/Top%20Single/Eminem%20-%20Mockingbird.mp3",
    address: "/",
    lock: false,
  },

  {
    id: 2,
    title: "Kim",
    artists: [
      {
        name: "Eminem",
        isArtist: true,
      },
    ],
    //   image: require('../../../assets/media/images/artists/nikiminaje.jpg'),
    image:
      "https://cdn.webshopapp.com/shops/134936/files/334413109/eminem-the-marshall-mathers-lp-cd.jpg",
    src: "https://ts1.tarafdari.com/contents/user182103/content-sound/eminem_-_kim.mp3",
    address: "songs",
    lock: false,
  },
  {
    id: 3,
    title: "OverHated",
    artists: [
      {
        name: "Billie",
        isArtist: true,
      },
    ],
    //   image: require('../../../assets/media/images/artists/50cent.jpg'),
    image:
      "https://scadconnector.com/wp-content/uploads/2021/07/Billie-Eilish-Happier-1.jpeg",
    src: "https://ts9.tarafdari.com/contents/user762486/content-sound/10-_overheatedjumpmusic.ir_.mp3",
    address: "songs",
    lock: false,
  },
  {
    id: 4,
    title: "Live From The Gutter",
    artists: [
      {
        name: "Drake",
        isArtist: true,
      },
      {
        name: "Future",
        isArtist: false,
      },
    ],
    //   image: require('../../../assets/media/images/artists/drake.jpg'),
    image: "https://m.media-amazon.com/images/I/91hocd99gjL._SS500_.jpg",
    src: "https://files.musicfeed.ir/2020/01/Future-ft.-Drake-Life-Is-Good-musicfeed.ir_.mp3?128kb",
    address: "songs",
    lock: false,
  },
  {
    id: 5,
    title: "Sum 2 Prove",
    artists: [
      {
        name: "Lil Baby",
        isArtist: true,
      },
    ],
    //   image: require('../../../assets/media/images/artists/billie.jpg'),
    image:
      "https://static.stereogum.com/uploads/2020/01/Lil-Baby-Sum-2-Prove-1578665961.jpg",
    src: "https://dl.musicdel.ir/Music/1401/03/lil_baby_in_a_minute%20128.mp3",
    address: "songs",
    lock: false,
  },
  {
    id: 6,
    title: "When I Grow Up",
    artists: [
      {
        name: "NF",
        isArtist: true,
      },
    ],
    //   image: require('../../../assets/media/images/artists/nf.jpg'),
    image:
      "https://i.pinimg.com/736x/8c/18/cd/8c18cd6000bde8a60b8e0680bca27edf.jpg",
    src: "https://dl.beelody.com/Free/2019/1/This%20Is%20NF%20%282019%29%20MELOVAZ.NET/01%20WHY.mp3",
    address: "artists",
    lock: false,
  },
];

const Footer = () => {
  const hasMusicPlayer = useSelector(
    (state) => state.musicPlayer.setMusicForPlay
  );
  const musicId = useSelector((state) => state.musicPlayer.musicIdForPlay);
  const music = songsItems.find((track) => track.id === musicId);
  let appendAnd = musicId > 0 && music ? music.artists.length : 0;
  return (
    <div className={classes.footer}>
      {hasMusicPlayer && musicId > 0 && (
        <div className={classes.musicPlayer}>
          <ReactAudioPlayer
            style={{ width: "70%", height: "70%", margin: "10px 0 0 10px" }}
            src={music.src}
            autoPlay
            controls
          />
          <p>
            {" "}
            {music.artists.map((artist, index) => {
              if (music.artists.length > 1 && appendAnd > 1) {
                console.log(appendAnd);
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
