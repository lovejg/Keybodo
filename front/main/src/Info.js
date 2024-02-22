import React from 'react';
import { useLocation } from "react-router-dom";

function Info() {
  // Main.js에서 state={{info:item}} 으로 받은 state를 받아와서
  // item에 저장 후 return을 이용해서 화면에 렌더링
  const location = useLocation();
  const item = location.state?.info;

  // 화면에 데이터를 렌더링
  return (
    <div>
      <ul>
        <li key={`switch-${item.switch_name}`}>
          {item.switch_name}
          <ul>
            <li>동작 방식: {item.switch_method}</li>
            <li>스위치: {item.switch_type}</li>
            <li>피치(pitch): {item.switch_pitch}</li>
            <li>키압(바닥압 기준): {item.spring_force}g</li>
            <li>가격: ${item.switch_price}</li>
            <li>제조사: {item.maker}</li>
            <li>
              <a href={item.infolink} target="_blank" rel="noopener noreferrer">
                More Info
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Info;