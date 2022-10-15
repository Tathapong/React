function PageLimit(props) {
  // Destructuring object
  const { page, setPage } = props;

  return (
    <div className="mt-3 d-flex align-items-center">
      <small className="text-muted">Show : </small>
      <select
        className="form-select form-select-sm ms-2"
        style={{ width: "4rem" }}
        onChange={(ev) => {
          setPage({ ...page, pagelimit: +ev.target.value, currentPage: 1 });
        }}
      >
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>
    </div>
  );
}
export default PageLimit;
