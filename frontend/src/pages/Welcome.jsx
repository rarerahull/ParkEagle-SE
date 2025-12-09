import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="container mt-5">
      <h1 className="mb-3">Welcome to Park Eagle 🦅</h1>
      <p className="lead">
        Park Eagle helps UNT students quickly find available parking on campus.
      </p>
      <p>
        View live availability, check lot details, and save your favorite lots
        for quick access before class.
      </p>
      <Link to="/login" className="btn btn-primary mt-3">
        Get Started
      </Link>
    </div>
  );
}

