function RadioButton(props) {
  // Destructuring object
  const { name, id, color, onChange, children, defaultChecked } = props;

  return (
    <>
      <input
        type="radio"
        class="btn-check"
        name={name}
        id={id}
        onChange={onChange}
        autoComplete="off"
        defaultChecked={defaultChecked}
        de
      />
      <label className={`btn btn-${color || "outline-primary"} shadow-none`} htmlFor={id}>
        {children}
      </label>
    </>
  );
}
export default RadioButton;
