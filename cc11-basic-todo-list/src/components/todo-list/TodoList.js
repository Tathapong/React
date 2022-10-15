import Todo from "./Todo";

function TodoList(props) {
  // Destructuring object
  const { removeTodo, updateTodo, filteredTodoListLimit } = props;

  return (
    <ul className="list-group shadown mt-3">
      {filteredTodoListLimit.map((item) => {
        return (
          <Todo
            key={item.id}
            title={item.title}
            completed={item.completed}
            id={item.id}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          ></Todo>
        );
      })}
    </ul>
  );
}
export default TodoList;
