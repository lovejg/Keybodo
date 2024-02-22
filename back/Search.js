const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3002;
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

app.post("/api/search", (req, res) => {
  // 유저로부터 switch_name을 받는다.
  let switchName = req.body.switch_name;
  if (switchName === "") switchName = "%";
  else {
    // 문자열의 공백 제거
    switchName = switchName.trim().replace(/ /g, "");
    // 한글, 영어, 숫자만 허용하는 정규 표현식
    const pattern = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9]+$/;
    // 유저의 입력값이 유효한지 확인
    if (!pattern.test(switchName)) {
      switchName = "%";
    } else {
      switchName =
        "%" + switchName.split("").join(" ").replace(/ /g, "%") + "%";
    }
  }

  connect.query(
    "SELECT * FROM `V_switches` WHERE switch_name LIKE ? AND switch_method LIKE '기계식';",
    [switchName],
    (error, results) => {
      if (error)
        // 예외처리(error)
        throw error;
      res.json(results);
    }
  );
});

app.listen(port, () => {
  console.log("Start running server on port 3002");
});
