import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { userLoggedIn } from '../features/auth/authSlice';
import { getAccessToken } from '../Services/githubOAuth.service';
import Loader from '../components/common/Loader';

function RedirectOAuth() {
  const { role, user } = useSelector((state) => state?.auth) || {};
  const type = user?.type;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const code = searchParams.get('code');
    if (!code) {
      navigate('/login');
    } else {
      getAccess(code);
    }
  }, [navigate, searchParams]);

  async function getAccess(code) {
    try {
      const token = await getAccessToken(code);
      const user = token?.user;
      const accessToken = token?.accessToken;
      const role = token?.role;

      localStorage.setItem('role', role);
      localStorage.setItem('github-access-token', accessToken);

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

      if (role === 'instructor' || (role === 'student' && type !== 'alumni')) {
        navigate('/dashboard');
      } else if (role === 'student' && type === 'alumni') {
        navigate('/alumni/profile');
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  }

  return <Loader />;
}

export default RedirectOAuth;
