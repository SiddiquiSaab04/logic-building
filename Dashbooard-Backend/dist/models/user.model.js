import db from "../database/db";
const UserModel = {
    createUser: async (name, email, hashedPassword) => {
        const query = `
        Insert into users(name,email,hashedPassword)
        VALUES
        (?,?,?)
        `;
        const [result] = await db.execute(query, [
            name,
            email,
            hashedPassword
        ]);
        return result;
    },
    findByEmail: async (email) => {
        const query = `SELECT * FROM users WHERE email = ?`;
        const [rows] = await db.execute(query, [email]);
        return rows[0];
    },
    findById: async (id) => {
        const query = `SELECT * FROM users WHERE id = ?`;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }
};
export default UserModel;
