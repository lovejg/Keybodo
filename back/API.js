const express=require('express');
const mysql=require('mysql');

const app=express();
const port=3000; // use localhost:3000

const connect=mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'keybodo',
});

app.use(express.json());

app.get('/api/data', (req,res)=>{
  connect.query('SELECT * FROM T_switch', (error, results)=>{
    if(error) // 예외처리(error)
      throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log('Start running server on port 3000');
});