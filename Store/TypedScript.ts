interface Todos {
  id: number;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

type SingleTodo = { todo: Todos };

export { Todos, SingleTodo };
