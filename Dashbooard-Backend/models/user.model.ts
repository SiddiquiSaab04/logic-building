import db from "../database/db";
import type { User } from "../interface/User.ts";
import type { RowDataPacket, ResultSetHeader } from "mysql2/promise";

const UserModel = {

    createUser: async (name: string, email: string, hashedPassword: string): Promise<User> => {
        const query = `
        Insert into users(name,email,hashedPassword)
        VALUES
        (?,?,?)
        `
        const [result] = await db.execute<ResultSetHeader>(query, [
            name,
            email,
            hashedPassword
        ])
        return (result as any);
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
}}

export default UserModel;