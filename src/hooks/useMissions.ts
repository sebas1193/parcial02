import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { getMissions, completeMission as completeMissionService } from "../services/missionService";
import type { Mission } from "../services/missionService";

export const useMissions = () => {
  const { user } = useAuth();
  const [missions, setMissions] = useState<Mission[]>([
    { id: 1, completed: false },
    { id: 2, completed: false },
    { id: 3, completed: false },
  ]);
  const [loading, setLoading] = useState(true);

  const fetchMissions = async () => {
    if (!user) return;
    setLoading(true);
    const data = await getMissions(user.uid);
    setMissions(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMissions();
  }, [user]);

  const completeMission = async (missionId: number) => {
    if (!user) return;
    await completeMissionService(user.uid, missionId);
    await fetchMissions(); // refresca el estado desde Firestore
  };

  const completedCount = missions.filter((m) => m.completed).length;
  const progress = Math.round((completedCount / missions.length) * 100);

  // Misión habilitada si es la 1, o si la anterior está completada
  const isUnlocked = (missionId: number) => {
    if (missionId === 1) return true;
    return missions[missionId - 2].completed;
  };

  return { missions, loading, completeMission, progress, isUnlocked };
};