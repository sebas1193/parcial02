import { logout } from "../services/auth";

export default function Navbar() {
  return (
    <nav>
      <button onClick={logout}>Cerrar sesión</button>
    </nav>
  );
}