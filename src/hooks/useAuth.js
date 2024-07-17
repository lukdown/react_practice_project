import { useState, useEffect } from 'react';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // 인증 상태를 확인하는 로직을 여기에 추가
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated;
}

export default useAuth;
