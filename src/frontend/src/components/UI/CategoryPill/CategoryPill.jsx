import styles from "./CategoryPill.module.css";
import { apiClient } from "../../../services/apiClient";

export default function CategoryPill({ category, fetchCategories }) {
  const handleDeleteCategory = async () => {
    await apiClient.delete(`/categories/${category.id}`);
    fetchCategories();
  };
  return (
    <div className={styles.categoryPill}>
      {category.category} <div onClick={handleDeleteCategory}>x</div>
    </div>
  );
}
