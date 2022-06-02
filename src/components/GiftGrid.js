import React from "react";

export const GiftGrid = ({ category }) => {
  const getGifts = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=eEd4krAqJZ23iLbpHHSaSoGcOdfWnrnA";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  };

  getGifts();

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
