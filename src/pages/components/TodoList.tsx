import React from "react";

type Props = {
  testing: boolean;
  todoData: [];
};

const TodoList = (props: Props) => {
  const { testing = "", todoData = [] } = props;
  if (todoData.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoData.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
