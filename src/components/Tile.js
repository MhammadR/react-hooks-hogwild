import React, { useState } from "react";

function Tile({ hogs }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleCardClick() {
    setIsClicked((prev) => !prev);
  }

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="image" href="#">
        <img src={hogs.image} />
      </div>
      <div className="content">
        <div className="header">{hogs.name}</div>
      </div>
      {isClicked ? (
        <div className="content">
          <h4 className="ui sub header">{hogs["highest medal achieved"]}</h4>
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary">
                  <a>Weight: </a>
                  {hogs.weight}
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                  <a>Greased: </a>
                  {hogs.greased ? "True" : "False"}
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                  <a>Speciality: </a>
                  {hogs.specialty}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Tile;
