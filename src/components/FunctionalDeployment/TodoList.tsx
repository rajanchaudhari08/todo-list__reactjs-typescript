import { Fragment, useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodoListContext } from "../../TodoListContext/todolist-context";
import styles from "./TodoList.module.css";

const TodoList: React.FC = () => {
  const todolistContext = useContext(TodoListContext);
  return (
    <Fragment>
      <ul className={styles.todolist}>
        {todolistContext.lists.map((list) => (
          //   <li key={list.id}>{list.text}</li>
          <TodoListItem
            key={list.id}
            text={list.text}
            onDeleteTodoList={todolistContext.deleteTodoList.bind(
              null,
              list.id
            )}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
