import { todoService } from '../services/todo.service.js';

export const todocontroller = {};
todocontroller.create = async (req, res) => {
  const todo = await todoService.create(req.user.id, req.body);
  res.status(201).json({ success: true, data: todo });
};
todocontroller.update = async (req, res) => {
  const todo = await todoService.update(req.params.id, req.user.id, req.body);
  res.status(200).json({ success: true, data: todo });
};
todocontroller.getAll = async (req, res) => {
  const todos = await todoService.findAll(req.user.id);
  res.status(200).json({ todos });
};
