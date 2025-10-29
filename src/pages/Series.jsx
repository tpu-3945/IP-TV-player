import { Navigate } from 'react-router-dom';
import { usePortal } from '../context/PortalContext';
import { usePortalData } from '../hooks/usePortalData';
import { getSeries } from '../services/portalService';
import Spinner from '../components/common/Spinner';
import EmptyState from '../components/common/EmptyState';
import ContentGrid from '../components/common/ContentGrid';

const Series = () => {
  const { isLoggedIn } = usePortal();
  const { data: series, isLoading, error } = usePortalData(getSeries);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  if (isLoading) {
    return <Spinner message="Chargement des séries..." />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Séries ({series.length})</h1>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

      {!error && series.length === 0 ? (
        <EmptyState message="Aucune série trouvée sur ce portail." />
      ) : (
        <ContentGrid items={series} />
      )}
    </div>
  );
};

export default Series;
