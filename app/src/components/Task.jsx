import React from "react";
const Task = ({ info, handler }) => {
  return (
    <li className="Todo" onClick={() => handler(info)}>
      {info.item}
    </li>
  );
};

export default Task;
