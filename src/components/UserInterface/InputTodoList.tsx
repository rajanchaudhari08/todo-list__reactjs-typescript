import { Fragment } from "react";
import { useRef } from "react";

const InputTodoList = () => {
  const refInputTitle = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputTitle = refInputTitle.current!.value;
    if (inputTitle.trim().length === 0) {
      return;
    }
  };
  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <label htmlFor="text">Title</label>
        <input type="text" id="text" ref={refInputTitle} />
        <button>Add TodoList</button>
      </form>
    </Fragment>
  );
};

export default InputTodoList;
