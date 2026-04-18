import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { useMissions } from "../hooks/useMissions";
import BarProgress from "../components/barprogress";

export default function Misiones() {
  const { missions, loading, progress, isUnlocked } = useMissions();

  if (loading) return <p>Cargando misiones...</p>;

  const [m1, m2, m3] = missions;

  return (
    <div>
      <Navbar />
      <h1>Misiones Disponibles</h1>
      <BarProgress progress={progress} />

      <div style={{ opacity: isUnlocked(1) ? 1 : 0.4 }}>
        <h2><b>Misión 1: Evidencia {m1.completed && "✅"}</b></h2>
        <p>Tomar una foto con la cámara</p>
        <p>Se completa al guardar imagen</p>
        {isUnlocked(1) ? <Link to="/mision/1">→</Link> : <p>🔒 Bloqueada</p>}
      </div>

      <div style={{ opacity: isUnlocked(2) ? 1 : 0.4 }}>
        <h2><b>Misión 2: Movimiento real {m2.completed && "✅"}</b></h2>
        <p>Debe detectar cambio de ubicación</p>
        <p>Condición: distancia &gt; 30m</p>
        {isUnlocked(2) ? <Link to="/mision/2">→</Link> : <p>🔒 Completa la misión 1 primero</p>}
      </div>

      <div style={{ opacity: isUnlocked(3) ? 1 : 0.4 }}>
        <h2><b>Misión 3: Permanencia activa {m3.completed && "✅"}</b></h2>
        <p>Una vez recorrido los 50mts, se habilita la siguiente misión y el usuario deberá mantenerse quieto 10 segundos</p>
        <p>Pasados los 10 segundos el celular vibra.</p>
        <p>(sin bloquear pantalla)</p>
        {isUnlocked(3) ? <Link to="/mision/3">→</Link> : <p>🔒 Completa la misión 2 primero</p>}
      </div>
    </div>
  );
}