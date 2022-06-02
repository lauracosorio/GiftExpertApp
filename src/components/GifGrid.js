import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=12&api_key=eEd4krAqJZ23iLbpHHSaSoGcOdfWnrnA";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      };
    });

    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem {...img} key={img.id} />;
        })}
      </div>
    </>
  );
};
