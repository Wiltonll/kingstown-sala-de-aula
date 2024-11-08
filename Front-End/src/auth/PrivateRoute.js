import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';


function PrivateRoute({ children }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/home-admin');
      } else if (user.role === 'user') {
        navigate('/home-user');
      } 
    }
  }, [user, navigate]);

  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;