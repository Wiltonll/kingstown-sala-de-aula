import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

function PrivateRoute({ children, role }) {
  const { user } = useAuth();
  const location = useLocation();

  // Se o usuário não estiver autenticado, redireciona para login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Redireciona para a página correta caso o usuário esteja na rota errada
  if (user.role !== role) {
    const targetPath = user.role === 'admin' ? '/home-admin' : '/home-user';
    if (location.pathname !== targetPath) {
      return <Navigate to={targetPath} />;
    }
  }

  // Renderiza o conteúdo protegido
  return children;
}

export default PrivateRoute;