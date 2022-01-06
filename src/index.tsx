import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./Components/TodoApp";
import { createStore } from "redux";
import rootReducer from "./Storage/TodoStore/Reducers/TodoReduce";
import { Provider } from "react-redux";
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
