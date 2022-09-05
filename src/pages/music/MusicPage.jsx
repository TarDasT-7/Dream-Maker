import classes from "./MusicPage.module.scss";

import SongImage from "../../assets/media/images/homePageWallpaper/back.jpg";
import ArtistsImage from "../../assets/media/images/musicPage/artist.jpg";
import PlaylistImage from "../../assets/media/images/musicPage/playlist.jpg";

import Card from "../ui/card/Card";
import CardItem from "../ui/card/Card-item";

const MusicPage = () => {
  const musicPageItems = [
    {
        id:1,
        title: "Songs",
        description: "top hip hop music for play or download...",
        image: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-146432-6b725a8c7cad1a0414c5a33f06299e9d2730ae2e.jpg',
        address: "songs",
        lock : false
    },
    {
        id:2,
        title: "Artists",
        description: "best hip hop singer",
        image: ArtistsImage,
        address: "artists",
        lock : false
    },
    {
        id:3,
        title: "Play List",
        description: "your play list",
        image: PlaylistImage,
        address: "playlist",
        lock : true
      },
  ];

  return (
    <>
      {musicPageItems.map((item) => {
        return (
          <div className={classes.musicPageBox}>
            <Card>
              <CardItem key={item.id} {...item}/>
            </Card>
          </div>
        );
      })}
    </>
  );
};
export default MusicPage;
