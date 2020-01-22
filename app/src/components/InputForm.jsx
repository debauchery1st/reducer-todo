import React from "react";
import { InputBox, AddButton } from "./Styles";

const InputForm = ({ inputValue, handleAdd, handleChange }) => {
  return (
    <form onSubmit={handleAdd}>
      <InputBox
        placeholder="new task"
        onChange={handleChange}
        value={inputValue}
      />
      <AddButton>+</AddButton>
    </form>
  );
};

export default InputForm;
