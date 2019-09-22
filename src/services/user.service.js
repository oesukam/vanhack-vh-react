const handleResponse = response => {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
};

const login = (username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  // call `/users/authenticate` with requestOptions to authenticate the login process
  return fetch('/users/authenticate', requestOptions).then(handleResponse);
};

const logout = () => {
  // remove user from local storage to log user out
};

const register = user => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch('/users/register', requestOptions).then(handleResponse);
};

export const userService = {
  login,
  logout,
  register
};
