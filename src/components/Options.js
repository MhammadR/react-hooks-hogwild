import React from "react";

function Options({
  isGreased,
  onToggleIsGreased,
  sortBy,
  onSort,
  isHidden,
  onToggleIsHidde,
}) {
  return (
    <div>
      <button onClick={onToggleIsGreased}>
        {isGreased ? "Show All" : "Show Greased Hogs"}
      </button>
      <select value={sortBy} onChange={onSort}>
        <option>Sort By Name</option>
        <option>Sort By Weight</option>
      </select>
      <button onClick={onToggleIsHidde}>
        {isHidden ? "Show Hogs" : "Hide Hogs"}
      </button>
    </div>
  );
}

export default Options;
