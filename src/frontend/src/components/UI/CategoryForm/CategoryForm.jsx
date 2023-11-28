import { useState } from "react";
import FormField from "../FormField/FormField";
import Modal from "../Modal/Modal";
import { apiClient } from "../../../services/apiClient";
import useUser from "../../../hooks/useUser";
import { toast } from "react-toastify";

export default function CategoryForm({ game, cleanTitle, setCategories }) {
  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const user = useUser();

  const formIsValid = () => {
    if (!category) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    setCategoryError("");
    if (!formIsValid()) {
      setCategoryError("Categoria não pode ser vazia!");
      toast.error(categoryError);
      return;
    }
    await apiClient.post(`/categories`, {
      user_id: user.id,
      game_id: game.id,
      category,
    });
    const { data } = await apiClient.get(
      `/categories/game/${game.id}/user/${user.id}`
    );
    toast.success("Categoria adicionada com sucesso!");
    setCategories(data);
    setCategory("");
  };

  return (
    <Modal
      id={cleanTitle + "category"}
      title={`Categoria: ${game.title}`}
      handleSubmit={handleSubmit}
    >
      <FormField
        type="text"
        label="Categoria"
        name="category"
        placeholder="categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fieldError={categoryError}
      />
    </Modal>
  );
}
