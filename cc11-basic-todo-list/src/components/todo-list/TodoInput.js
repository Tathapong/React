import { useState, useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

import Button from "../ui/Button";

function TodoInput(props) {
  // Destructuring object
  const { id, title, completed, isEditing, setIsEditing } = props;

  const ctx = useContext(TodoContext);

  // State parameter declaration
  const [todoInput, setTodoInput] = useState(id ? title : "");
  const [todoError, setTodoError] = useState("");

  // Function (Arrow) handle of Add Button to create a task
  const handleClickCreateBtn = () => {
    if (!todoInput) {
      setTodoError("Title is required");
    } else {
      ctx.createTodo(todoInput);
      setTodoInput("");
    }
  };

  // Function (Arrow) handle of error text for empty input
  const handleClickUpdateBtn = () => {
    if (!todoInput) {
      setTodoError("Title is required");
    } else {
      ctx.updateTodo({ title: todoInput, completed }, id);
      setIsEditing(!isEditing);
    }
  };
  return (
    <>
      <div className="input-group shadow">
        <input
          type="text"
          className={`form-control ${todoError ? "is-invalid" : ""}`}
          placeholder="Enter new todo"
          value={todoInput}
          onChange={(ev) => {
            setTodoInput(ev.target.value);
            setTodoError("");
          }}
        ></input>
        {id ? (
          <Button onClick={handleClickUpdateBtn}>
            <i className="fa-solid fa-check" />
          </Button>
        ) : (
          <Button color="success" onClick={handleClickCreateBtn}>
            <i className="fa-solid fa-plus" />
          </Button>
        )}
        <Button color="outline-secondary" onClick={() => setTodoInput("")}>
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </div>

      <small className="text-danger">{todoError}</small>
    </>
  );
}
export default TodoInput;
