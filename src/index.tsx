import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App/App"
import GlobalStyles from "./GlobalStyles/GlobalStyles"

import store from "./store/store"

import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
)
