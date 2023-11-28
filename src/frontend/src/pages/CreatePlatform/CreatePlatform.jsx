import PlatformForm from "../../components/UI/PlatformForm/PlatformForm";
import { useState } from "react";
import { apiClient } from "../../services/apiClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CreatePlatform() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreate = async ({ name }) => {
    setLoading(true);
    try {
      const response = await apiClient.post("/platforms", { name });
      navigate(`/platforms/${response.data.id}`);
      toast.success("Plataforma criada com sucesso!");
    } catch {
      toast.error("Erro ao criar plataforma!");
      console.error("error");
    } finally {
      setLoading(false);
    }
  };
  return <PlatformForm handleSubmit={handleCreate} loading={loading} />;
}
