import classes from "./ClouthPage.module.scss";

import Card from "../ui/card/Card";
import CardItem from "../ui/card/Card-item";

import tShirt from "../../assets/media/images/clouthPage/tShirt.jpg";
import pants from "../../assets/media/images/clouthPage/pants.jpg";
import cap from "../../assets/media/images/clouthPage/cap.jpeg";
import accessorie from "../../assets/media/images/clouthPage/neckles.jpg";
import shoes from "../../assets/media/images/clouthPage/shoes.jpg";
import cart from "../../assets/media/images/clouthPage/cart.jpeg";

const coutePageItems = [
  {
    id: 1,
    title: "T-Shirts",
    description: "top hip-hop t-shirt for man and woman",
    image: tShirt,
    href: "tshirts",
    lock: false,
  },
  {
    id: 2,
    title: "Pants",
    description: "top hip-hop pants for man and woman",
    image: pants,
    href: "pants",
    lock: false,
  },
  {
    id: 3,
    title: "Cap",
    description: "cap",
    image: cap,
    href: "caps",
    lock: false,
  },
  {
    id: 4,
    title: "Accessories",
    description: "accessories",
    image: accessorie,
    href: "accessories",
    lock: false,
  },
  {
    id: 5,
    title: "Shoes",
    description: "hip hop shoes",
    image: shoes,
    href: "shoes",
    lock: false,
  },
  {
    id: 6,
    title: "Cart",
    description: "your cart",
    image: cart,
    href: "playlist",
    lock: true,
  },
];

const ClouthPage = () => {
  return (
    <>
      {coutePageItems.map((item) => {
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
