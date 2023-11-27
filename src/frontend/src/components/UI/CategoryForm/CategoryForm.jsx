import { useState } from "react";
import FormField from "../FormField/FormField";
import Modal from "../Modal/Modal";
import { apiClient } from "../../../services/apiClient";
import useUser from "../../../hooks/useUser";

export default function CategoryForm({ game, cleanTitle, setCategories }) {
  const [category, setCategory] = useState("");
  const user = useUser();

  const handleSubmit = async () => {
    await apiClient.post(`/categories`, {
      user_id: user.id,
      game_id: game.id,
      category,
    });
    const { data } = await apiClient.get(
      `/categories/game/${game.id}/user/${user.id}`
    );
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
      />
    </Modal>
  );
}
