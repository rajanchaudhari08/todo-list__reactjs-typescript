import { Fragment } from "react";
import { useRef, useContext } from "react";
import { TodoListContext } from "../../TodoListContext/todolist-context";
import styles from "./InputTodoList.module.css";

const InputTodoList: React.FC = () => {
  const todolistContext = useContext(TodoListContext);
  const refInputTitle = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputTitle = refInputTitle.current!.value;
    if (inputTitle.trim().length === 0) {
      return;
    }
    todolistContext.addTodoList(inputTitle);
    refInputTitle.current.value = "";
  };
  return (
    <Fragment>
      <form onSubmit={submitHandler} className={styles.form}>
        <label htmlFor="text">Title</label>
        <input type="text" id="text" ref={refInputTitle} />
        <button>Add TodoList</button>
      </form>
    </Fragment>
  );
};

export default InputTodoList;
