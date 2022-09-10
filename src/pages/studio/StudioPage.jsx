import classes from "./StudioPage.module.scss";

import Card from "../ui/card/Card";
import CardItem from "../ui/card/Card-item";

import { StudioData } from "../../components/data/studiosData";

const studioPageItems = StudioData;

const StudioPage = () => {
  return (
    <>
      {studioPageItems.map((item) => {
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
export default StudioPage;
