// controllers/todoController.js
import Todo from '../models/todoModel.js';

// Get all todos
export const getTodos = async (c) => {
  const todos = await Todo.findAll();
  return c.json(todos);
};

// Create a new todo
export const createTodo = async (c) => {
  const { title } = await c.req.json();
  const todo = await Todo.create({ title });
  return c.json(todo, 201);
};

// Update a todo
export const updateTodo = async (c) => {
  const id = c.req.param('id');
  const { title, completed } = await c.req.json();
  const todo = await Todo.findByPk(id);

  if (!todo) {
    return c.json({ error: 'Todo not found' }, 404);
  }

  todo.title = title;
  todo.completed = completed;
  await todo.save();
  return c.json(todo);
};

// Delete a todo
export const deleteTodo = async (c) => {
  const id = c.req.param('id');
  const todo = await Todo.findByPk(id);

  if (!todo) {
    return c.json({ error: 'Todo not found' }, 404);
  }

  await todo.destroy();
  return c.json({ message: 'Todo deleted' });
};
