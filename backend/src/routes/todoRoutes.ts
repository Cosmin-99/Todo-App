import {Router} from 'express';
import {getTodo, getTodoByStatus, addTodo, updateTodo, deleteTodo} from '../controllers/todoControllers';

export const router: Router = Router();

router.get('/todo', getTodo);
router.get('/todo/:status',getTodoByStatus);
router.post('/todo',addTodo);
router.put('/todo/:id',updateTodo);
router.delete('/todo/:id',deleteTodo);