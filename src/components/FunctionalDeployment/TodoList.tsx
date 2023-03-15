import { Fragment } from "react";
import TodoListDataModel from "../../DataModel/TodoListDataModel";
import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css";

const TodoList: React.FC<{
  lists: TodoListDataModel[];
  onDeleteTodoList: () => void;
}> = (properties) => {
  return (
    <Fragment>
      <ul className={styles.todolist}>
        {properties.lists.map((list) => (
          //   <li key={list.id}>{list.text}</li>
          <TodoListItem
            key={list.id}
            text={list.text}
            onDeleteTodoList={properties.onDeleteTodoList.bind(null, list.id)}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
