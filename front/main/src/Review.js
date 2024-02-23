import React from 'react';
import RatingWithReview from './Review_main';
import { Link, useLocation } from "react-router-dom";
import './Main.css';

function Review() {
  const location=useLocation();
  const item=location.state?.info; // 제품정보 받은거
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '25px', marginBottom: '-5px', color: 'black'}}>소중한 리뷰 부탁드립니다!</h1>
      <Link to="/info" className="move" state={{ info: item }}>상세 페이지로 돌아가기</Link>
      <RatingWithReview initialRating={1} item={item}/>
    </div>
  );
}

export default Review;