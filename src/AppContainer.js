import "./App.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import App from "./App";

const mapStateToProps = state => ({ initialized: state.app.initialized });
const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

export default AppContainer;
