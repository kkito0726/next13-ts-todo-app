import { Task } from "./types";

const API_PORT: number = 3001;

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`http://localhost:${API_PORT}/tasks`, {
    cache: "no-store", // SSR
  });
  const todos: Promise<Task[]> = res.json();

  return todos;
};

export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`http://localhost:${API_PORT}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  const newTodo: Promise<Task> = res.json();

  return newTodo;
};

export const editTodo = async (id: string, newText: string): Promise<Task> => {
  const res = await fetch(`http://localhost:${API_PORT}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: newText }),
  });
  const updatedTodo: Promise<Task> = await res.json();

  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<Task> => {
  const res = await fetch(`http://localhost:${API_PORT}/tasks/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const deleteTodo: Promise<Task> = await res.json();

  return deleteTodo;
};
