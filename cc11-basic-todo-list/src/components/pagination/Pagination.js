import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

import PageList from "./PageList";

function Pagination() {
  const ctx = useContext(TodoContext);

  return (
    <div className="mt-2 d-flex align-items-baseline justify-content-between">
      <small className="text-muted">
        Showing {(ctx.page.currentPage - 1) * ctx.page.pagelimit + 1} to{" "}
        {ctx.filteredTodoList.length < ctx.page.currentPage * ctx.page.pagelimit
          ? ctx.filteredTodoList.length
          : ctx.page.currentPage * ctx.page.pagelimit}{" "}
        of {ctx.todoList.length} entries
      </small>

      <PageList></PageList>
    </div>
  );
}
export default Pagination;
