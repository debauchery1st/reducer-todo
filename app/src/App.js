import React, { useState } from "react";
import { useReducer } from "react";
import { reducer, initialState } from "./reducers/Todo.reducer";
import TodoList from "./components/TodoList";
import InputForm from "./components/InputForm";
import styled from "styled-components";

const ClearButton = styled.button`
  padding: 0.2rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
`;

const Container = styled.div`
  background-color: #35495e;
  color: #347474;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

function App() {
  const [tasks, dispatch] = useReducer(reducer, [initialState]);
  const [state, setState] = useState({ tasks, inputValue: "" });

  const handleChange = e => {
    setState({ tasks, inputValue: e.currentTarget.value });
  };

  // wrap at the top level to restrict component actions.

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
    dispatch({ type: "CLEAR_COMPLETE" });
    setState({ tasks: state.tasks, inputValue: state.inputValue }); // clear input
  };

  return (
    <Container className="App">
      <h1>Todo</h1>
      <TodoList tasks={tasks} handler={handleCompletness} />
      <ClearButton onClick={handleClear}>clear completed</ClearButton>
      <InputForm
        inputValue={state.inputValue}
        handleAdd={handleAdd}
        handleChange={handleChange}
      />
    </Container>
  );
}

export default App;
