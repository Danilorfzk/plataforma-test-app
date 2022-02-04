import { createAuthProvider } from 'react-token-auth';

export const { useAuth, authFetch, login, logout } = createAuthProvider({
  accessTokenKey: 'access_token',
  onUpdateToken: (token) =>
    fetch('https://plataforma-test-app-api.herokuapp.com/auth/refresh', {
      method: 'POST',
      body: token.refresh_token,
    })
      .then((r) => r.json())
      .catch((err) => console.log(err)),
});
