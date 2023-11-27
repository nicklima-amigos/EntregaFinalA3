import styles from "./CategoryPill.module.css";
import { apiClient } from "../../../services/apiClient";
import { toast } from "react-toastify";

export default function CategoryPill({ category, fetchCategories }) {
  const handleDeleteCategory = async () => {
    try {
      await apiClient.delete(`/categories/${category.id}`);
      fetchCategories();
      toast.success("Categoria deletada com sucesso!");
    } catch {
      toast.error("Erro ao deletar categoria!");
    }
  };
  return (
    <div className={styles.categoryPill}>
      {category.category}{" "}
      <div
        onClick={(e) => {
          e.stopPropagation();
          return handleDeleteCategory();
        }}
      >
        x
      </div>
    </div>
  );
}
