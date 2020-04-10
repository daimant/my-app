import React, { Component } from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import {HashRouter} from "react-router-dom";
import Preloader from "./components/common/Preloader/Preloader";
import NavBar from "./components/NavBar/NavBar";
import HeaderContainer from "./components/Header/HeaderContainer";
import { withSuspense } from "./HOC/withSuspense";

const Login = React.lazy(() => import("./components/Login/Login"));
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const Friends = React.lazy(() => import("./components/Friends/Friends"));
const Music = React.lazy(() => import("./components/Music/Music"));
const News = React.lazy(() => import("./components/News/News"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    // if (!this.props.initialized) {
    //   return <Preloader />;
    // }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBar />
          <div className="app-wrapper-content">
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to={"/profile"} />}
              />
              <Route
                path="/profile/:userId?"
                render={withSuspense(ProfileContainer)}
              />
              <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
              <Route path="/users" render={withSuspense(UsersContainer)} />
              <Route path="/friends" render={withSuspense(Friends)} />
              <Route path="/music" render={withSuspense(Music)} />
              <Route path="/news" render={withSuspense(News)} />
              <Route path="/settings" render={withSuspense(Settings)} />
              <Route path="/login" render={withSuspense(Login)} />
              <Route path="*" render={() => <h1>Страница не найдена</h1>} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
