import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
  const [row, fields] = await pool.execute("SELECT * FROM users");
  return res.render("index.ejs", { dataUser: row });
};
// Lấy danh sách người dùng User
let getDetailPage = async (req, res) => {
  let userId = req.params.userId;
  let [user] = await pool.execute("SELECT * FROM users WHERE id = ?", [userId]);
  console.log(user[0]);
  return res.send("Helo detail");
};
// Thêm mới người dùng User
let createNewUser = async (req, res) => {
  let { fisrtName, lastName, email, address } = req.body;
  await pool.execute(
    "insert into users(fisrtName, lastName, email, address) values (?, ?, ?, ?)",
    [fisrtName, lastName, email, address]
  );

  return res.redirect("/");
};
// Xóa người dùng User
let deleteUser = async (req, res) => {
  let userId = req.body.userId;
  await pool.execute("delete from users where id = ?", [userId]);
  return res.redirect("/");
};
// Edit người dùng User
let getEditPage = async (req, res) => {
  let userId = req.params.id;
  let [user] = await pool.execute("select * from users where id = ?", [userId]);
  return res.render("update.ejs", { dataUser: user[0] });
};
let postUpdateUser = async (req, res) => {
  let { fisrtName, lastName, email, address, id } = req.body;
  await pool.execute(
    "UPDATE users SET fisrtName = ?, lastName = ?, email= ?,address = ? WHERE id = ?",
    [lastName, fisrtName, email, address, id]
  );
  return res.redirect("/");
};
let getUploadFilePage = async (req, res) => {
  return res.render("uploadFile.ejs");
};
let handleUploadFile = async (req, res) => {

};

module.exports = {
  getHomepage,
  getDetailPage,
  createNewUser,
  deleteUser,
  getEditPage,
  postUpdateUser,
  getUploadFilePage,
  handleUploadFile

};
