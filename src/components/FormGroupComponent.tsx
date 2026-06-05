function FormGroupComponent() {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor="contact-name">
        Name
      </label>
      <input
        className="form-input"
        type="text"
        id="contact-name"
        name="name"
        placeholder="Your name"
        autoComplete="name"
      />
      <span className="error-message" style={{ display: "none" }}>
        {" "}
        Possible Error message{" "}
      </span>
    </div>
  );
}

export default FormGroupComponent;
