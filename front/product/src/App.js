import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axios 사용해서 API와 연결

function App() {
  const [data, setData] = useState([]); // 데이터를 저장할 상태 선언

  // 컴포넌트가 마운트될 때 데이터를 가져오기
  useEffect(() => {
    fetchData();
  }, []); // 빈 배열은 컴포넌트가 마운트될 때만 fetchData를 호출하게 함

  // 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      // axios를 사용하여 데이터 요청
      const response = await axios.get('http://localhost:3001/api/data'); // 사용 포트 명시해주기(db는 3001)
      setData(response.data); // 가져온 데이터를 상태에 저장
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // 화면에 데이터를 렌더링
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={`switch-${item.switch_id}`}>
          {item.switch_name}
          <ul>
            <li>동작 방식: {item.switch_method}</li>
            <li>스위치: {item.switch_type}</li>
            <li>피치(pitch): {item.switch_pitch}</li>
            <li>키압(바닥압 기준): {item.spring_force}g</li>
            <li>가격: ${item.switch_price}</li>
            <li>제조사: {item.maker}</li>
            <li><a href={item.infolink} target="_blank" rel="noopener noreferrer">More Info</a></li>
          </ul>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App;