import classes from "./TattooStudio.module.scss";

import Card from "../../ui/card/Card";
import CardItem from "../../ui/card/Card-item";

import { TattoStudio } from "../../../components/data/tattoData";


const TattooStudio = () => {
  return (
    <>
      {TattoStudio.map((item) => {
        return (
          <div className={classes.studioPageBox}>
            <Card>
              <CardItem key={item.id} {...item} />
            </Card>
          </div>
        );
      })}
    </>
  );
};
export default TattooStudio;
