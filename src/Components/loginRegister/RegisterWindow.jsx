import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../Redux/actions";
import "./loginRegister.css";

export default function RegisterWindow({
  switchToLogin,
  exit,
  errorMessage,
  setError,
}) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const userInfo = {
    username: username.trim(),
    password: password1.trim(),
    password2: password2.trim(),
  };

  return (
    <div className="windowContainer">
      <div>
        <span onClick={exit} className="exit">
          x
        </span>
      </div>
      <div>
        <h4>Register</h4>
      </div>
      <div>
        <p className="errorMessage">{errorMessage}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword1(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Repeat password"
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>
      <div>
        <div
          onClick={() => {
            dispatch(actions.register(userInfo));
            setError();
          }}
          className="button"
        >
          CONTINUE
        </div>
      </div>
      <div>
        <p>Already have an account?</p>
        <p onClick={switchToLogin} className="signIn">
          Sign in
        </p>
      </div>
    </div>
  );
}
