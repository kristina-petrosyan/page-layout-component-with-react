type TextareaGroupProps = {
  label: string;
  htmlFor: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  minLength?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  requiredMessage?: string;
  invalidMessage?: string;
  successMessage?: string;
};

function TextareaGroupComponent({
  label,
  htmlFor,
  name,
  placeholder,
  rows,
  required,
  minLength,
  value,
  onChange,
  requiredMessage,
  invalidMessage,
  successMessage,
}: TextareaGroupProps) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={htmlFor}>
        {label}
      </label>
      <textarea
        className="form-input form-textarea"
        id={htmlFor}
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
        minLength={minLength}
        value={value}
        onChange={onChange}
      />
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

export default TextareaGroupComponent;
