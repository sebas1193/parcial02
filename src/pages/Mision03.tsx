import { useMissions } from "../hooks/useMissions";
import Navbar from "../components/navbar";

export default function Mision03() {
  const { missions, completeMission } = useMissions();
  const mission = missions[2];

  return (
    <div>
      <Navbar />
      <h1>Misión 3: Permanencia activa</h1>
      <p>Mantenerse quieto 10 segundos</p>
      <p>Estado: {mission.completed ? "✅ Completada" : "⏳ Pendiente"}</p>

      {!mission.completed && (
        <button onClick={() => completeMission(3)}>
          Marcar como completada
        </button>
      )}
    </div>
  );
}