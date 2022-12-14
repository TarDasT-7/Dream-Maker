import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./ClouthCard-item.module.scss";

const ClouthCardItem = (props) => {
  const findItem = props.id === undefined ? false : true;
  const parentComponent =
    props.parentComponent === undefined ? false : props.parentComponent;

  const img =
    props.id === undefined
      ? process.env.PUBLIC_URL + `/images/errors/404.jpg`
      : process.env.PUBLIC_URL + `/images/${props.image}`;

  const newHref = !parentComponent ? props.href : "" + props.id;


  return (
    <Fragment>
      {findItem && (
        <Link to={newHref}>
          <div className={classes.cardItem}>
            <div
              className={`${classes.cardItemImage}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>

            {parentComponent && parentComponent === "clouth" && (
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
                  <span> Price : {props.price.toFixed(2)}$</span>
                  <span>Product Code : {props.productCode}</span>
                  <span
                    className={`${
                      props.quantity > 0 ? classes.stock : classes.unavailable
                    }`}
                  >
                    Status :
                    {props.quantity > 0 ? "Stock" : "Unavailable"}
                  </span>
                </div>
              </>
            )}

            {parentComponent ||
              (parentComponent !== "clouth" && (
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

export default ClouthCardItem;
