import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { login } from "./api";

function LoginPage() {
  const { login: onLogin } = useContext(UserContext);
  const [loginState, setLoginState] = useState({
    error: null,
    loading: false,
    username: "",
    password: "",
  });
  const { username, password, error, loading } = loginState;

  const handleInputChange = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginState({ ...loginState, loading: true, error: null });
    login(username, password)
      .then((user) => {
        setLoginState({ ...loginState, loading: false });
        onLogin(user);
      })
      .catch((error) =>
        setLoginState({ ...loginState, error, loading: false })
      );
  };

  return (
    <div className="LoginPage">
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>
        {error && <div className="error">{error.message}</div>}
        <button type="submit" disabled={loading}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
