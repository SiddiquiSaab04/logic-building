"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../database/db");
const UserModel = {
    createUser: async (name, email, password) => {
        const query = `
        Insert into users(name,email,password)
        VALUES
        (?,?,?)
        `;
        const [result] = await db_1.db.execute(query, [
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
    findByEmail: async (email) => {
        const query = `SELECT * FROM users WHERE email = ?`;
        const [rows] = await db_1.db.execute(query, [email]);
        return rows[0];
    },
    findById: async (id) => {
        const query = `SELECT * FROM users WHERE id = ?`;
        const [rows] = await db_1.db.execute(query, [id]);
        return rows[0];
    },
    getAllUsers: async () => {
        const query = `SELECT id, name, email, created_at FROM users`;
        const [rows] = await db_1.db.execute(query);
        return rows;
    },
    updateUser: async (id, name, email, password) => {
        let query = `UPDATE users SET  `;
        const values = [];
        if (name !== undefined) {
            query += `name = ? , `;
            values.push(name);
        }
        if (email !== undefined) {
            query += `email = ? , `;
            values.push(email);
        }
        if (password !== undefined) {
            query += `password = ? , `;
            values.push(password);
        }
        query = query.slice(0, -2);
        query += ` WHERE id = ?`;
        values.push(id);
        const [result] = await db_1.db.execute(query, values);
        return result;
    },
    deleteUser: async (id) => {
        const query = `DELETE FROM users WHERE id = ?`;
        const [result] = await db_1.db.execute(query, [id]);
        return result;
    }
};
exports.default = UserModel;
