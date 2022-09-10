import { useState, useEffect } from "react";

import SongCard from "../../ui/card/SongCard";
import SongCardItem from "../../ui/card/SongCard-item";
import FilterSong from "../../ui/filtering/FilterSong";

import classes from "./TattooIdea.module.scss";
import { TattooIdeaData } from "../../../components/data/tattoData";

const TattooIdea = (props) => {
  const [newIdeaItems, setIdeaItems] = useState(TattooIdeaData);
  const [filterParamets, setFilterParametrs] = useState({
    sort: "asc",
    search: "",
  });
  const filterArray = [];

  const filteringHanler = (selection, input) => {
    setFilterParametrs({ sort: selection, search: input });
    const ideaSorteed =
      selection === "asc"
        ? TattooIdeaData.sort((a, b) => a.id - b.id)
        : TattooIdeaData.sort((a, b) => b.id - a.id);
    if (input.length > 0) {
      ideaSorteed.map((sortIdea) => {
        if (sortIdea.title.includes(input)) {
          if (
            !filterArray.find((filterItem) => filterItem.id === sortIdea.id)
          ) {
            filterArray.push(sortIdea);
          }
        }
      });
      setIdeaItems(filterArray);
    } else {
      setIdeaItems(ideaSorteed);
    }
  };
  return (
    <>
      <FilterSong
        onFiltering={filteringHanler}
        prevFilter={filterParamets}
        counter={newIdeaItems.length}
        placeholder="Tattoo Idea Code..."
        WhatShouldILookFor="TattooIdeaPlease"
      />
      {newIdeaItems.map((item) => {
        return (
          <div key={item.id} className={classes.songsPageBox}>
            <SongCard>
              <SongCardItem parentComponent="tattooIdea" {...item} />
            </SongCard>
          </div>
        );
      })}

      {newIdeaItems.length == 0 && (
        <div className={classes.songsPageBox}>
          <SongCard>
            <SongCardItem />
          </SongCard>
        </div>
      )}
    </>
  );
};

export default TattooIdea;
