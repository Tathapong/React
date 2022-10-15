import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

function PageLimit() {
  const ctx = useContext(TodoContext);
  return (
    <div className="mt-3 d-flex align-items-center">
      <small className="text-muted">Show : </small>
      <select
        className="form-select form-select-sm ms-2"
        style={{ width: "4rem" }}
        onChange={(ev) => {
          ctx.setPage({ ...ctx.page, pagelimit: +ev.target.value, currentPage: 1 });
        }}
      >
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>
    </div>
  );
}
export default PageLimit;
