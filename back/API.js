const express=require('express');
const mysql=require('mysql');

const app=express();
const port=3001; // use localhost:3001 (react가 3000을 써서 3001로 변경)
const cors = require('cors'); // 혹시 모를 정책 대비

const connect=mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'keybodo',
});

app.use(cors());
app.use(express.json());

app.get('/api/data', (req,res)=>{
  connect.query('SELECT * FROM V_switches WHERE switch_method LIKE "기계식";', (error, results)=>{
    if(error) // 예외처리(error)
      throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log('Start running server on port 3001');
});