import {Pool} from 'pg';

export const pool: Pool = new Pool({
    user: 'postgres',
    host: 'postgres',
    password: 'postgresadmin',
    database: 'todo',
    port: 5432,
    
});