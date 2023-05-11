import pool from "../configs/connectDB";

let getAllUssers = async (req, res) => {
    const [row, fields] = await pool.execute("SELECT * FROM users");

    return res.status(200).json({
        message: 'ok',
        body: row,
    })
}
let createNewUser = async (req, res) => {
    // check fisrtName, lastName , email, address
    let { fisrtName, lastName, email, address } = req.body;
    if (!fisrtName || !lastName || !email || !address) {
        return res.status(400).json({ message: 'missing required data param' });
    }
    const [data, fields] = await pool.execute(
        "insert into users(fisrtName, lastName, email, address) values (?, ?, ?, ?)",
        [fisrtName, lastName, email, address]
    );
    return res.status(200).json({
        message: data,
    })
}
let updateUser = async (req, res) => {
    let { fisrtName, lastName, email, address, id } = req.body;
    if (!fisrtName || !lastName || !email || !address) {
        return res.status(400).json({ message: 'missing required data param edit' });
    }
    await pool.execute(
        "UPDATE users SET fisrtName = ?, lastName = ?, email= ?,address = ? WHERE id = ?",
        [lastName, fisrtName, email, address, id]
    );
    return res.status(200).json({
        message: 'ok',
    })
};
let deleteUser = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(400).json({ message: 'missing required data param edit' });
    }
    let logDel = await pool.execute("delete from users where id = ?", [userId]);
    return res.status(200).json({
        message: 'ok',
    })
};
module.exports = {
    getAllUssers,
    createNewUser,
    updateUser,
    deleteUser
}