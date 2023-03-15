import { Fragment } from "react";

const TodoListItem: React.FC<{ text: string }> = (properties) => {
  return (
    <Fragment>
      <li>{properties.text}</li>
    </Fragment>
  );
};

export default TodoListItem;
