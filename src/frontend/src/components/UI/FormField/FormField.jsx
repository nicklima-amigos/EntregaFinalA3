import styles from "./FormField.module.css";

export default function FormField({
  type = "text",
  value,
  onChange,
  placeholder = "",
  label,
  fieldError,
}) {
  return (
    <div className={"mt-2 mb-2 d-flex flex-column " + styles.formField}>
      <label htmlFor={placeholder}>{label}</label>
      <input
        type={type}
        className=""
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={(e) => e.stopPropagation()}
      />
      {fieldError && <p className="text-danger">{fieldError}</p>}
    </div>
  );
}
