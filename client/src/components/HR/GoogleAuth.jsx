import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { useCreateUserMutation } from '../../features/user/userApi';
function GoogleAuth() {
  const [createUser, { data: createdUser, error, isLoading }] =
    useCreateUserMutation();
  console.log(createdUser);
  console.log(error);

  return (
    <div>
      <GoogleOAuthProvider clientId="531260105922-o9dbq6i20vtmdj6e80ndph5ftc839f7e.apps.googleusercontent.com">
        <GoogleLogin
          size="large"
          theme="outline"
          useOneTap
          onSuccess={(credentialResponse) => {
            const token = credentialResponse.credential;
            const decode = jwt_decode(token);
            const user = {
              name: decode.given_name,
              email: decode.email,
              role: 'hr',
              githubUsername: 'hr-dummy-github',
            };
            createUser(user);
            // console.log(user);

            Cookies.set(
              'hrauth',
              JSON.stringify({
                accessToken: token,
                user: user,
                role: user.role,
              }),
              { expires: 1 } // 1 day
            );
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          // type={'icon'}
        />
      </GoogleOAuthProvider>
      {/* asdasf */}
    </div>
  );
}

export default GoogleAuth;
