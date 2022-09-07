import classes from "./TattoPage.module.scss";

import Card from "../ui/card/Card";
import CardItem from "../ui/card/Card-item";

const tattoPageItems = [
  {
    id: 1,
    title: "Title",
    description: "some text ... for test",
    image: 'https://idea4tattoo.com/orig/0/80/802/8024/idea4tattoo.com_floral-tattoos-tattoo-ideas-dark-tattoos-802445.jpg',
    href: "tshirts",
    lock: false,
  },
  {
    id: 2,
    title: "Title",
    description: "some text ... for test",
    image: 'https://64.media.tumblr.com/6ddede76ab2b3aacb4ce6634159b67c9/tumblr_ol5orh6Xad1su7hvmo1_1280.jpg',
    href: "pants",
    lock: false,
  },
  {
    id: 3,
    title: "Title",
    description: "some text ... for test",
    image: 'https://tattoosboygirl.com/wp-content/uploads/2019/01/two-face-snake-tattoos-on-arm.jpg',
    href: "caps",
    lock: false,
  },
  {
    id: 4,
    title: "Title",
    description: "some text ... for test",
    image: 'https://preview.redd.it/vqlu3v3aa1e71.jpg?width=640&crop=smart&auto=webp&s=9631208c173421a16ceac76fb2c1b360d4d2586e',
    href: "accessories",
    lock: false,
  },
  {
    id: 5,
    title: "Title",
    description: "some text ... for test",
    image: 'https://i.pinimg.com/originals/0f/f8/a8/0ff8a8517546f224dab53eb837d5df0c.jpg',
    href: "shoes",
    lock: false,
  },
  {
    id: 6,
    title: "Title",
    description: "some text ... for test",
    image: 'https://i.pinimg.com/736x/b1/03/e5/b103e5fa9eaf4a0eaba2c19a796d7b62.jpg',
    href: "playlist",
    lock: false,
  },
];
const TattoPage = () => {
  return (
    <>
      {tattoPageItems.map((item) => {
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
