import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
//dev-cogazt11txyexai2.us.auth0.com
//iAIXA3AWLopzqSoisqCGjCszLtwYgu57
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-cogazt11txyexai2.us.auth0.com"
    clientId="iAIXA3AWLopzqSoisqCGjCszLtwYgu57"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
    >
      <BrowserRouter>
        <GithubProvider>
          <App />
        </GithubProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
