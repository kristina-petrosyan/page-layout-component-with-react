type FormGroupProps = {
  label: string;
  htmlFor: string;
  name: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  minLength?: number;
  rows?: number;
  requiredMessage?: string;
  invalidMessage?: string;
  successMessage?: string;
};

function FormGroupComponent({
  label,
  htmlFor,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required,
  minLength,
  rows,
  requiredMessage,
  invalidMessage,
  successMessage,
}: FormGroupProps) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={htmlFor}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="form-input form-textarea"
          id={htmlFor}
          name={name}
          placeholder={placeholder}
          rows={rows}
          required={required}
          minLength={minLength}
        />
      ) : (
        <input
          className="form-input"
          type={type}
          id={htmlFor}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          minLength={minLength}
        />
      )}
      <span className="form-message form-message--required">
        {requiredMessage}
      </span>
      <span className="form-message form-message--invalid">
        {invalidMessage}
      </span>
      <span className="form-message form-message--success">
        {successMessage}
      </span>
    </div>
  );
}

export default FormGroupComponent;
