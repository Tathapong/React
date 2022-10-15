import Button from "../ui/Button";
function FilterSearch(props) {
  // Destructuring object
  const { searchInput, setSearchInput } = props;

  return (
    <div className="input-group shadow">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={searchInput}
        onChange={(ev) => {
          setSearchInput(ev.target.value);
        }}
      />
      <Button color="dark" onClick={() => setSearchInput("")}>
        <i className="fa-solid fa-xmark"></i>
      </Button>
    </div>
  );
}

export default FilterSearch;
