import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:5000";

export default function Dashboard() {
  const [lots, setLots] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const loadLots = async () => {
    const res = await axios.get(`${API_BASE}/api/lots`, {
      params: { q: search }
    });
    setLots(res.data);
  };

  useEffect(() => {
    loadLots();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    loadLots();
  };

  return (
    <div className="container mt-4">
      <h2>Park Eagle – Parking Dashboard</h2>

      <form onSubmit={handleSearch} className="my-3">
        <input
          className="form-control"
          placeholder="Search parking lots..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <ul className="list-group">
        {lots.map((lot) => (
          <li
            key={lot.id}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/lot/${lot.id}`)}
          >
            <span>
              <strong>{lot.name}</strong>
              <br />
              <small>{lot.address}</small>
            </span>
            <span className="badge bg-success">
              {lot.available_spots}/{lot.total_spots}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
