import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { userLoggedIn } from '../features/auth/authSlice';
import { getAccessToken } from '../Services/githubOAuth.service';
function RedirectOAuth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

      const user = token?.user;
      const accessToken = token?.accessToken;
      const role = token?.role;

      localStorage.setItem('role', role);

      Cookies.set(
        'auth',
        JSON.stringify({
          accessToken: accessToken,
          user: user,
          role: role,
        }),
        { expires: 1 } // 1 day
      );
      dispatch(
        userLoggedIn({
          accessToken: accessToken,
          user: user,
          role: role,
        })
      );
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
