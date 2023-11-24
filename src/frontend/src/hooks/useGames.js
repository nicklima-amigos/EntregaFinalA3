import { useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";

export default function useGames() {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    try {
      const { data } = await apiClient.get(`/games`);
      setGames(data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return { games, getGames };
}
