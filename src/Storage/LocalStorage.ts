type Todo = {
  name: string;
  category: string;
  color: string;
};

export class LocalStorage {
  readonly storageKey = "todos";
  public getTodos() {
    return localStorage.getItem(this.storageKey);
  }

  public addTodo(todo: Todo) {
    let todos: any = this.getTodos();

    if (!todos) {
      todos = [] as string[];
    }
    todos = JSON.parse(todos);
    todos.push(todo);
    this.setTodos(todos);
  }

  private setTodos(todos: Todo[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }
}
