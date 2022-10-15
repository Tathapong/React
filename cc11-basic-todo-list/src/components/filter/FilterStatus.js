import RadioButton from "../ui/RadioButton";
function FilterStatus(props) {
  // Destructuring object
  const { changeSearchStatus, searchStatus } = props;

  return (
    <div className="btn-group ms-3" role="group" aria-label="Basic radio toggle button group">
      <RadioButton
        name="status"
        id="all"
        color="outline-dark"
        onChange={() => changeSearchStatus(null)}
        defaultChecked={searchStatus === null}
      >
        <i className="fa-solid fa-list" />
      </RadioButton>
      <RadioButton
        name="status"
        id="completed"
        color="outline-dark"
        onChange={() => changeSearchStatus(true)}
        defaultChecked={searchStatus === true}
      >
        <i className="fa-solid fa-clipboard-check" />
      </RadioButton>
      <RadioButton
        name="status"
        id="pending"
        color="outline-dark"
        onChange={() => changeSearchStatus(false)}
        defaultChecked={searchStatus === false}
      >
        <i className="fa-regular fa-clipboard" />
      </RadioButton>
    </div>
  );
}
export default FilterStatus;
