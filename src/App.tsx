import { Fragment, useState } from "react";
import TodoList from "./components/FunctionalDeployment/TodoList";
import InputTodoList from "./components/UserInterface/InputTodoList";
import TodoListDataModel from "./DataModel/TodoListDataModel";

const App = () => {
  // const todolist = [new TodoListDataModel("Learn TypeScript")];
  const [todolist, setTodoList] = useState<TodoListDataModel[]>([]);
  const inputTodoListHandler = (todolistContext: string) => {
    const inputTodoList = new TodoListDataModel(todolistContext);
    setTodoList((previousTodoList) => {
      return previousTodoList.concat(inputTodoList);
    });
  };
  return (
    <Fragment>
      <InputTodoList onInputTodoList={inputTodoListHandler} />
      <TodoList lists={todolist} />
    </Fragment>
  );
};

export default App;
