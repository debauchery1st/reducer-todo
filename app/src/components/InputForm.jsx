import React from "react";

const InputForm = ({ inputValue, handleAdd, handleChange }) => {
  return (
    <form onSubmit={handleAdd}>
      <input
        placeholder="new task"
        onChange={handleChange}
        value={inputValue}
      />
      <button>add</button>
    </form>
  );
};

export default InputForm;
