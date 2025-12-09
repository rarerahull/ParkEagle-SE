import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_BASE = "http://localhost:5000";

export default function LotDetails() {
  const { id } = useParams();
  const [lot, setLot] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchLot() {
      try {
        const res = await axios.get(`${API_BASE}/api/lots/${id}`);
        setLot(res.data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Could not load lot details. Is the backend running?");
      }
    }

    fetchLot();
  }, [id]);

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
        <Link to="/" className="btn btn-secondary mt-3">
          Back to dashboard
        </Link>
      </div>
    );
  }

  if (!lot) {
    return (
      <div className="container mt-4">
        <p>Loading lot details...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>{lot.name}</h2>
      <p className="text-muted">{lot.address}</p>

      <p>
        <strong>Status:</strong> {lot.status}
      </p>
      <p>
        <strong>Available Spots:</strong> {lot.available_spots}/{lot.total_spots}
      </p>

      <Link to="/" className="btn btn-secondary mt-3">
        Back to dashboard
      </Link>
    </div>
  );
}
