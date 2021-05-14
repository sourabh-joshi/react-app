import React, { useState } from 'react';
import Dropdown from './Dropdown';
import mybackend from '../api/mybackend';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import Link from './Link';

const genders = [
  {
    label: 'Male',
    value: 'M'
  },
  {
    label: 'Female',
    value: 'F'
  }
];

const countries = [
  {
    label: 'India',
    value: 'in'
  },
  {
    label: 'China',
    value: 'cn'
  },
  {
    label: 'Cambodia',
    value: 'kh'
  },
  {
    label: 'United States',
    value: 'us'
  }
];

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState(genders[0]);
  const [country, setCountry] = useState(countries[0]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const onSignupSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await mybackend.post('/signup', {
        firstName,
        lastName,
        username,
        password,
        gender,
        country
      });
      console.log(response);
      setSuccessMessage("You're all signed up!");
    } catch (error) {
      console.log(error.response);
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div className="ui one column page padded grid">
      <div className="ui column">
        <form
          className={`ui form ${errorMessage ? 'error' : ''} ${
            successMessage ? 'success' : ''
          }`}
          onSubmit={onSignupSubmit}
        >
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onFocus={() => setErrorMessage(null)}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onFocus={() => setErrorMessage(null)}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="two fields">
              <div className="field">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={() => setErrorMessage(null)}
                />
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setErrorMessage(null)}
                />
              </div>
            </div>
            <div className="field">
              <div className="two fields">
                <div className="field">
                  <Dropdown
                    label="Select Gender"
                    options={genders}
                    selectedItem={gender}
                    onSelectedItemChange={setGender}
                    onFocus={() => setErrorMessage(null)}
                  />
                </div>
                <div className="field">
                  <Dropdown
                    label="Select Country"
                    options={countries}
                    selectedItem={country}
                    onSelectedItemChange={setCountry}
                    onFocus={() => setErrorMessage(null)}
                  />
                </div>
              </div>
            </div>
          </div>
          <ErrorMessage message={errorMessage} />
          <SuccessMessage message={successMessage} />
          <button className="ui fluid primary button" type="submit">
            Sign Up
          </button>
          <div className="ui horizontal divider">or</div>
          <Link className="fluid ui secondary button" href="/">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
