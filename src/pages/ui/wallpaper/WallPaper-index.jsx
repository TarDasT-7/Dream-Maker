import classes from './WallPaper-index.module.scss';

import MyImage from '../../../assets/media/images/homePageWallpaper/3.jpg';

const WallPaperIndex = (props) => (
    <div style={{ backgroundImage: `url(${MyImage})`}} className={classes.wallpaper}> 
        {props.children}
    </div>

);

export default WallPaperIndex;