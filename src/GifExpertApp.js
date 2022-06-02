import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['sponge bob']);

  // const handleAdd = () => {
  //   setCategories([...categories, "hunter"]);
  // };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}> Agregar </button> */}
      <ol>
        {categories.map((category, index) => {
          return <GifGrid category={category} key={index} />;
        })}
      </ol>
    </>
  );
};
