import { useState, useEffect } from "react";

import SongCard from "../../ui/card/SongCard";
import SongCardItem from "../../ui/card/SongCard-item";
import FilterSong from "../../ui/filtering/FilterSong";

import classes from "./Song.module.scss";

import { MusicsData } from "../../../components/data/tracksData";

const Song = (props) => {
  const [newSongsItems, setSongItems] = useState(MusicsData);
  const [filterParamets, setFilterParametrs] = useState({
    sort: "asc",
    search: "",
  });
  const filterArray = [];

  const filteringHanler = (selection, input) => {
    setFilterParametrs({ sort: selection, search: input });
    const trackSorteed =
      selection === "asc"
        ? MusicsData.sort((a, b) => a.id - b.id)
        : MusicsData.sort((a, b) => b.id - a.id);
    if (input.length > 0) {
      trackSorteed.map((sortTrack) => {
        return sortTrack.artists.filter((artist) => {
          if (artist.name.toLowerCase().includes(input)) {
            if (
              !filterArray.find((filterItem) => filterItem.id === sortTrack.id)
            ) {
              filterArray.push(sortTrack);
            }
          }
        });
      });
      setSongItems(filterArray);
    } else {
      setSongItems(trackSorteed);
    }
  };
  return (
    <>
      <FilterSong onFiltering={filteringHanler} prevFilter={filterParamets} />
      {newSongsItems.map((item) => {
        return (
          <div key={item.id}  className={classes.songsPageBox}>
            <SongCard >
              <SongCardItem {...item} />
            </SongCard>
          </div>
        );
      })}

      {newSongsItems.length == 0 && (
        <div className={classes.songsPageBox}>
          <SongCard>
            <SongCardItem />
          </SongCard>
        </div>
      )}
    </>
  );
};

export default Song;
