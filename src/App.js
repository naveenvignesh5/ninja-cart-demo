import React, { useMemo, useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  // NOTE: update your test data here
  const fruitList = useMemo(
    () => [
      "apple",
      "orange",
      "pineapple",
      "strawberry",
      "mango",
      "berry blue berry",
      "apple pine and apple",
    ],
    []
  );

  const handleChange = (e) => {
    setValue(e.target.value);

    if (!e.target.value) {
      setList([]);
      return;
    }

    setList(fruitList.filter((o) => o.indexOf(value) > -1));
  };

  const handleItemClick = (o) => {
    setValue(o);
    setList([]);
  };

  const renderListItem = (o) => {
    const parts = o.split(new RegExp(`(${value})`, "gi"));

    return (
      <span>
        {parts.map((p, i) => (
          <span
            key={`${p}-${i}`}
            className={
              p.toLowerCase() === value.toLowerCase() ? "highlight" : ""
            }
          >
            {p}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="app">
      <h4 className="app__title">
        Ninjacart - Interview - Round 1 - Assignment
      </h4>
      <div className="form-group">
        <label>Search fruit</label>
        <div className="dropdown">
          <input type="text" value={value} onChange={handleChange} />
          {!!list.length && (
            <div className="list">
              {list.map((o) => (
                <button
                  key={o}
                  className="list-item"
                  onClick={() => handleItemClick(o)}
                >
                  {renderListItem(o)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
