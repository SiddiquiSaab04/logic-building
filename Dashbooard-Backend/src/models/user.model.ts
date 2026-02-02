import { db } from "../database/db";
import type { User } from "../interface/user";
import type { RowDataPacket, ResultSetHeader } from "mysql2/promise";

const UserModel = {
    createUser: async (
        name: string,
        email: string,
        password: string,
    ): Promise<User> => {
        const query = `
        Insert into users(name,email,password)
        VALUES
        (?,?,?)
        `;
        const [result] = await db.execute<ResultSetHeader>(query, [
            name,
            email,
            password,
        ]);
        return {
            id: result.insertId,
            name,
            email,
            password,
            created_at: new Date(),
        };
    },

    findByEmail: async (email: string): Promise<User | undefined> => {
        const query = `SELECT * FROM users WHERE email = ?`;
        const [rows] = await db.execute<RowDataPacket[]>(query, [email]);
        return rows[0] as User;
    },

    findById: async (id: number): Promise<User | undefined> => {
        const query = `SELECT * FROM users WHERE id = ?`;
        const [rows] = await db.execute<RowDataPacket[]>(query, [id]);
        return rows[0] as User;
    },

    getAllUsers: async (): Promise<User[]> => {
        const query = `SELECT id, name, email, created_at FROM users`;
        const [rows] = await db.execute<RowDataPacket[]>(query);
        return rows as User[];
    },

    updateUser: async (id: number, name?: string, email?: string, password?: string): Promise<ResultSetHeader> => {
        let query = `UPDATE users SET name = ?, email = ? `;
        const values: any[] = [name, email];

        if (password) {
            query += `, password = ?`;
            values.push(password);
        }
        query += ` WHERE id = ?`;
        values.push(id);
        const [result] = await db.execute<ResultSetHeader>(query, values);
        return result ;
    }
};

export default UserModel;
