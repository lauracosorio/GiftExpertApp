import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  console.log(id);

  return (
    <div className="card animate_animated animate__fadeIn ">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
