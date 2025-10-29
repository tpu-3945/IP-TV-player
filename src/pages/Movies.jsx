import { Navigate } from 'react-router-dom';
import { usePortal } from '../context/PortalContext';
import { usePortalData } from '../hooks/usePortalData';
import { getMovies } from '../services/portalService';
import Spinner from '../components/common/Spinner';
import EmptyState from '../components/common/EmptyState';
import ContentGrid from '../components/common/ContentGrid';

const Movies = () => {
  const { isLoggedIn } = usePortal();
  const { data: movies, isLoading, error } = usePortalData(getMovies);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  if (isLoading) {
    return <Spinner message="Chargement des films..." />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Films ({movies.length})</h1>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

      {!error && movies.length === 0 ? (
        <EmptyState message="Aucun film trouvé sur ce portail." />
      ) : (
        <ContentGrid items={movies} />
      )}
    </div>
  );
};

export default Movies;
