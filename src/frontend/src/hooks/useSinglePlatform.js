import { useState, useEffect, useCallback } from "react";
import { apiClient } from "../services/apiClient";

export default function useSinglePlatform(platformId) {
  const [platform, setPlatform] = useState();
  const [loading, setLoading] = useState(true);

  const getPlatform = useCallback(async () => {
    try {
      const response = await apiClient.get(`/platforms/${platformId}`);
      setPlatform(response.data);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  }, [platformId]);

  useEffect(() => {
    getPlatform();
  }, [getPlatform]);

  return { platform, loading, getPlatform };
}
