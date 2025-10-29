import { Navigate } from 'react-router-dom';
import { usePortal } from '../context/PortalContext';
import LoginForm from '../components/LoginForm';

const Home = () => {
  const { isLoggedIn } = usePortal();
  return isLoggedIn ? <Navigate to="/live" replace /> : <LoginForm />;
};

export default Home;
