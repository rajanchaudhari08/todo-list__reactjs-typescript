import React from "react";
import { useState } from "react";
import TodoListDataModel from "../DataModel/TodoListDataModel";

type objectTodoListContext = {
  lists: TodoListDataModel[];
  addTodoList: (text: string) => void;
  deleteTodoList: (id: string) => void;
};

export const TodoListContext = React.createContext<objectTodoListContext>({
  lists: [],
  addTodoList: () => {},
  deleteTodoList: () => {},
});

const TodoListContextProvider: React.FC = (properties) => {
  // const todolist = [new TodoListDataModel("Learn TypeScript")];
  const [todolist, setTodoList] = useState<TodoListDataModel[]>([]);
  const inputTodoListHandler = (todolistContext: string) => {
    const inputTodoList = new TodoListDataModel(todolistContext);
    setTodoList((previousTodoList) => {
      return previousTodoList.concat(inputTodoList);
    });
  };
  const deleteTodoListHandler = (listID: string) => {
    setTodoList((previousTodoList) => {
      return previousTodoList.filter((todolist) => todolist.id !== listID);
    });
  };  
  const contextTodoList: objectTodoListContext = {
    lists: todolist,
    addTodoList: inputTodoListHandler,
    deleteTodoList: deleteTodoListHandler,
  };
  return (
    <TodoListContext.Provider value={contextTodoList}>
      {properties.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
