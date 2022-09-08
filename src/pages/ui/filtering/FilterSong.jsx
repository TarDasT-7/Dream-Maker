import { useState, useRef, useEffect } from "react";

import classes from "./FilterSong.module.scss";

const FilterSong = (props) => {
  const [openSearchBox, setOpenSearchBox] = useState(false);

  const prevFiltering = props.prevFilter;

  const [artistName, setArtistName] = useState(prevFiltering.search);
  const [sortStatus, setSortStatus] = useState(prevFiltering.sort);
  const [sortGender, setSortGender] = useState(prevFiltering.gender);

  const itemFound = props.counter;

  const searchChangeHandler = (event) => {
    setArtistName(event.target.value);
  };

  const cangeSortStatus = (event) => {
    setSortStatus(event.target.value);
  };

  const cangeGenderStatus = (event) => {
    setSortGender(event.target.value);
  };

  const clearHandler = () => {
    setArtistName("");
    setSortStatus("asc");
    setSortGender("both");
  };

  useEffect(() => {
    if(props.WhatShouldILookFor === "ProductsPlease")
    {
      props.onFiltering(sortStatus, artistName, sortGender);
    }else
    {
      props.onFiltering(sortStatus, artistName);
    }
  }, [sortStatus, artistName, sortGender]);

  const showHandler = () => {
    setOpenSearchBox(!openSearchBox);
  };

  return (
    <div>
      {!openSearchBox && (
        <div className={classes.showFiltering} onClick={showHandler}>
          <p>searchbox</p>
        </div>
      )}

      {openSearchBox && (
        <div className={classes.filternig}>
          <div className={classes.searchBoxHeader}>
            <div className={classes.closedSearchBox} onClick={showHandler}>
              Close
            </div>
            <div className={classes.clearSearchBox} onClick={clearHandler}>
              clear
            </div>
            <div className={classes.findItems}>items : {itemFound}</div>
          </div>

          <div className={classes.searchbox}>
            <input
              type={props.WhatShouldILookFor === "ProductsPlease"? 'number' : 'text'}
              placeholder={props.placeholder}
              onChange={searchChangeHandler}
              value={artistName}
              name="searching"
            />
          </div>
          {props.WhatShouldILookFor === "ProductsPlease" && (
            <div className={classes.selection}>
              <select
                onChange={cangeGenderStatus}
                value={sortGender}
                name="gender"
              >
                <option value="both">Gender : Both</option>
                <option value="man">Gender : Man</option>
                <option value="woman">Gender : Woman</option>
              </select>
            </div>
          )}
          <div className={classes.selection}>
            <select
              onChange={cangeSortStatus}
              value={sortStatus}
              name="sorting"
            >
              <option value="asc">Sort : Most Recent</option>
              <option value="desc">Sort : Oldest</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSong;
