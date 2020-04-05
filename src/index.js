import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import AppSocialNetwork from "./AppSocialNetwork";

ReactDOM.render(<AppSocialNetwork />, document.getElementById("root"));

serviceWorker.unregister();
