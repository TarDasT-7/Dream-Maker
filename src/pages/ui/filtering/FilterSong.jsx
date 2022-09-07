import { useState, useRef, useEffect } from 'react';

import classes from './FilterSong.module.scss';

const FilterSong = (props) => {
    const [openSearchBox, setOpenSearchBox] = useState(false);
    const prevFiltering = props.prevFilter;


    const [artistName, setArtistName] = useState(prevFiltering.search);
    const [sortStatus, setSortStatus] = useState(prevFiltering.sort);
    
    const searchChangeHandler = (event) => {
        setArtistName(event.target.value);
    };
    
    const cangeSortStatus = (event) => {
        setSortStatus(event.target.value);
    };
    
    useEffect(()=>{
        props.onFiltering(sortStatus, artistName);
    }, [sortStatus, artistName])

    const showHandler = () => {
        setOpenSearchBox(!openSearchBox);
    };
    


    return(
        <div>
            {!openSearchBox && 
                <div className={classes.showFiltering} onClick={showHandler}>
                        <p>searchbox</p>
                </div>
            }

            {openSearchBox && 
                <div className={classes.filternig}>

                    <div className={classes.closedSearchBox} onClick={showHandler}>
                        Close
                    </div>
                    
                    <div className={classes.searchbox}>
                        <input  type="text" placeholder='Artist Name...' onChange={searchChangeHandler} value={artistName} name="searching" />
                    </div>
                    <div className={classes.selection}>
                        <select onChange={cangeSortStatus} value={sortStatus}  name="sorting">
                            <option value="asc">Sort : Most Recent</option>
                            <option value="desc">Sort : Oldest</option>
                        </select>
                    </div>


                </div>
            }

        </div>
        
    );
};

export default FilterSong;