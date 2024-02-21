import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // axios 사용해서 API와 연결

function Main() {
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

  const chunkData=(data,chunkSize)=>{
    const chunks=[];
    for(let i=0;i<data.length;i+=chunkSize){
      chunks.push(data.slice(i,i+chunkSize));
    }
    return chunks;
  };

  // 전체 앱에 적용할 기본 스타일
  const appStyle = {
    fontFamily: 'Roboto, sans-serif',
  };

  const imageContainerStyle = {
    height: '200px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  };
  
  // 이미지에 적용할 스타일
  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '200px',
    objectFit: 'contain',
  };

  // 화면에 데이터를 렌더링
  return (
    <div style={appStyle}>
      {chunkData(data, 3).map((chunk, index) => ( // 한 줄에 제품 3개씩 보여주기
        <div key={`chunk-${index}`} style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          {chunk.map(item => (
            <div key={`switch-${item.switch_id}`} style={{ width: '30%', textAlign: 'center', padding: '10px', boxSizing: 'border-box' }}>
            <Link to={`/info/${item.switch_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div style={imageContainerStyle}>
                    <img src={`${process.env.PUBLIC_URL}/data/${item.switch_name}.jfif`} alt={item.switch_name} style={imageStyle} />
                </div>
                <div>{item.switch_name}</div>
                <div>{item.switch_type}</div>
                <div>{item.switch_pitch}피치</div>
                <div>{item.spring_force}g</div>
            </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Main;