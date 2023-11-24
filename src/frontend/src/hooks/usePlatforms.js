import { useCallback, useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";

export default function usePlatforms() {
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPlatforms = useCallback(async () => {
    try {
      const response = await apiClient.get(`/platforms`);
      setPlatforms(response.data);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPlatforms();
  }, [getPlatforms]);

  return { platforms, loading, getPlatforms };
}
