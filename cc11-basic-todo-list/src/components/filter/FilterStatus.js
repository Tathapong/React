import { TodoContext } from "../../contexts/TodoContext";
import { useContext } from "react";

import RadioButton from "../ui/RadioButton";

function FilterStatus() {
  const ctx = useContext(TodoContext);

  return (
    <div className="btn-group ms-3" role="group" aria-label="Basic radio toggle button group">
      <RadioButton
        name="status"
        id="all"
        color="outline-dark"
        onChange={() => ctx.changeSearchStatus(null)}
        defaultChecked={ctx.searchStatus === null}
      >
        <i className="fa-solid fa-list" />
      </RadioButton>
      <RadioButton
        name="status"
        id="completed"
        color="outline-dark"
        onChange={() => ctx.changeSearchStatus(true)}
        defaultChecked={ctx.searchStatus === true}
      >
        <i className="fa-solid fa-clipboard-check" />
      </RadioButton>
      <RadioButton
        name="status"
        id="pending"
        color="outline-dark"
        onChange={() => ctx.changeSearchStatus(false)}
        defaultChecked={ctx.searchStatus === false}
      >
        <i className="fa-regular fa-clipboard" />
      </RadioButton>
    </div>
  );
}
export default FilterStatus;
