import { Fragment } from "react";
import styles from "./TodoListItem.module.css";

const TodoListItem: React.FC<{
  text: string;
  onDeleteTodoList: (event: React.MouseEvent) => void;
}> = (properties) => {
  return (
    <Fragment>
      <li className={styles.list} onClick={properties.onDeleteTodoList}>
        {properties.text}
      </li>
    </Fragment>
  );
};

export default TodoListItem;
