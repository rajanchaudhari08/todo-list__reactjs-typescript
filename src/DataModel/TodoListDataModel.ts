class TodoListDataModel {
  text: string;
  id: string;
  constructor(TodoListContext: string) {
    this.text = TodoListContext;
    this.id = new Date().toISOString();
  }
}

export default TodoListDataModel;
