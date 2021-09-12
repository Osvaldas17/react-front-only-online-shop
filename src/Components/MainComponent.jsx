import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UploadItemPage from "./pages/UploadItemPage";
import SavedPage from "./pages/SavedPage";
import Cart from "./pages/Cart";
import SingleItemPage from "./pages/SingleItemPage";
import YourUploads from "./pages/YourUploadsPage";
import EditPage from "./pages/EditPage";
import { useSelector } from "react-redux";
import selectors from "../Redux/selectors";
import PrivateRoute from "./privateRoutes/PrivateRoute";

export default function MainComponent() {
  const registerWindowCheck = useSelector(selectors.toggleRegisterWindow);
  const loginWindowCheck = useSelector(selectors.toggleLoginWindow);
  const searcBarCheck = useSelector(selectors.searchBarToggle);

  return (
    <div>
      <Switch>
        <PrivateRoute exact path="/saved" component={SavedPage} />
        <PrivateRoute exact path="/edit-item/:id" component={EditPage} />
        <PrivateRoute exact path="/upload-item" component={UploadItemPage} />
        <PrivateRoute exact path="/shopping-cart" component={Cart} />
        <PrivateRoute exact path="/your-uploads" component={YourUploads} />
        <Route path="/single-item/:id">
          <SingleItemPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      {registerWindowCheck || loginWindowCheck || searcBarCheck ? (
        <div className="overlay"></div>
      ) : null}
    </div>
  );
}

// {/* <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} /> */}
