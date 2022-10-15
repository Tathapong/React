import PageList from "./PageList";
function Pagination(props) {
  // Destructuring object
  const { page, setPage, todoList, filteredTodoList } = props;

  return (
    <div className="mt-2 d-flex align-items-baseline justify-content-between">
      <small className="text-muted">
        Showing {(page.currentPage - 1) * page.pagelimit + 1} to{" "}
        {filteredTodoList.length < page.currentPage * page.pagelimit
          ? filteredTodoList.length
          : page.currentPage * page.pagelimit}{" "}
        of {todoList.length} entries
      </small>

      <PageList page={page} setPage={setPage} filteredTodoList={filteredTodoList}></PageList>
    </div>
  );
}
export default Pagination;
