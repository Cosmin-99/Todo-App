import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../database';

export const getTodo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM todos');

        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error , can't return data !!!");
    }
}

export const getTodoByStatus = async (req: Request, res: Response): Promise<Response> => {
    try {
        const status: string = req.params.status;
        const response: QueryResult = await pool.query('SELECT * FROM todos WHERE status LIKE $1', [status]);

        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);

        return res.status(500).json("Internal server error , can't return data !!!");
    }
}

export const addTodo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { titlu, status, responsabil, dataFinalizare, termenFINALIZARE } = req.body;
        const response: QueryResult = await pool.query('INSERT INTO todos (titlu, status, responsabil, dataFinalizare, termenFINALIZARE) VALUES ($1, $2, $3, $4, $5)', [titlu, status, responsabil, dataFinalizare, termenFINALIZARE]);

        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);

        return res.status(500).json("Internal server error , can't add data !!!");
    }
}

export const updateTodo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id: number = parseInt(req.params.id);
        const { titlu, status, responsabil, dataFinalizare, termenFINALIZARE } = req.body;

        await pool.query('UPDATE todos SET titlu = $1, status = $2, responsabil = $3, dataFinalizare = $4, termenFINALIZARE = $5 WHERE id = $6', [titlu, status, responsabil, dataFinalizare, termenFINALIZARE, id]);

        return res.status(200).json("Todo updated succesfully !!!");
    } catch (e) {
        console.log(e);

        return res.status(500).json("Error , can't update this todo");
    }
}

export const deleteTodo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id: number = parseInt(req.params.id);
        const response: QueryResult = await pool.query('DELETE FROM todos WHERE id = $1', [id]);

        return res.status(200).json("Todo deleted successfully :)");
    } catch (e) {
        console.log(e);

        return res.status(500).json("Server error , cannot delete this todo !!!");
    }
}