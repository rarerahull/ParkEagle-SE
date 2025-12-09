import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // no real auth – just pretend and go to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "420px" }}>
      <h2 className="mb-4">Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">UNT Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="first.last@unt.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-success w-100" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}
