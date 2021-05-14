import React, { useState } from 'react';
import mybackend from '../api/mybackend';
import ErrorMessage from './ErrorMessage';
import Link from './Link';
import { redirectTo } from './Redirect';

const USERNAME_EMPTY_ERROR_MSG = 'Username cannot be empty';
const PASSWORD_EMPTY_ERROR_MSG = 'Password cannot be empty';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const onLoginSubmit = async (event) => {
    event.preventDefault();
    if (!username) {
      setErrorMessage(USERNAME_EMPTY_ERROR_MSG);
      return;
    }
    if (!password) {
      setErrorMessage(PASSWORD_EMPTY_ERROR_MSG);
      return;
    }
    try {
      const response = await mybackend.post('/login', {
        username,
        password
      });
      console.log(response);
      redirectTo('/signup');
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div className="ui one column center aligned page padded grid">
      <div className="ui column twelve wide">
        <form
          className={`ui form ${errorMessage ? 'error' : ''}`}
          onSubmit={onLoginSubmit}
        >
          <div className="field">
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setErrorMessage(null)}
            />
          </div>
          <div className="field">
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setErrorMessage(null)}
            />
          </div>
          <ErrorMessage message={errorMessage} />
          <button className="fluid ui primary button" type="submit">
            Login
          </button>
          <div className="ui horizontal divider">or</div>
          <Link className="fluid ui secondary button" href="/signup">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
