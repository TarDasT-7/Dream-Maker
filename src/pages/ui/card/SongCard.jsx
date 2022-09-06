
import classes from './SongCard.module.scss';

const SongCard = (props) => (

    <div className={classes.card}> 
        {props.children}
    </div>

);

export default SongCard;