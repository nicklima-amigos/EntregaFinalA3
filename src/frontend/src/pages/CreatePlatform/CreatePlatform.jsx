import PlatformForm from "../../components/UI/PlatformForm/PlatformForm";
import { useState } from "react";
import { apiClient } from "../../services/apiClient";
import { useNavigate } from "react-router-dom";

export default function CreatePlatform() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreate = async ({ name }) => {
    setLoading(true);
    try {
      const response = await apiClient.post("/platforms", { name });
      navigate(`/platforms/${response.data.id}`);
    } catch {
      console.error("error");
    } finally {
      setLoading(false);
    }
  };
  return <PlatformForm handleSubmit={handleCreate} loading={loading} />;
}
