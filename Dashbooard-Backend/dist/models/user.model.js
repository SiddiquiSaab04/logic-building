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
            password
        ]);
        return result;
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
    }
};
exports.default = UserModel;
