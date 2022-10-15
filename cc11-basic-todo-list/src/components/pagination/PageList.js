import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { v4 as uuidv4 } from "uuid";

import PageItem from "./PageItem";

function PageList(props) {
  const ctx = useContext(TodoContext);

  const createButtonList = () => {
    let arr = [];
    for (let i = 1; i <= Math.ceil(ctx.filteredTodoList.length / ctx.page.pagelimit); i++) {
      arr.push(
        <PageItem {...props} key={uuidv4()} active={ctx.page.currentPage === i || ""}>
          {i}
        </PageItem>
      );
    }
    return arr;
  };

  return (
    <nav aria-label="List results">
      <ul className="pagination pagination-sm">
        <PageItem {...props} id="back">
          <i className="fa-solid fa-angle-left" />
        </PageItem>

        {createButtonList()}

        <PageItem {...props} id="next">
          {" "}
          <i className="fa-solid fa-angle-right" />
        </PageItem>
      </ul>
    </nav>
  );
}
export default PageList;
