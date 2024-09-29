const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className="form-control">
      <lavel className="label">
        <span className="label-text">{label}</span>
      </lavel>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered"
      />
    </div>
  );
};

export default FormInput;
