import React, { useState } from "react";

export default function ToDoList() {
  const [items, setItems] = useState([]);
  const [indexToUpdate, setIndexToUpdate] = useState(null);
  const [createNew, toggleCreateNew] = useState(false);

  const createItem = (event) => {
    const value = event.target.value.trim();
    if (value) {
      items.push(value);
      setItems(items);
    }
    toggleCreateNew(false);
  };

  const updateItem = (event, index) => {
    const value = event.target.value.trim();
    if (value) items[index] = value;
    else items.splice(index, 1);
    setItems([...items]);
    setIndexToUpdate(null);
  };

  return (
    <ol>
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {indexToUpdate === index ? (
              <input
                type="text"
                defaultValue={item}
                autoFocus
                onBlur={(event) => updateItem(event, index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") updateItem(event, index);
                }}
              />
            ) : (
              <li value={index + 1}>{item}</li>
            )}
            <button onClick={() => setIndexToUpdate(index)}>Update</button>
            <button
              onClick={() => {
                items.splice(index, 1);
                setItems([...items]);
              }}
            >
              Delete
            </button>
            {index > 0 ? (
              <button
                onClick={() => {
                  const temp = items[index - 1];
                  items[index - 1] = items[index];
                  items[index] = temp;
                  setItems([...items]);
                }}
              >
                Up
              </button>
            ) : null}
            {index < items.length - 1 ? (
              <button
                onClick={() => {
                  const temp = items[index + 1];
                  items[index + 1] = items[index];
                  items[index] = temp;
                  setItems([...items]);
                }}
              >
                Down
              </button>
            ) : null}
          </React.Fragment>
        );
      })}
      {createNew ? (
        <input
          type="text"
          autoFocus
          onBlur={createItem}
          onKeyDown={(event) => {
            if (event.key === "Enter") createItem(event);
          }}
        />
      ) : null}
      <button onClick={() => toggleCreateNew(true)}>Create</button>
    </ol>
  );
}
