import React, { useState } from "react";

function ToDoForms(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
props.onSubmit({
    id: Math.floor(Math.random()*10000),
    text:input
})

    setInput("");
  };

  return (
    <div>
      <h1>TODO's</h1>
      <h2>local storage CRUD app</h2>
      <h3>CRUD-create read update delete </h3>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button">Add todo</button>
      </form>
    </div>
  );
}

export default ToDoForms;
