import React from "react";

type Props = {
  testing: boolean;
};

const TodoList = (props: Props) => {
  const { testing } = props;
  return (
    <div>
      <h1>Todo List</h1>
      <p>Testing: {testing ? "true" : "false"}</p>
    </div>
  );
};

export default TodoList;
