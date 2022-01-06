export type Todo = {
    id: string;
    name: string;
    category: string;
    color: string;
  };
  
  export class LocalStorage {
    readonly storageKey = "todos";
    public getTodos() {
      const todos = localStorage.getItem(this.storageKey);
  
      return todos ? JSON.parse(todos) : [];
    }
  
    public addTodo(todo: Todo) {
      let todos = this.getTodos();
  
      todos.push(todo);
      this.setTodos(todos);
    }
  
    private setTodos(todos: Todo[]) {
      localStorage.setItem(this.storageKey, JSON.stringify(todos));
    }
  }
  