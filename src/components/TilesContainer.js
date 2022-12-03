import React from "react";
import Tile from "./Tile";

function TilesContainer({ hogs, isGreased, isHidden }) {
  return (
    <div className={isHidden ? "hide" : "ui link six doubling stackable cards"}>
      {hogs
        .filter((obj) => (isGreased ? obj.greased : true))
        .map((obj) => (
          <Tile key={obj.image} hogs={obj} />
        ))}
    </div>
  );
}

export default TilesContainer;
