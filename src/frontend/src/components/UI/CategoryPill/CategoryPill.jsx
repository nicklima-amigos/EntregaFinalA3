import styles from "./CategoryPill.module.css";

export default function CategoryPill({ children }) {
  return <div className={styles.categoryPill}>{children}</div>;
}
