import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./Card-item.module.scss";

const CardItem = (props) => {
  const findItem = props.id === undefined ? false : true;
  const parentComponent =
    props.parentComponent === undefined ? false : props.parentComponent;

  const img =
    props.id === undefined
      ? process.env.PUBLIC_URL + `/images/errors/404.jpg`
      : process.env.PUBLIC_URL + `/images/${props.image}`;

  // const img ='https://i.pinimg.com/736x/b1/03/e5/b103e5fa9eaf4a0eaba2c19a796d7b62.jpg';



  const newHref = !parentComponent ? props.href : "" + props.id;

  return (
    <Fragment>
      {findItem && (
        <Link to={newHref}>
          <div className={classes.cardItem}>
            <div
              className={`${classes.cardItemImage} ${
                props.lock ? classes.lockCard : classes.cardItemImageHover
              }`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>

            {parentComponent && parentComponent === "artist" && (
              <>
                <div className={`${classes.cardReadDescription}`}>
                  <span>
                    <h1>{props.title}</h1>
                    <p>
                      {props.description.length > 450 &&
                        props.description.substring(0, 450)}{" "}
                      ...
                      {props.description.length <= 450 && props.description}
                    </p>
                  </span>
                </div>

                <div className={classes.cardItemDescriptionSecond}>
                  <h1>{props.title}</h1>
                </div>
              </>
            )}

            {parentComponent ||
              (parentComponent !== "artist" && (
                <div className={classes.cardItemDescription}>
                  <h1>
                    {props.title}{" "}
                    {props.lock && (
                      <span className={classes.lockLogIn}>
                        ( pleases Login )
                      </span>
                    )}
                  </h1>
                  <p>{props.description}</p>
                </div>
              ))}
          </div>
        </Link>
      )}

      {!findItem && (
        <div className={classes.cardItem}>
            <div
            className={`${classes.cardItemImage}`}
            style={{ backgroundImage: `url(${img})` }}
            ></div>

            {parentComponent && parentComponent === "artist" && (
            <>
                <div className={`${classes.cardReadDescription}`}>
                <span>
                    <h1>Not Found :(</h1>
                </span>
                </div>

                <div className={classes.cardItemDescriptionSecond}>
                <h1>Not Found</h1>
                </div>
            </>
            )}

            {parentComponent ||
            (parentComponent !== "artist" && (
                <div className={classes.cardItemDescription}>
                    <h1>Not Found</h1>
                </div>
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default CardItem;
