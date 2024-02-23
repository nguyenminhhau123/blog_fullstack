import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import mySaga from "./redux/redux-saga/index.js";
import reducers from "./redux/reducers/index.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(mySaga);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
