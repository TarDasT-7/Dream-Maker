import classes from "./MusicPage.module.scss";


import Card from "../ui/card/Card";
import CardItem from "../ui/card/Card-item";
import { Fragment } from "react";

const musicPageItems = [
  {
      id:1,
      title: "Songs",
      description: "top hip hop music for play or download...",
      image: "musicPage/songs.jpg",
      address: "songs",
      lock : false
  },
  {
      id:2,
      title: "Artists",
      description: "best hip hop singer",
      image: "musicPage/artist.jpg",
      address: "artists",
      lock : false
  },
  {
      id:3,
      title: "Play List",
      description: "your play list",
      image: "musicPage/playlist.jpg",
      address: "playlist",
      lock : true
    },
];
const MusicPage = () => {

  return (
    <Fragment>
      {musicPageItems.map((item) => {
        return (
          <div key={item.id} className={classes.musicPageBox}>
            <Card>
              <CardItem {...item}/>
            </Card>
          </div>
        );
      })}
    </Fragment>
  );
};
export default MusicPage;
