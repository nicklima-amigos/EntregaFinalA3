import PlatformForm from "../../components/UI/PlatformForm/PlatformForm";
import { useEffect, useState } from "react";
import { apiClient } from "../../services/apiClient";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePlatform() {
  const [loading, setLoading] = useState(false);
  const [platform, setPlatform] = useState();
  const navigate = useNavigate();
  const { platformId } = useParams();

  const handleUpdate = async ({ name }) => {
    setLoading(true);
    try {
      await apiClient.put(`/platforms/${platformId}`, {
        name,
      });
      navigate(`/platforms/${platformId}`);
    } catch {
      console.error("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getPlatform = async () => {
      try {
        const response = await apiClient.get(`/platforms/${platformId}`);
        setPlatform(response.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    getPlatform();
  }, [platformId]);

  return (
    <PlatformForm
      handleSubmit={handleUpdate}
      loading={loading}
      platform={platform}
    />
  );
}
