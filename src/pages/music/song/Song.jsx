import { useState, useEffect } from "react";

import SongCard from "../../ui/card/SongCard";
import SongCardItem from "../../ui/card/SongCard-item";
import FilterSong from "../../ui/filtering/FilterSong";

import classes from "./Song.module.scss";

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
    address: "artists",
    lock: false,
  },
];
const Song = () => {
    
    const [newSongsItems, setSongItems] = useState(songsItems);
    const [filterChanged, setFilterChanged] = useState(0);
    const filterArray = [];
    
    const filteringHanler = (selection, input) => {

        setFilterChanged(filterChanged+1);

        const trackSorteed = selection === 'asc' ? songsItems.sort((a, b) => a.id - b.id) : songsItems.sort((a, b) => b.id - a.id) ;
        if(input.length > 0)
        {
            trackSorteed.map(sortTrack=> {
                return sortTrack.artists.filter((artist)=> {
                    if(artist.name.toLowerCase().includes(input))
                    {
                        if(!filterArray.find(filterItem=>filterItem.id === sortTrack.id)) {
                            filterArray.push(sortTrack);
                        }
                    }     
                });
            });
            setSongItems(filterArray);   
        }else
        {
            setSongItems(trackSorteed);
        }        
    };

  return (
      <>
      <FilterSong onFiltering={filteringHanler} />
      {newSongsItems.map((item) => {
        return (
          <div className={classes.songsPageBox}>
            <SongCard>
              <SongCardItem key={item.id} {...item} />
            </SongCard>
          </div>
        );
      })}
    </>
  );
};

export default Song;
