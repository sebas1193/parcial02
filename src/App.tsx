import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Login from "./pages/Login";
import Misiones from "./pages/Misiones";
import Mision01 from "./pages/Mision01";
import Mision02 from "./pages/Mision02";
import Mision03 from "./pages/Mision03";

export default function App() {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Misiones /> : <Login />} />
        <Route path="/mision/1" element={user ? <Mision01 /> : <Navigate to="/" />} />
        <Route path="/mision/2" element={user ? <Mision02 /> : <Navigate to="/" />} />
        <Route path="/mision/3" element={user ? <Mision03 /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}