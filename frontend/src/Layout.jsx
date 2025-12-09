import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  const navLinkClass = (path) =>
    location.pathname.startsWith(path)
      ? "nav-link active"
      : "nav-link";

  return (
    <>
      <nav className="navbar navbar-light bg-light mb-3">
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand fw-bold" to="/dashboard">
            Park Eagle
          </Link>
          <div className="d-flex gap-3">
            <Link className={navLinkClass("/dashboard")} to="/dashboard">
              Dashboard
            </Link>
            <Link className={navLinkClass("/favorites")} to="/favorites">
              Favorites
            </Link>
            <Link className={navLinkClass("/settings")} to="/settings">
              Settings
            </Link>
          </div>
        </div>
      </nav>

      {/* Nested routes render here */}
      <Outlet />
    </>
  );
}
