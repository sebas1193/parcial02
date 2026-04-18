import { useMissions } from "../hooks/useMissions";
import Navbar from "../components/navbar";
export default function Mision02() {
  const { missions, completeMission } = useMissions();
  const mission = missions[1];

  return (
    <div>
      <Navbar />
      <h1>Misión 2: Movimiento real</h1>
      <p>Debe detectar cambio de ubicación</p>
      <p>Estado: {mission.completed ? "✅ Completada" : "⏳ Pendiente"}</p>

      {!mission.completed && (
        <button onClick={() => completeMission(2)}>
          Marcar como completada
        </button>
      )}
    </div>
  );
}