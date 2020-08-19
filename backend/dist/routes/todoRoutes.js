"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const todoControllers_1 = require("../controllers/todoControllers");
exports.router = express_1.Router();
exports.router.get('/todo', todoControllers_1.getTodo);
exports.router.get('/todo/:status', todoControllers_1.getTodoByStatus);
exports.router.post('/todo', todoControllers_1.addTodo);
exports.router.put('/todo/:id', todoControllers_1.updateTodo);
exports.router.delete('/todo/:id', todoControllers_1.deleteTodo);