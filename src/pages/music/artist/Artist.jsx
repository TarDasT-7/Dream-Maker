import Card from "../../ui/card/Card";
import CardItem from "../../ui/card/Card-item";

import classes from "./Artist.module.scss";

import { ArtistsData } from "../../../components/data/atristsData";


const Artist = (props) => {

  return (
    <>
      {ArtistsData.map((item) => {
        return (
          <div className={classes.artistsPageBox}>
            <Card>
              <CardItem parentComponent="artist" key={item.id} {...item} />
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default Artist;
