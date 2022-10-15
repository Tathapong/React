function PageItem(props) {
  // Destructuring object
  const { active, disabled, children, page, setPage, id, filteredTodoList } = props;

  const setCurrentPage = (ev) => {
    const clonePage = { ...page };
    if (ev.target.innerText) clonePage.currentPage = +ev.target.innerText;
    setPage(clonePage);
  };

  const setBackNextPage = (ev) => {
    const clonePage = { ...page };
    const lastPage = Math.ceil(filteredTodoList.length / page.pagelimit);
    if (id === "back")
      clonePage.currentPage = clonePage.currentPage !== 1 ? clonePage.currentPage - 1 : clonePage.currentPage;
    else if (id === "next")
      clonePage.currentPage = clonePage.currentPage !== lastPage ? clonePage.currentPage + 1 : clonePage.currentPage;
    setPage(clonePage);
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
