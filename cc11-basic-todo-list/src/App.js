import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

import TodoInput from "./components/todo-list/TodoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import TodoList from "./components/todo-list/TodoList";
import Pagination from "./components/pagination/Pagination";

import axios from "axios";

// function genList(number) {
//   let arr = [];
//   for (let i = 0; i < number; i++) {
//     arr.push({ title: `Task ${i + 1}`, completed: i % 2 == 0 ? true : false, id: uuidv4() });
//   }
//   return arr;
// }

// const initialTodoList = [...genList(120)];

function App() {
  // State parameter declaration
  const [todoList, setTodoList] = useState([]);
  const [searchStatus, setSearchStatus] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState({
    pagelimit: 10,
    currentPage: 1
  });

  useEffect(() => {
    try {
      const fetchTodos = async () => {
        const res = await axios.get("http://localhost:8080/todos");
        setTodoList(res.data.todos);
      };
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // > List of all task and filter by each condition <
  // List of task by search typing
  const searchTodoList = todoList.filter((el) => el.title.toUpperCase().includes(searchInput.toUpperCase()));
  // List of searching task by status of task (all,completed, pending)
  const filteredTodoList = searchTodoList.filter((el) => searchStatus === null || el.completed === searchStatus);
  // List of all/ completed/ pending to show as page limit (10/25/50)
  const filteredTodoListLimit = filteredTodoList.slice(
    (page.currentPage - 1) * page.pagelimit,
    page.currentPage * page.pagelimit
  );

  // Function (Arrow) to create a task
  const createTodo = async (title) => {
    try {
      const newTodo = { title, completed: false };
      const res = await axios.post("http://localhost:8080/todos", newTodo);
      // const res1 = await axios.get("http://localhost:8080/todos");
      // setTodoList(res1.data.todos);
      const oldTodolist = [res.data.todo, ...todoList];
      setTodoList(oldTodolist);
    } catch (err) {
      console.log(err);
    }
  };

  // Function (Arrow) to remove a task
  const removeTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/todos/${id}`);
      const res = await axios.get("http://localhost:8080/todos");
      setTodoList(res.data.todos);
    } catch (err) {
      console.log(err);
    }

    // const idx = todoList.findIndex((item) => item.id === id);
    // if (idx !== -1) {
    //   const res = await axios.delete(`http://localhost:8080/todos/${id}`);
    //   const res1 = await axios.get("http://localhost:8080/todos");
    //   setTodoList(res1.data.todos);
    // }
  };

  // Function (Arrow) to update a task
  const updateTodo = async (newValue, id) => {
    try {
      await axios.put(`http://localhost:8080/todos/${id}`, { ...newValue });
      const res = await axios.get("http://localhost:8080/todos");
      setTodoList(res.data.todos);
    } catch (err) {
      console.log(err);
    }

    // const idx = todoList.findIndex((item) => item.id === id);
    // if (idx !== -1) {
    //   const cloneTodoList = [...todoList];
    //   cloneTodoList[idx] = { ...todoList[idx], ...newValue }; // เป็นการ Merger object โดยใช้ Destructuring โดยมันจะทำการ Update เฉพาะ key ที่ส่งเข้ามา
    //   setTodoList(cloneTodoList);
    //   axios.put(`http://localhost:8080/todos/${id}`, cloneTodoList[idx]);
    // }
  };

  // Function (Arrow) to change mode of filter (all/ completed/ pending)
  const changeSearchStatus = (value) => {
    setSearchStatus(value);
    setPage({ ...page, currentPage: 1 });
  };

  return (
    <div className="container max-w-xs pt-5">
      <TodoInput createTodo={createTodo} />
      <Filter
        changeSearchStatus={changeSearchStatus}
        searchStatus={searchStatus}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <PageLimit page={page} setPage={setPage} />
      <TodoList
        filteredTodoListLimit={filteredTodoListLimit}
        setFilteredTodoList={filteredTodoList}
        setTodoList={setTodoList}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        searchStatus={searchStatus}
      />
      <Pagination page={page} setPage={setPage} todoList={todoList} filteredTodoList={filteredTodoList} />
    </div>
  );
}

export default App;
