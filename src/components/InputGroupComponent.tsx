type InputGroupProps = {
  label: string;
  htmlFor: string;
  name: string;
  type?: "text" | "email";
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  minLength?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  requiredMessage?: string;
  invalidMessage?: string;
  successMessage?: string;
};

function InputGroupComponent({
  label,
  htmlFor,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required,
  minLength,
  value,
  onChange,
  requiredMessage,
  invalidMessage,
  successMessage,
}: InputGroupProps) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="form-input"
        type={type}
        id={htmlFor}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
        value={value}
        onChange={onChange}
      />
      {requiredMessage && (
        <span className="form-message form-message--required">
          {requiredMessage}
        </span>
      )}
      {invalidMessage && (
        <span className="form-message form-message--invalid">
          {invalidMessage}
        </span>
      )}
      {successMessage && (
        <span className="form-message form-message--success">
          {successMessage}
        </span>
      )}
    </div>
  );
}

export default InputGroupComponent;
