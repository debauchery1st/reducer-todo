import React from "react";
import { ListItem } from "./Styles";

const Task = ({ info, handler }) => {
  return (
    <ListItem
      title={info.item}
      overflow="ellipsis"
      className={info.completed ? "Todo-completed" : "Todo"}
      onClick={() => handler(info)}
    >
      {(info.completed ? "[✓] " : "[...] ") + info.item}
    </ListItem>
  );
};

export default Task;
