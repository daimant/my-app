import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import AppSocialNetwork from "./App";

ReactDOM.render(<AppSocialNetwork />, document.getElementById("root"));

serviceWorker.unregister();
