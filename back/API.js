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
  connect.query('SELECT t_sw.switch_name,t_sw.switch_method,t_sw.switch_type,t_sp.gc_sf as spring_force,t_sw.switch_pitch,t_sw.switch_price,t_sw.maker,t_sw.infolink FROM `T_switch` t_sw JOIN (SELECT switch_id,GROUP_CONCAT(spring_force) as gc_sf FROM `T_spring` GROUP BY switch_id) t_sp ON t_sw.switch_id = t_sp.switch_id;', (error, results)=>{
    if(error) // 예외처리(error)
      throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log('Start running server on port 3001');
});