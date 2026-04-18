import { db } from "./firebase";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

export interface Mission {
  id: number;
  completed: boolean;
  completedAt?: Date | null;
}

export const getMissions = async (uid: string): Promise<Mission[]> => {
  const missionsRef = collection(db, "users", uid, "missions");
  const snapshot = await getDocs(missionsRef);

  // Inicializa las 3 misiones con estado base
  const base: Mission[] = [
    { id: 1, completed: false },
    { id: 2, completed: false },
    { id: 3, completed: false },
  ];

  snapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const index = base.findIndex((m) => m.id === Number(docSnap.id));
    if (index !== -1) {
      base[index] = {
        id: Number(docSnap.id),
        completed: data.completed ?? false,
        completedAt: data.completedAt?.toDate() ?? null,
      };
    }
  });

  return base;
};

export const completeMission = async (uid: string, missionId: number) => {
  const missionRef = doc(db, "users", uid, "missions", String(missionId));
  await setDoc(missionRef, {
    completed: true,
    completedAt: serverTimestamp(),
  });
};