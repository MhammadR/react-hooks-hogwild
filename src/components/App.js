import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import TilesContainer from "./TilesContainer";
import Options from "./Options";

function App() {
  const [hogsData, setHogsData] = useState(hogs);
  const [isGreased, setIsGreased] = useState(false);
  const [sortBy, setSortBy] = useState("Sort By Name");
  const [isHidden, setIsHidden] = useState(false);

  function toggleIsGreased() {
    setIsGreased((prev) => !prev);
  }

  function handleSort(event) {
    const value = event.target.value;
    setSortBy(() => value);
    setHogsData((prev) =>
      prev.sort((a, b) =>
        value === "Sort By Name"
          ? a.name > b.name
            ? 1
            : a.name < b.name
            ? -1
            : 0
          : a.weight - b.weight
      )
    );
  }

  function handleIsHidden() {
    setIsHidden((prev) => !prev);
  }

  return (
    <div className="App">
      <Nav />
      <Options
        isGreased={isGreased}
        onToggleIsGreased={toggleIsGreased}
        sortBy={sortBy}
        onSort={handleSort}
        isHidden={isHidden}
        onToggleIsHidde={handleIsHidden}
      />
      <br />
      <TilesContainer
        hogs={hogsData}
        isGreased={isGreased}
        isHidden={isHidden}
      />
    </div>
  );
}

export default App;
