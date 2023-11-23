import styles from "./CategoryPill.module.css";

export default function CategoryPill({ key, children }) {
  return (
    <div key={key} className={styles.categoryPill}>
      {children}
    </div>
  );
}
