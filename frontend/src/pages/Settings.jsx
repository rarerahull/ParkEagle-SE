import { useState } from "react";

export default function Settings() {
  const [sort, setSort] = useState("availability");
  const [showFull, setShowFull] = useState(true);

  return (
    <div className="container mt-4" style={{ maxWidth: "520px" }}>
      <h2 className="mb-3">Settings</h2>

      <div className="mb-3">
        <label className="form-label fw-semibold">Default sort order</label>
        <select
          className="form-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="availability">Best availability first</option>
          <option value="name">Alphabetical by lot name</option>
        </select>
      </div>

      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="showFull"
          checked={showFull}
          onChange={(e) => setShowFull(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="showFull">
          Show lots that are full
        </label>
      </div>

      <p className="text-muted">
        (Later we can save these preferences so they persist between sessions.)
      </p>
    </div>
  );
}
