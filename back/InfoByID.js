const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3003;
const cors = require("cors"); // 혹시 모를 정책 대비

const connect = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "keybodo",
});

app.use(cors());
app.use(express.json());

app.post("/api/info", (req, res) => {
  // 유저로부터 switch_name을 받는다.
  const switchId = req.body.switch_id;

  connect.query(
    "SELECT * FROM `V_switches` WHERE switch_id = ?;",
    [switchId],
    (error, results) => {
      if (error)
        // 예외처리(error)
        throw error;
      res.json(results);
    }
  );
});

app.listen(port, () => {
  console.log("Start running server on port 3003");
});
