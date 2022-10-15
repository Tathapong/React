import { useState } from "react";
import Button from "../ui/Button";
import TodoInput from "./TodoInput";

function Todo(props) {
  // Destructuring object
  const { title, completed, id, removeTodo, updateTodo } = props;

  // State parameter declaration
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li
      className={`list-group-item d-flex flex-wrap  align-items-center bd-callout ${
        completed ? "bd-callout-success" : "bd-callout-warning"
      }`}
    >
      {isEditing ? (
        <TodoInput
          id={id}
          title={title}
          completed={completed}
          updateTodo={updateTodo}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <span className="flex-grow-1" role="button" onClick={() => setIsEditing(!isEditing)}>
            {title}
          </span>
          <div className="btn-group">
            <Button color="outline-info" onClick={() => updateTodo({ completed: !completed, title }, id)}>
              <li className={`fa-solid ${completed ? "fa-toggle-on" : "fa-toggle-off"}`} />
            </Button>
            <Button color="danger" onClick={() => removeTodo(id)}>
              <li className="fa-regular fa-trash-can" />
            </Button>
          </div>
        </>
      )}
    </li>
  );
}
export default Todo;
