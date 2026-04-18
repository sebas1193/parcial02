import { useState } from "react";
import { login, register } from "../services/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (e: any) {
      setError(e.message); // ← así sabes exactamente qué falla
    }
  };

  const handleRegister = async () => {
    try {
      await register(email, password);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div>
      <input onChange={e => setEmail(e.target.value)} placeholder="email" />
      <input onChange={e => setPassword(e.target.value)} placeholder="password" type="password" />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}