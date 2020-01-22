import React, { useState, useEffect } from "react";
import { useReducer } from "react";
import { reducer, initialState } from "./reducers/Todo.reducer";
import TodoList from "./components/TodoList";
import InputForm from "./components/InputForm";
import { RowContainer, Container, Image } from "./components/Styles";
import useLocalstorage from "./hooks/useLocalStorage";

function App() {
  const [state, setState] = useState({
    tasks: [initialState],
    inputValue: "",
    loaded: false
  });
  const [localStore, setLocalStore] = useLocalstorage(
    "todoReducer",
    state.tasks
  );
  const [tasks, dispatch] = useReducer(reducer, state.tasks);
  useEffect(() => {
    if (state.loaded) return;
    setState({ ...state, loaded: true });
    dispatch({ type: "LOAD", storage: localStore.todoReducer });
  }, [localStore.todoReducer, state]);

  const handleChange = e => {
    setState({ tasks, inputValue: e.currentTarget.value });
  };
  // wrap at the top level to restrict component actions.

  const handleCompletness = task => {
    dispatch({ type: "TOGGLE", payload: task, writer: setLocalStore });
    setState({ tasks: [...state.tasks], inputValue: state.inputValue });
  };

  const handleAdd = e => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: state.inputValue, writer: setLocalStore });
    setState({ tasks: [...state.tasks], inputValue: "" }); // clear input
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_COMPLETE", writer: setLocalStore });
    setState({ tasks: state.tasks, inputValue: state.inputValue }); // clear input
  };

  return (
    <Container className="App">
      <h1>Todo</h1>
      <TodoList
        tasks={tasks}
        handler={handleCompletness}
        localStore={localStore.todoReducer}
      />
      <RowContainer>
        <Image
          src="/trashcan.svg"
          onClick={handleClear}
          alt="Clear completed tasks"
          title="Clear completed tasks"
        />
        <InputForm
          inputValue={state.inputValue}
          handleAdd={handleAdd}
          handleChange={handleChange}
        />
      </RowContainer>
    </Container>
  );
}

export default App;
