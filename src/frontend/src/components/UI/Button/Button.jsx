import styles from "./Button.module.css";

export default function Button({
  type = "button",
  onClick,
  loading = false,
  children,
}) {
  return (
    <button
      type={type}
      className={"btn mt-2 mb-2 " + styles.button}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
      ) : (
        children
      )}
    </button>
  );
}
