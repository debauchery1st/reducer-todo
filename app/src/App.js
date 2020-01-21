import React, { useState } from "react";
import { useReducer } from "react";
import { reducer, initialState } from "./reducers/Todo.reducer";
import TodoList from "./components/TodoList";
import InputForm from "./components/InputForm";

function App() {
  const [tasks, dispatch] = useReducer(reducer, [initialState]);
  const [state, setState] = useState({ tasks, inputValue: "" });
  const handleChange = e => {
    setState({ tasks, inputValue: e.currentTarget.value });
  };
  const handleCompletness = task => {
    dispatch({ type: "TOGGLE", payload: task });
    setState({ tasks: state.tasks, inputValue: state.inputValue });
  };
  const handleAdd = e => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: state.inputValue });
    setState({ tasks: state.tasks, inputValue: "" }); // clear input
  };
  const handleClear = () => {
    console.log("clear");
    dispatch({ type: "CLEAR_COMPLETE" });
    setState({ tasks: state.tasks, inputValue: state.inputValue }); // clear input
  };
  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoList tasks={tasks} handler={handleCompletness} />
      <InputForm
        inputValue={state.inputValue}
        handleAdd={handleAdd}
        handleChange={handleChange}
      />
      <button onClick={handleClear}>clear completed</button>
    </div>
  );
}

export default App;
