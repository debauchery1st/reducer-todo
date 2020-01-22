import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
  padding: 0.5rem;
  font-size: large;
  border-radius: 0.5rem;
  margin: 0.5rem;
`;

const AddButton = styled.button`
  border-radius: 0.5rem;
`;

const InputForm = ({ inputValue, handleAdd, handleChange }) => {
  return (
    <form onSubmit={handleAdd}>
      <InputBox
        placeholder="new task"
        onChange={handleChange}
        value={inputValue}
      />
      <AddButton>add</AddButton>
    </form>
  );
};

export default InputForm;
