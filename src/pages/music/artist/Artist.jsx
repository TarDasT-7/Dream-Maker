import Card from "../../ui/card/Card";
import CardItem from "../../ui/card/Card-item";
import { ArtistsData } from "../../../components/data/atristsData";
import FilterSong from "../../ui/filtering/FilterSong";

import classes from "./Artist.module.scss";
import { useState } from "react";

const Artist = (props) => {
  const [newArtistsItems, setArtistsItems] = useState(ArtistsData);
  const [filterParamets, setFilterParametrs] = useState({
    sort: "asc",
    search: "",
  });
  const filterArray = [];

  const filteringHanler = (selection, input) => {
    setFilterParametrs({ sort: selection, search: input });
    const artistsSorteed =
      selection === "asc"
        ? ArtistsData.sort((a, b) => a.id - b.id)
        : ArtistsData.sort((a, b) => b.id - a.id);

    if (input.length > 0) {
      artistsSorteed.filter((sortArtist) => {
        if (sortArtist.title.toLowerCase().includes(input.toLowerCase())) {
          filterArray.push(sortArtist);
        }
      });

      setArtistsItems(filterArray);
    } else {
      setArtistsItems(artistsSorteed);
    }
  };

  return (
    <>
      <FilterSong
        onFiltering={filteringHanler}
        prevFilter={filterParamets}
        counter={newArtistsItems.length}
      />
      {newArtistsItems.length > 0 &&
        newArtistsItems.map((item) => {
          return (
            <div className={classes.artistsPageBox}>
              <Card>
                <CardItem parentComponent="artist" key={item.id} {...item} />
              </Card>
            </div>
          );
        })}

      {newArtistsItems.length == 0 && (
        <div className={classes.artistsPageBox}>
          <Card>
            <CardItem parentComponent="artist" key={'404NotFound'} />
          </Card>
        </div>
      )}
    </>
  );
};

export default Artist;
