import { useMissions } from "../hooks/useMissions";
import Navbar from "../components/navbar";

export default function Mision01() {
  const { missions, completeMission } = useMissions();
  const mission = missions[0];

  return (
    <div>
      <Navbar />
      <h1>Misión 1: Evidencia</h1>
      <p>Tomar una foto con la cámara</p>
      <p>Estado: {mission.completed ? "✅ Completada" : "⏳ Pendiente"}</p>

      {!mission.completed && (
        <button onClick={() => completeMission(1)}>
          Marcar como completada
        </button>
      )}
    </div>
  );
}
