import PageItem from "./PageItem";
import { v4 as uuidv4 } from "uuid";
function PageList(props) {
  // Destructuring pbject
  const { filteredTodoList, page } = props;

  const createButtonList = () => {
    let arr = [];
    for (let i = 1; i <= Math.ceil(filteredTodoList.length / page.pagelimit); i++) {
      arr.push(
        <PageItem {...props} key={uuidv4()} active={page.currentPage === i || ""}>
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
