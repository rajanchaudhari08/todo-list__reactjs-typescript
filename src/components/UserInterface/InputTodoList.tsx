import { Fragment } from "react";
import { useRef } from "react";
import styles from "./InputTodoList.module.css";

const InputTodoList: React.FC<{ onInputTodoList: (text: string) => void }> = (
  properties
) => {
  const refInputTitle = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputTitle = refInputTitle.current!.value;
    if (inputTitle.trim().length === 0) {
      return;
    }
    properties.onInputTodoList(inputTitle);
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
