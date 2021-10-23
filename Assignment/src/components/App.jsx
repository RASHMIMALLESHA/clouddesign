import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setitems] = useState([]);
  // inserting an item pushing inserted item
  function addItem(inputtext) {
    setitems((previtems) => {
      return [...previtems, inputtext];
    });
  }
  // action on removed item
  function deleteItem(id) {
    setitems((previtems) => {
      return previtems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Open</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
