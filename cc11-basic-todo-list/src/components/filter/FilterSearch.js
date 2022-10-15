import { TodoContext } from "../../contexts/TodoContext";
import { useContext } from "react";

import Button from "../ui/Button";

function FilterSearch() {
  const ctx = useContext(TodoContext);

  return (
    <div className="input-group shadow">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={ctx.searchInput}
        onChange={(ev) => {
          ctx.setSearchInput(ev.target.value);
        }}
      />
      <Button color="dark" onClick={() => ctx.setSearchInput("")}>
        <i className="fa-solid fa-xmark"></i>
      </Button>
    </div>
  );
}

export default FilterSearch;
