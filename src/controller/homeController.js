import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
  const [row, fields] = await pool.execute("SELECT * FROM users");
  return res.render("index.ejs", { dataUser: row });
};
let getDetailPage = async (req, res) => {
  let userId = req.params.userId;
  let [user] = await pool.execute("SELECT * FROM users WHERE id = ?", [userId]);
  console.log(user[0]);
  return res.send("Helo detail");
};
let createNewUser = async (req, res) => {
  let { fisrtName, lastName, email, address } = req.body;

  await pool.execute(
    "insert into users(fisrtName, lastName, email, address) values (?, ?, ?, ?)",
    [fisrtName, lastName, email, address]
  );

  return res.redirect("/");
};

module.exports = {
  getHomepage,
  getDetailPage,
  createNewUser,
};
