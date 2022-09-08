import classes from "./ClouthPage.module.scss";

import Card from "../ui/card/Card";
import CardItem from "../ui/card/Card-item";

import { clouthData } from "../../components/data/clouthData";

const ClouthPage = () => {
  return (
    <>
      {clouthData.map((item) => {
        return (
          <div className={classes.clouthPageBox}>
            <Card>
              <CardItem key={item.id} {...item} />
            </Card>
          </div>
        );
      })}
    </>
  );
};
export default ClouthPage;
