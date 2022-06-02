import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const { loading } = useFetchGifs();

  // useEffect(() => {
  //   getGifs(category).then((imgs) => {
  //     setImages(imgs);
  //   });
  // }, [category]);

  return (
    <>
      <h3>{category}</h3>
      {/* <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem {...img} key={img.id} />;
        })}
      </div> */}
      {loading ? "CARGANDO..." : "Data cargada"}
    </>
  );
};
