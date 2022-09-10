import classes from "./TattoPage.module.scss";

import Card from "../ui/card/Card";
import CardItem from "../ui/card/Card-item";
import {tattooPageData } from "../../components/data/tattoData";

const TattoPage = () => {
  return (
    <>
      {tattooPageData.map((item) => {
        return (
          <div className={classes.tattoPageBox}>
            <Card>
              <CardItem key={item.id} {...item} />
            </Card>
          </div>
        );
      })}
    </>
  );
};
export default TattoPage;
