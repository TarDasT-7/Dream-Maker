import { useState, useRef, useEffect } from 'react';

import classes from './FilterSong.module.scss';

const FilterSong = (props) => {

    const name = useRef();
    let sort = 'asc';
    

    const filteringHandler = () => {
        const artistName = name.current.value;
        props.onFiltering(sort, artistName.trim());
    };

    const cangeSortStatus = (event) => {
        sort = event.target.value;
        filteringHandler();
    };

    


    return(
        <div className={classes.filternig}>
            <div className={classes.searchbox}>
                <input type="text" placeholder='Artist Name...' ref={name} onChange={filteringHandler} name="searching" />
            </div>
            <div className={classes.selection}>
                <select onChange={cangeSortStatus} name="sorting">
                    <option value="asc">Sort : Most Recent</option>
                    <option value="desc">Sort : Oldest</option>
                </select>
            </div>


        </div>
    );
};

export default FilterSong;