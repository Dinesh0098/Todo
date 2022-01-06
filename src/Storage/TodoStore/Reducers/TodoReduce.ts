const TodoReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        rotating: state,
      };
    case "ADD_TODO":
      const newState = state;
      newState.push(action.payload);
      return newState;
    case "SET_TODOS":
      return action.payload;
    default:
      return state;
  }
};

export default TodoReducer;
