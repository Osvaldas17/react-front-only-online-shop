import LoginWindow from "./LoginWindow";
import RegisterWindow from "./RegisterWindow";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../Redux/selectors";
import { actions } from "../../Redux/actions";

export default function LoginRegisterMainComponent() {
  const dispatch = useDispatch();

  const loginCheck = useSelector(selectors.toggleLoginWindow);
  const registerCheck = useSelector(selectors.toggleRegisterWindow);
  const errorMessage = useSelector(selectors.errorMessage);

  const setError = () => {
    let timer = setTimeout(() => {
      dispatch(actions.resetError());
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <div>
      {loginCheck ? (
        <LoginWindow
          switchToRegister={() => dispatch(actions.showRegisterWindow())}
          exit={() => dispatch(actions.hideLoginWindow())}
          errorMessage={errorMessage}
          setError={setError()}
        />
      ) : null}
      {registerCheck ? (
        <RegisterWindow
          switchToLogin={() => dispatch(actions.showLoginWindow())}
          exit={() => dispatch(actions.hideRegisterWindow())}
          errorMessage={errorMessage}
          setError={setError()}
        />
      ) : null}
    </div>
  );
}
