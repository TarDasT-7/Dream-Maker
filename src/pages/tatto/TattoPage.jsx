import classes from "./TattoPage.module.scss";

import Card from "../ui/card/Card";
import CardItem from "../ui/card/Card-item";

const tattoPageItems = [
  {
    id: 1,
    title: "T-Shirts",
    description: "top hip-hop t-shirt for man and woman",
    image: 'https://idea4tattoo.com/orig/0/80/802/8024/idea4tattoo.com_floral-tattoos-tattoo-ideas-dark-tattoos-802445.jpg',
    address: "tshirts",
    lock: false,
  },
  {
    id: 2,
    title: "Pants",
    description: "top hip-hop pants for man and woman",
    image: 'https://64.media.tumblr.com/6ddede76ab2b3aacb4ce6634159b67c9/tumblr_ol5orh6Xad1su7hvmo1_1280.jpg',
    address: "pants",
    lock: false,
  },
  {
    id: 3,
    title: "Cap",
    description: "cap",
    image: 'https://tattoosboygirl.com/wp-content/uploads/2019/01/two-face-snake-tattoos-on-arm.jpg',
    address: "caps",
    lock: false,
  },
  {
    id: 4,
    title: "Accessories",
    description: "accessories",
    image: 'https://preview.redd.it/vqlu3v3aa1e71.jpg?width=640&crop=smart&auto=webp&s=9631208c173421a16ceac76fb2c1b360d4d2586e',
    address: "accessories",
    lock: false,
  },
  {
    id: 5,
    title: "Shoes",
    description: "hip hop shoes",
    image: 'https://i.pinimg.com/originals/0f/f8/a8/0ff8a8517546f224dab53eb837d5df0c.jpg',
    address: "shoes",
    lock: false,
  },
  {
    id: 6,
    title: "Cart",
    description: "your cart",
    image: 'https://i.pinimg.com/736x/b1/03/e5/b103e5fa9eaf4a0eaba2c19a796d7b62.jpg',
    address: "playlist",
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
