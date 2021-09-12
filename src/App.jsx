import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { RootReducer } from "./Redux/combinedReducers";
import NavBar from "./Components/navBarComp/NavBar";
import MainComponent from "./Components/MainComponent";
import LoginRegisterMainComponent from "./Components/loginRegister/LoginRegisterMainComponent";

const store = createStore(RootReducer);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <NavBar />
          <MainComponent />
          <LoginRegisterMainComponent />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
