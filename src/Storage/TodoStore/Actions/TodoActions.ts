import { Todo } from "../../LocalStorage";

export const getTodos = () => {
  return {
    type: "GET_TODOS",
  };
};

export const addTodo = (payload: Todo) => {
  return {
    type: "ADD_TODO",
    payload: payload,
  };
};

export const setTodos = (payload: Todo[]) => {
  return {
    type: "SET_TODOS",
    payload: payload,
  };
};
