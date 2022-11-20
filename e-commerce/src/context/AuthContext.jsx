import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useSignInMutation } from '@/services/query/auth/auth';
import React, { createContext, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();

  const { data, mutate } = useSignInMutation();

  useEffect(() => {
    if (data) {
      setUser(data.token);
      navigate('/dashboard/home', { replace: true });
    }
  }, [data]);

  const login = async (values) => mutate(values);

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
