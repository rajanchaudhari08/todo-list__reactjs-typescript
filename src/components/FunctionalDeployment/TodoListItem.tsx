import { Fragment } from "react";
import styles from "./TodoListItem.module.css";

const TodoListItem: React.FC<{ text: string }> = (properties) => {
  return (
    <Fragment>
      <li className={styles.list}>{properties.text}</li>
    </Fragment>
  );
};

export default TodoListItem;
