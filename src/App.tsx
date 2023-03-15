import { Fragment } from "react";
import TodoList from "./components/FunctionalDeployment/TodoList";
import TodoListDataModel from "./DataModel/TodoListDataModel";

const App = () => {
  const todolist = [new TodoListDataModel("Learn TypeScript")];

  return (
    <Fragment>
      <TodoList lists={todolist} />
    </Fragment>
  );
};

export default App;
