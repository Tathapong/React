import FilterSearch from "./FilterSearch";
import FilterStatus from "./FilterStatus";

function Filter(props) {
  // Destructuring object
  const { changeSearchStatus, searchStatus, searchInput, setSearchInput } = props;

  return (
    <div className="d-flex mt-4">
      <FilterSearch searchInput={searchInput} setSearchInput={setSearchInput} />
      <FilterStatus changeSearchStatus={changeSearchStatus} searchStatus={searchStatus} />
    </div>
  );
}
export default Filter;
