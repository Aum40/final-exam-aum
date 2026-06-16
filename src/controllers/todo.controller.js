import { todoService } from '../services/todo.service.js';

export const todocontroller = {};
todocontroller.create = async (req, res) => {
  const todo = await todoService.create(req.user.id, req.body);
  console.log('first');
  res.status(201).json(todo);
};
