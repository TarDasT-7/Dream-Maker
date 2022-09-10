import { useState } from "react";
import Card from "../../ui/card/Card";
import ClouthCardItem from "../../ui/clouthCard/ClouthCard-item";

import { useParams } from "react-router-dom";

import classes from "./Product.module.scss";
import { clouthData } from "../../../components/data/clouthData";
import FilterSong from "../../ui/filtering/FilterSong";

const Product = () => {
  const [filterParamets, setFilterParametrs] = useState({
    sort: "asc",
    gender: "both",
    search: "",
  });

  const kind = useParams().productTitle;
  const clouth = clouthData.find((clouth) => clouth.title === kind);
  const products = clouth.products;
  const [newProductItems, setProductItems] = useState(products);

  const filteringHanler = (selection, input, gender) => {
    setFilterParametrs({ sort: selection, search: input, gender: gender });
    let data = [];
    let filterd = [];

    const productSorteed =
      selection === "asc"
        ? products.sort((a, b) => a.id - b.id)
        : products.sort((a, b) => b.id - a.id);
        filterd = productSorteed;

    if (input.length > 0) {
      filterd.filter((sortProduct) => {
        if (sortProduct.productCode.includes(parseInt(input))) {
          data.push(sortProduct);
        }
      });
      filterd = data;
      data =[];
    }
    console.log(filterd);


    if (gender !== "both") {
      filterd.filter((product) => {
        if (product.gender === gender) {
          data.push(product);
        }
      });
      filterd = data;
    }
    setProductItems(filterd);

  };

  return (
    <>
      <FilterSong
        onFiltering={filteringHanler}
        prevFilter={filterParamets}
        counter={newProductItems.length}
        placeholder="Product Code... (Only Number)"
        WhatShouldILookFor="ProductsPlease"
      />
      {newProductItems.map((item) => {
        return (
          <div key={item.id} className={classes.songsPageBox}>
            <Card>
              <ClouthCardItem
                parentComponent="clouth"
                href="soon..."
                {...item}
              />
            </Card>
          </div>
        );
      })}

      {newProductItems.length == 0 && (
        <div className={classes.songsPageBox}>
          <Card>
            <ClouthCardItem />
          </Card>
        </div>
      )}
    </>
  );
};

export default Product;
