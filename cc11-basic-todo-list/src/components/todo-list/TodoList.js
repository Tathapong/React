import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

import Todo from "./Todo";

function TodoList() {
  const ctx = useContext(TodoContext);

  return (
    <ul className="list-group shadown mt-3">
      {ctx.filteredTodoListLimit.map((item) => {
        return <Todo key={item.id} title={item.title} completed={item.completed} id={item.id}></Todo>;
      })}
    </ul>
  );
}
export default TodoList;
