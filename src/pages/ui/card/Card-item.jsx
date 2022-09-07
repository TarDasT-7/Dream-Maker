import { Link } from 'react-router-dom';

import classes from './Card-item.module.scss';

const CardItem = (props) => {

    const img = process.env.PUBLIC_URL + `/images/${props.image}`;

    return (
        <Link to={props.address}>

            <div  className={classes.cardItem} >

                <div className={`${classes.cardItemImage} ${props.lock ? classes.lockCard : classes.cardItemImageHover}`}
                     style={{ backgroundImage: `url(${img})`}}></div>

                <div className={classes.cardItemDescription}>
                    <h1>{props.title} {props.lock &&  <span className={classes.lockLogIn}>( pleases <Link to="/">login</Link> )</span> }</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </Link>
    );

};

export default CardItem;