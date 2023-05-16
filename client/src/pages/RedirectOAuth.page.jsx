import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAccessToken } from '../Services/githubOAuth.service';

function RedirectOAuth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('github-access-token');
    if (token) navigate('/dashboard');

    const code = searchParams.get('code');
    if (!code) navigate('/login');
    getAccess(code);
    navigate('/dashboard');
  }, []);

  async function getAccess(code) {
    try {
      const token = await getAccessToken(code);

      const userString = JSON.stringify(token?.user);
      const tokenString = JSON.stringify(token?.accessToken);
      const role = JSON.stringify(token?.role);
      localStorage.setItem('user', userString);
      localStorage.setItem('github-access-token', tokenString);
      localStorage.setItem('role', role);

      // console.log('token', token);
      // navigate('/dashboard');
    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  }

  return <div></div>;
}

export default RedirectOAuth;
