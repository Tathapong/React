import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

function PageItem(props) {
  const ctx = useContext(TodoContext);
  // Destructuring object
  const { active, children, id } = props;

  const setCurrentPage = (ev) => {
    const clonePage = { ...ctx.page };
    if (ev.target.innerText) clonePage.currentPage = +ev.target.innerText;
    ctx.setPage(clonePage);
  };

  const setBackNextPage = (ev) => {
    const clonePage = { ...ctx.page };
    const lastPage = Math.ceil(ctx.filteredTodoList.length / ctx.page.pagelimit);
    if (id === "back")
      clonePage.currentPage = clonePage.currentPage !== 1 ? clonePage.currentPage - 1 : clonePage.currentPage;
    else if (id === "next")
      clonePage.currentPage = clonePage.currentPage !== lastPage ? clonePage.currentPage + 1 : clonePage.currentPage;
    ctx.setPage(clonePage);
  };

  return (
    <li className={`page-item ${active ? "active" : ""} `}>
      <button id={id || ""} className="page-link" onClick={id ? setBackNextPage : setCurrentPage}>
        {children}
      </button>
    </li>
  );
}
export default PageItem;
