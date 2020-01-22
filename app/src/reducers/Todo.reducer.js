const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};

const reducer = (state, action) => {
  const idx = state.indexOf(action.payload) || 0;
  switch (action.type) {
    case "ADD":
      const added = [
        ...state,
        {
          ...initialState,
          item: action.payload,
          id: new Date().getTime()
        }
      ];
      action.writer(added);
      return added;
    case "REMOVE":
      const removed = [...state.slice(0, idx), ...state.slice(idx + 1)];
      action.writer(removed);
      return removed;
    case "TOGGLE":
      const toggled = [
        ...state.slice(0, idx),
        { ...action.payload, completed: !action.payload.completed },
        ...state.slice(idx + 1)
      ];
      action.writer(toggled);
      return toggled;
    case "CLEAR_COMPLETE":
      const cleared = state.filter(task => task.completed === false);
      action.writer(cleared);
      return cleared;
    default:
      return state;
  }
};

export { initialState, reducer };
