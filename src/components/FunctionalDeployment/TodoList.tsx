import { Fragment } from "react";
import TodoListDataModel from "../../DataModel/TodoListDataModel";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<{ lists: TodoListDataModel[] }> = (properties) => {
  return (
    <Fragment>
      <ul>
        {properties.lists.map((list) => (
          //   <li key={list.id}>{list.text}</li>
          <TodoListItem key={list.id} text={list.text} />
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
