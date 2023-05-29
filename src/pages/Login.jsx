import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Section } from 'components/Section/Section';
import { INPUT_NAME } from 'servises/constants';
import { loginThunk } from 'redux/Auth/authOperations';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case INPUT_NAME.EMAIL:
        setEmail(e.target.value);
        break;
      case INPUT_NAME.PASSWORD:
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(loginThunk({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Section title="Login">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label style={{ marginRight: '30px' }}>
          E-mail:
          <input
            type="email"
            name={INPUT_NAME.EMAIL}
            value={email}
            onChange={handleChange}
          />
        </label>
        <label style={{ marginRight: '30px' }}>
          Password:
          <input
            type="password"
            name={INPUT_NAME.PASSWORD}
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" style={{ padding: '0 20px' }}>
          Login
        </button>
      </form>
    </Section>
  );
};
