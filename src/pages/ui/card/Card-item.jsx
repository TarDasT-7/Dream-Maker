import { Link } from 'react-router-dom';

import classes from './Card-item.module.scss';

const CardItem = (props) => {

    
    const parentComponent = props.parentComponent === undefined ? false : props.parentComponent ;
    
    const img = process.env.PUBLIC_URL + `/images/${props.image}`;
    const newHref = !parentComponent ? props.href : ''+props.id;
  
    return (
        <Link to={newHref}>

            <div  className={classes.cardItem} >

                <div className={`${classes.cardItemImage} ${props.lock ? classes.lockCard : classes.cardItemImageHover}`}
                     style={{ backgroundImage: `url(${img})`}}></div>

                {parentComponent && parentComponent === 'artist' &&
                    <>
                        <div className={`${classes.cardReadDescription}`}>
                            <span>
                                <h1>{props.title}</h1>
                                <p>
                                    {props.description.length > 450 && props.description.substring(0,450)} ...
                                    {props.description.length <= 450 && props.description}
                                </p>
                            </span>
                        </div>

                        <div className={classes.cardItemDescriptionSecond}>
                            <h1>{props.title}</h1>
                        </div>

                    </>
                }

                {parentComponent || parentComponent !== 'artist' &&
                    <div className={classes.cardItemDescription}>
                        <h1>{props.title} {props.lock &&  <span className={classes.lockLogIn}>( pleases Login  )</span> }</h1>
                        <p>{props.description}</p>

                    </div>
                }


            </div>
        </Link>
    );

};

export default CardItem;