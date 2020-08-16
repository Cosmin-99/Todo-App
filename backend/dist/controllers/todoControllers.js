"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodoByStatus = exports.getTodo = void 0;
const database_1 = require("../database");
exports.getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM todos');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error , can't return data !!!");
    }
});
exports.getTodoByStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const status = req.params.status;
        const response = yield database_1.pool.query('SELECT * FROM todos WHERE status LIKE $1', [status]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error , can't return data !!!");
    }
});
exports.addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { titlu, status, responsabil, dataFinalizare, termenFINALIZARE } = req.body;
        const response = yield database_1.pool.query('INSERT INTO todos (titlu, status, responsabil, dataFinalizare, termenFINALIZARE) VALUES ($1, $2, $3, $4, $5)', [titlu, status, responsabil, dataFinalizare, termenFINALIZARE]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error , can't add data !!!");
    }
});
exports.updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { titlu, status, responsabil, dataFinalizare, termenFINALIZARE } = req.body;
        yield database_1.pool.query('UPDATE todos SET titlu = $1, status = $2, responsabil = $3, dataFinalizare = $4, termenFINALIZARE = $5 WHERE id = $6', [titlu, status, responsabil, dataFinalizare, termenFINALIZARE, id]);
        return res.status(200).json("Todo updated succesfully !!!");
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Error , can't update this todo");
    }
});
exports.deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('DELETE FROM todos WHERE id = $1', [id]);
        return res.status(200).json("Todo deleted successfully :)");
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Server error , cannot delete this todo !!!");
    }
});
