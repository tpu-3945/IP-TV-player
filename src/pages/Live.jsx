import { Navigate } from 'react-router-dom';
import { usePortal } from '../context/PortalContext';
import { usePortalData } from '../hooks/usePortalData';
import { getLiveStreams } from '../services/portalService';
import Spinner from '../components/common/Spinner';
import EmptyState from '../components/common/EmptyState';
import ContentGrid from '../components/common/ContentGrid';

const Live = () => {
  const { isLoggedIn } = usePortal();
  const { data: channels, isLoading, error } = usePortalData(getLiveStreams);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  if (isLoading) {
    return <Spinner message="Chargement des chaînes en direct..." />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Direct TV ({channels.length})</h1>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      
      {!error && channels.length === 0 ? (
        <EmptyState message="Aucune chaîne de télévision en direct trouvée sur ce portail." />
      ) : (
        <ContentGrid items={channels} />
      )}
    </div>
  );
};

export default Live;
