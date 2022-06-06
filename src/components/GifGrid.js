import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  const { data: images, loading } = useFetchGifs(category);

  // useEffect(() => {
  //   getGifs(category).then((imgs) => {
  //     setImages(imgs);
  //   });
  // }, [category]);

  return (
    <>
      <h3 className="animate_animated animate__fadeIn">{category}</h3>

      {loading && (
        <p className="animate__animated animate__flash">Cargando...</p>
      )}

      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem {...img} key={img.id} />;
        })}
      </div>
    </>
  );
};
