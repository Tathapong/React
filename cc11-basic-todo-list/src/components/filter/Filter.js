import FilterSearch from "./FilterSearch";
import FilterStatus from "./FilterStatus";

function Filter() {
  return (
    <div className="d-flex mt-4">
      <FilterSearch />
      <FilterStatus />
    </div>
  );
}
export default Filter;
