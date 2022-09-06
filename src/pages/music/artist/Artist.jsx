import Card from "../../ui/card/Card";
import CardItem from "../../ui/card/Card-item";

import classes from "./Artist.module.scss";


const musicPageItems = [
  {
    
    id: 1,
    title: "Eminem",
    description: "some text about this artist for test... some text about this artist for test... some text about this artist for test... some text about this artist for test... some text about this artist for test... this artist for test... this artist for test...this artist for test... please smile :) ",
    image: require('../../../assets/media/images/artists/eminem.jpg'),
    address: "songs",
    lock: false,
  },
  {
    
    id: 2,
    title: "Nicki Minaj",
    description: "some text about this artist for test... this artist for test... this artist for test...this artist for test... please smile :)",
    image: require('../../../assets/media/images/artists/nikiminaje.jpg'),
    address: "songs",
    lock: false,
  },
  {
    
    id: 3,
    title: "50 Cent",
    description: "some text about this artist for test... this artist for test... this artist for test...this artist for test... please smile :)",
    image: require('../../../assets/media/images/artists/50cent.jpg'),
    address: "songs",
    lock: false,
  },
  {
    
    id: 4,
    title: "Drake",
    description: "some text about this artist for test... this artist for test... this artist for test...this artist for test... please smile :)",
    image: require('../../../assets/media/images/artists/drake.jpg'),
    address: "songs",
    lock: false,
  },
  {
    
    id: 5,
    title: "Billie",
    description: "some text about this artist for test... this artist for test... this artist for test...this artist for test... please smile :)",
    image: require('../../../assets/media/images/artists/billie.jpg'),
    address: "songs",
    lock: false,
  },
  {
    id: 6,
    title: "NF",
    description: "some text about this artist for test... this artist for test... this artist for test...this artist for test... please smile :)",
    image: require('../../../assets/media/images/artists/nf.jpg'),
    address: "artists",
    lock: false,
  },
  {
    id: 7,
    title: "Lil Baby",
    description: "some text about this artist for test... this artist for test... this artist for test...this artist for test... please smile :)",
    image: require('../../../assets/media/images/artists/lilbaby.jpeg'),
    address: "playlist",
    lock: false,
  },
  {
    id: 8,
    title: "Adele",
    description: "some text about this artist for test... this artist for test... this artist for test...this artist for test... please smile :)",
    image: require('../../../assets/media/images/artists/adele.jpg'),
    address: "playlist",
    lock: false,
  },
  {
    id: 9,
    title: "Akon",
    description: "some text about this artist for test... this artist for test... this artist for test...this artist for test... please smile :)",
    image: require('../../../assets/media/images/artists/akon.jpg'),
    address: "playlist",
    lock: false,
  },
  {
    id: 10,
    title: "Snoop Dogg",
    description: "some text about this artist for test... this artist for test... this artist for test...this artist for test... please smile :)",
    image: require('../../../assets/media/images/artists/snoopdogg.png'),
    address: "playlist",
    lock: false,
  },
  {
    id: 11,
    title: "Reza Pishro",
    description: "some text about this artist for test... this artist for test... this artist for test...this artist for test... please smile :)",
    image: require('../../../assets/media/images/artists/pishro.jpg'),
    address: "playlist",
    lock: false,
  },
  {
    id: 12,
    title: "Hosein Eblis",
    description: "some text about this artist for test... this artist for test... this artist for test...this artist for test... please smile :)",
    image: require('../../../assets/media/images/artists/ho3in.jpeg'),
    address: "playlist",
    lock: false,
  },
];

const Artist = () => {
  return (
    <>
      {musicPageItems.map((item) => {
        return (
          <div className={classes.artistsPageBox}>
            <Card>
              <CardItem key={item.id} {...item} />
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default Artist;
