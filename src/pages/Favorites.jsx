import { Navigate } from 'react-router-dom';
import { usePortal } from '../context/PortalContext';
import { useFavorites } from '../context/FavoritesContext';
import EmptyState from '../components/common/EmptyState';
import ContentGrid from '../components/common/ContentGrid';

const Favorites = () => {
  const { isLoggedIn } = usePortal();
  const { favorites } = useFavorites();

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Favoris ({favorites.length})</h1>
      {favorites.length === 0 ? (
        <EmptyState message="Vous n'avez ajouté aucun favori pour le moment." />
      ) : (
        <ContentGrid items={favorites} />
      )}
    </div>
  );
};

export default Favorites;
