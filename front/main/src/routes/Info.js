import React from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import "./Main.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Info() {
  // Main.js에서 state={{info:item}} 으로 받은 state를 받아와서
  // item에 저장 후 return을 이용해서 화면에 렌더링
  const item = useParams();

  const [swInfos, setswInfos] = useState([]);
  const getSwitchInfo = async () => {
    try {
      const response = await axios.post("http://localhost:3003/api/info", {
        switch_id: item.id,
      });
      setswInfos(response.data[0]);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  console.log(swInfos);
  useEffect(() => {
    getSwitchInfo();
  }, []);

  // 화면에 데이터를 렌더링
  return (
    <div>
      <ul key={swInfos.switch_id}>
        <li>
          <ul>
            <li>동작 방식: {swInfos.switch_method}</li>
            <li>스위치: {swInfos.switch_type}</li>
            <li>피치(pitch): {swInfos.switch_pitch}</li>
            <li>키압(바닥압 기준): {swInfos.spring_force}g</li>
            <li>가격: ${swInfos.switch_price}</li>
            <li>제조사: {swInfos.maker}</li>
            <li>
              <a
                href={swInfos.infolink}
                target="_blank"
                rel="noopener noreferrer"
              >
                More Info
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <Link
        to={`/review/${swInfos.switch_id}`}
        className="move"
        state={{ info: swInfos }}
      >
        리뷰 작성하기
      </Link>
      <Link to="/" className="move">
        메인 페이지로 이동하기
      </Link>
    </div>
  );
}

export default Info;
