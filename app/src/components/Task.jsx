import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  texgt-align: left;
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  margin: 0.1rem;
  border-radius: 0.5rem;
  border: 0.1rem solid grey;
  background-color: #347474;
  color: #63b7af;
  &:hover {
    color: #f9fcfb;
    border: 0.1rem solid #ee8572;
  }
`;

const Task = ({ info, handler }) => {
  return (
    <ListItem
      className={info.completed ? "Todo-completed" : "Todo"}
      onClick={() => handler(info)}
    >
      {(info.completed ? "[✓] " : "[...] ") + info.item}
    </ListItem>
  );
};

export default Task;
