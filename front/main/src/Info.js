import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Info() {
  const [data, setData] = useState({}); // 데이터를 저장할 상태 선언
  let {id}=useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/data/${id}`);
        setData(response.data); // 단일 아이템 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [id]);

  // error 처리
  if (!data) {
    return <div>Loading...</div>;
  }

  // 화면에 데이터를 렌더링
  return (
    <div>
      <ul>
          <li key={`switch-${data.switch_id}`}>
          {data.switch_name}
          <ul>
            <li>동작 방식: {data.switch_method}</li>
            <li>스위치: {data.switch_type}</li>
            <li>피치(pitch): {data.switch_pitch}</li>
            <li>키압(바닥압 기준): {data.spring_force}g</li>
            <li>가격: ${data.switch_price}</li>
            <li>제조사: {data.maker}</li>
            <li><a href={data.infolink} target="_blank" rel="noopener noreferrer">More Info</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Info;