import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../Redux/actions";
import "./loginRegister.css";

export default function LoginWindow({
  switchToRegister,
  exit,
  errorMessage,
  setError,
}) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userInfo = {
    username: username.trim(),
    password: password.trim(),
  };

  return (
    <div className="windowContainer">
      <div>
        <span onClick={exit} className="exit">
          x
        </span>
      </div>
      <div>
        <h4>Login</h4>
      </div>
      <div>
        <p className="errorMessage">{errorMessage}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <div
          onClick={() => {
            dispatch(actions.login(userInfo));
            setError();
          }}
          className="button"
        >
          CONTINUE
        </div>
      </div>
      <div>
        <p>If you are new user?</p>
        <p onClick={switchToRegister} className="signIn">
          Register
        </p>
      </div>
    </div>
  );
}
