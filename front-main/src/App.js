import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axios를 import합니다.

function App() {
  // 데이터를 저장할 상태 선언
  const [data, setData] = useState([]);

  // 컴포넌트가 마운트될 때 데이터를 가져오기
  useEffect(() => {
    fetchData();
  }, []); // 빈 배열은 컴포넌트가 마운트될 때만 fetchData를 호출하게 합니다.

  // 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      // axios를 사용하여 데이터 요청
      const response = await axios.get('http://localhost:3000/api/data');
      console.log(response.data);
      setData(response.data); // 가져온 데이터를 상태에 저장
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // 화면에 데이터를 렌더링
  return (
    <div>
      <h1>Data from MySQL</h1>
      <ul>
        {data.map((item) => (
          <li key={`switch-${item.switch_id}`}>{item.switch_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
