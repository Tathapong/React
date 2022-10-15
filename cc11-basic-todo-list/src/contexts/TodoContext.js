import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [searchStatus, setSearchStatus] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState({
    pagelimit: 10,
    currentPage: 1
  });

  const createTodo = (title) => {
    axios
      .post("http://localhost:8080/todos", { title, completed: false })
      .then((res) => {
        const newTodo = res.data.todo;
        setTodoList([newTodo, ...todoList]);
      })
      .catch((err) => console.log(err));
  };

  const removeTodo = (id) => {
    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then(() => {
        const idx = todoList.findIndex((el) => el.id === id);
        if (idx !== -1) {
          const cloneTodoList = [...todoList];
          cloneTodoList.splice(idx, 1);
          setTodoList(cloneTodoList);
        }
      })
      .catch((err) => console.log(err));
  };

  const updateTodo = (newValue, id) => {
    axios
      .put(`http://localhost:8080/todos/${id}`, { ...newValue })
      .then((res) => {
        const idx = todoList.findIndex((el) => el.id === id);
        if (idx !== -1) {
          const cloneTodoList = [...todoList];
          cloneTodoList.splice(idx, 1, { ...newValue, id });
          setTodoList(cloneTodoList);
        }
      })
      .catch((err) => console.log(err));
  };

  const changeSearchStatus = (value) => {
    setSearchStatus(value);
    setPage({ ...page, currentPage: 1 });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => setTodoList(res.data.todos))
      .catch((err) => console.log(err));
  }, []);

  const searchTodoList = todoList.filter((el) => el.title.toUpperCase().includes(searchInput.toUpperCase()));
  const filteredTodoList = searchTodoList.filter((el) => searchStatus === null || el.completed === searchStatus);
  const filteredTodoListLimit = filteredTodoList.slice(
    (page.currentPage - 1) * page.pagelimit,
    page.currentPage * page.pagelimit
  );

  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        createTodo,
        removeTodo,
        updateTodo,
        searchInput,
        setSearchInput,
        searchStatus,
        changeSearchStatus,
        filteredTodoListLimit,
        filteredTodoList,
        page,
        setPage
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoContextProvider };
