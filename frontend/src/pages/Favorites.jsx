export default function Favorites() {
  // later we will load real favorites from localStorage / API
  const favorites = [];

  return (
    <div className="container mt-4">
      <h2>Your Favorite Lots</h2>
      {favorites.length === 0 ? (
        <p className="mt-3">
          You don&apos;t have any favorites yet. From the dashboard, you&apos;ll
          be able to mark lots as favorites and they will show up here.
        </p>
      ) : (
        <ul className="list-group mt-3">
          {favorites.map((lot) => (
            <li key={lot.id} className="list-group-item">
              {lot.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
