const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};

const reducer = (state, action) => {
  const idx = state.indexOf(action.payload);
  switch (action.type) {
    case "ADD":
      return { ...state, id: new Date(), item: action.payload };
    case "REMOVE":
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case "TOGGLE":
      return [
        ...state.slice(0, idx),
        { ...action.payload, completed: !action.payload.completed },
        ...state.slice(idx + 1)
      ];
    default:
      return state;
  }
};

export { initialState, reducer };
