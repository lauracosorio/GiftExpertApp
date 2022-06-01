import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball"
  ]);

  // const handleAdd = () => {
  //   setCategories([...categories, "hunter"]);
  // };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory />
      <hr />
      {/* <button onClick={handleAdd}> Agregar </button> */}
      <ol>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ol>
    </>
  );
};
