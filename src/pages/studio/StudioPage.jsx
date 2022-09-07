import classes from "./StudioPage.module.scss";

import Card from "../ui/card/Card";
import CardItem from "../ui/card/Card-item";

import beatImage from "../../assets/media/images/studioPage/beat.jpg";
import recordImage from "../../assets/media/images/studioPage/recorder.jpg";


const studioPageItems = [
  {
    id: 1,
    title: "Dream Maker Club",
    description: "Beat, Recording, cover, mix & master and...",
    image: beatImage,
    href: "1",
    lock: false,
  },
  {
    id: 2,
    title: "Dark Studio",
    description: "Recording, mix & master",
    image: recordImage,
    href: "2",
    lock: false,
  },

];

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
