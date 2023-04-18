import React, { useState } from "react";

export default function ToDoList({ items, setItems }) {
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
    <table className="center">
      <thead>
        <tr>
          <th>Index</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <div className="task">
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
                  item
                )}
              </div>
              <button
                className="button"
                onClick={() => setIndexToUpdate(index)}
              >
                Update
              </button>
              <button
                className="button"
                onClick={() => {
                  items.splice(index, 1);
                  setItems([...items]);
                }}
              >
                Delete
              </button>
              {index > 0 && (
                <button
                  className="button"
                  onClick={() => {
                    const temp = items[index - 1];
                    items[index - 1] = items[index];
                    items[index] = temp;
                    setItems([...items]);
                  }}
                >
                  Up
                </button>
              )}
              {index < items.length - 1 && (
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
              )}
            </td>
          </tr>
        ))}
        <tr>
          <td>∞</td>
          <td>
            {createNew ? (
              <input
                type="text"
                autoFocus
                onBlur={createItem}
                onKeyDown={(event) => {
                  if (event.key === "Enter") createItem(event);
                }}
              />
            ) : (
              <button onClick={() => toggleCreateNew(true)}>
                Create New Task
              </button>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
