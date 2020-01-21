const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};

const reducer = (state, action) => {
  const idx = state.indexOf(action.payload) || 0;
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          ...initialState,
          item: action.payload,
          id: new Date().getTime()
        }
      ];
    case "REMOVE":
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case "TOGGLE":
      return [
        ...state.slice(0, idx),
        { ...action.payload, completed: !action.payload.completed },
        ...state.slice(idx + 1)
      ];
    case "CLEAR_COMPLETE":
      return state.filter(task => task.completed === false);
    default:
      return state;
  }
};

export { initialState, reducer };
