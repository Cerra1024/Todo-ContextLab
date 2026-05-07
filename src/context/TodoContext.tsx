import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Todo } from '../types';

interface TodoContextValue {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  clearCompleted: () => void;
}

const TodoContext = createContext<TodoContextValue | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      return JSON.parse(savedTodos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(text: string) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  }

  function toggleTodo(id: string) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id: string) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function editTodo(id: string, newText: string) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }

  function clearCompleted() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodos must be used inside TodoProvider');
  }

  return context;
}