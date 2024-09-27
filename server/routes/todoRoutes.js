// routes/todoRoutes.js
import { Hono } from 'hono';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todoController.js';

const router = new Hono();

router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
