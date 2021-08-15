import React from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [list, setList] = React.useState("");
  const [items, setItems] = React.useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setList(newValue);
  }
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, list];
    });
    setList("");
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((val, ind) => {
        return id !== ind;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={list} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((lis, i) => (
            <ToDoItem id={i} text={lis} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
